import { WebAuth } from "auth0-js";
import { useRouter } from "next/router";
import { pathSatisfies, includes } from "ramda";
import React, { useState, useEffect, useCallback } from "react";
import { createContext } from "use-context-selector";

import {
  useLazyQuery,
  UserDetailsVariables,
  userQueries,
  UserDetails,
  User,
  Team,
  ColleagueRole,
  ColleagueType,
  VerifyInvitation,
  VerifyInvitationVariables,
  inviteQueries,
} from "@goldn/data";

export interface Auth {
  loginWithPassword;
  authorize;
  logout;
  handleAuthentication;
  handleAdminAuthentication;
  isAuthenticated: boolean;
  invitee: Invitee;
  renewSession;
  authInfo?: AuthInfo;
  isLoading: boolean;
  passwordlessStart;
  reloadUser;
  handleInviteVerification;
}
export interface AuthUser extends User {
  team: Team;
  permissions: { role: ColleagueRole; type: ColleagueType };
}
export interface AuthProviderState {
  auth: Auth;
  user: AuthUser;
}

export interface Invitee {
  code: string;
  email: string;
}

export const AuthContext = createContext<AuthProviderState>(null);

const generateAuth = (domain, clientId, redirectUri, responseType) =>
  new WebAuth({
    domain: domain,
    clientID: clientId,
    responseType: responseType,
    redirectUri: redirectUri,
    scope: "openid profile email",
  });

interface AuthProviderProps {
  children: React.ReactNode;
  domain: string;
  clientId: string;
  redirectUri: string;
  responseType: string;
}

interface AuthInfo {
  accessToken: string;
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { children, domain, clientId, redirectUri, responseType } = props;
  const [auth0] = useState(
    generateAuth(domain, clientId, redirectUri, responseType)
  );
  const [isLoading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<AuthUser>(null);
  const [authInfo, setAuthInfo] = useState<AuthInfo>(null);
  const { trigger, data } = useLazyQuery<UserDetails, UserDetailsVariables>(
    userQueries.getByEmail
  );
  const {
    trigger: triggerInviteVerification,
    data: verifiedData,
    error: verificationError,
  } = useLazyQuery<VerifyInvitation, VerifyInvitationVariables>(
    inviteQueries.verifyInvitation
  );
  const [invitee, setInvitee] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");

  const passwordlessStart = useCallback(
    async (email, callback) => {
      return await auth0.passwordlessStart(
        {
          connection: "email",
          send: "link",
          email,
        },
        (err, res) => {
          callback(err, res);
        }
      );
    },
    [auth0]
  );

  const loadUserData = authResult => {
    const { email } = authResult.idTokenPayload;

    trigger({ email });
  };

  const authorize = useCallback(() => {
    auth0.authorize({ connection: "google-oauth2" });
  }, [auth0]);

  const loginWithPassword = useCallback(
    (email, password) => {
      auth0.login({
        realm: "tests",
        email,
        password,
      });
    },
    [auth0]
  );

  const logout = useCallback(() => {
    auth0.logout({
      returnTo: window.location.origin,
    });
  }, [auth0]);

  const reloadUser = useCallback(() => {
    trigger({ email: user.email });
  }, [user]);

  const renewSession = useCallback(() => {
    setLoading(true);
    auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        if (
          pathSatisfies(
            includes("google-oauth2"),
            ["idTokenPayload", "sub"],
            authResult
          )
        ) {
          setUser({
            ...authResult,
            id: authResult.idTokenPayload.email,
          });
        } else {
          loadUserData(authResult);
        }
      } else if (err) {
        setUser(null);
      }
      setLoading(false);
    });
  }, [auth0, setLoading]);

  const handleAuthentication = useCallback(() => {
    auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken) {
        loadUserData(authResult);
        setAuthInfo(authResult.accessToken);
      }
    });
  }, [auth0]);

  const handleAdminAuthentication = useCallback(() => {
    setLoading(true);
    auth0.parseHash({ hash: window.location.hash }, (err, authResult) => {
      if (err) {
        return console.log(err);
      }
      auth0.client.userInfo(authResult.accessToken, function (err, user) {
        setUser({
          ...authResult,
          id: authResult.idTokenPayload.email,
          ...user,
        });
        setLoading(false);
      });
    });
  }, [auth0, setLoading]);

  const handleInviteVerification = verificationCode => {
    if (verificationCode) {
      setVerificationCode(verificationCode);
      triggerInviteVerification({
        code: verificationCode,
      });
    }
  };

  useEffect(() => {
    if (verifiedData) {
      setInvitee({
        code: verificationCode,
        email: verifiedData.verifyTeamMemberInvite.email,
      });
    }

    // TODO: Need to add error handler
  }, [verifiedData, verificationError]);

  useEffect(() => {
    if (!auth0) return;
    renewSession();
  }, [auth0, renewSession]);

  useEffect(() => {
    if (data?.userDetails) {
      setUser({
        ...data.userDetails.user,
        team: data.userDetails.team,
        permissions: {
          role: data.userDetails.primaryUserRole,
          type: data.userDetails.primaryUserType,
        },
      });
    }
  }, [data]);

  return (
    <AuthContext.Provider
      value={{
        auth: {
          loginWithPassword,
          authorize,
          logout,
          handleAuthentication,
          isAuthenticated: !!(user && user.id),
          invitee,
          renewSession,
          authInfo,
          isLoading,
          passwordlessStart,
          handleAdminAuthentication,
          reloadUser,
          handleInviteVerification,
        },
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
