import { prop } from "ramda";
import { useContextSelector } from "use-context-selector";

import { AuthContext } from "@goldn/authentication";

import { Auth } from "../AuthProvider";

export function useAuth<T extends keyof Auth>(
  selector: T,
  defeaultValue?: any
): Auth[T];

export function useAuth(): Auth;

export function useAuth(selector?: keyof Auth, defeaultValue?: any) {
  const auth: Auth = useContextSelector(AuthContext, state => state.auth);

  if (selector) {
    return prop(selector, auth) || defeaultValue;
  }

  return auth;
}
