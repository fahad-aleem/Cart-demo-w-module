import { prop } from "ramda";

import { AuthUser } from "../AuthProvider";
import { useUser } from "./useUser";

export const usePermissions = (permissionName: string): boolean => {
  const permissions = useUser("permissions");
  const isAllowed = !!permissionName; //TODO: Awaiting how the actual permissions object will look like.

  if (permissions) {
    console.log("Awaiting implementation");
  }

  return isAllowed;
};

export function useUserPermissions<T extends keyof AuthUser["permissions"]>(
  selector: T
): AuthUser["permissions"][T];

export function useUserPermissions(): AuthUser["permissions"];

export function useUserPermissions(selector?: keyof AuthUser["permissions"]) {
  const permissions = useUser("permissions");

  return selector ? prop(selector, permissions) : permissions;
}
