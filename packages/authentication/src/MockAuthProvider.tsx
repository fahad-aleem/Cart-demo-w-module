import { AuthContext, AuthUser } from "./AuthProvider";

export type User = {
  id: string;
};
export const MockAuthProvider = ({
  auth,
  user,
  children,
}: {
  auth?: any;
  user?: User;
  children: React.ReactNode;
}) => {
  const userObject = {
    ...user,
    permissions: null,
    team: null,
  } as AuthUser;

  return (
    <AuthContext.Provider
      value={{
        auth,
        user: userObject,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
