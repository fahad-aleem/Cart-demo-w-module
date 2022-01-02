import { omit, prop } from "ramda";
import { useContextSelector } from "use-context-selector";

import { User } from "@goldn/data";

import { AuthContext, AuthUser } from "../AuthProvider";

export function useUser<T extends keyof AuthUser>(selector: T): AuthUser[T];
export function useUser(): User;

export function useUser(selector?: keyof AuthUser) {
  const user: AuthUser = useContextSelector(AuthContext, state => state.user);

  if (selector) {
    return prop(selector, user);
  }

  return omit(["team", "permissions"], user);
}
