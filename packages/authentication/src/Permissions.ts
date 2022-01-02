export const PERMISSIONS = {
  INVITE_USERS: "Invite Users",
  VIEW_TASKS: "View Tasks",
  EDIT_WORKSPACE: "Edit Workspace",
  VIEW_ACTIVE_USERS: "View Active Users",
  VIEW_INACTIVE_USERS: "View Inactive Users",
  VIEW_PENDING_USERS: "View Pending Users",
  TEST: "test",
} as const;

type PermissionKeys = keyof typeof PERMISSIONS;

export type PermissionsType = typeof PERMISSIONS[PermissionKeys];
