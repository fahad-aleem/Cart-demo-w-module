import { usePermissions } from "../hooks";
import { PermissionsType } from "../Permissions";

interface IsAuthorizedProps {
  permission: PermissionsType;
  otherwise?: JSX.Element;
  children: React.ReactNode;
}

export const IfAuthorized = ({
  permission,
  otherwise = null,
  children,
}: IsAuthorizedProps) => {
  const isAllowed = usePermissions(permission);

  if (!isAllowed) {
    return otherwise;
  }

  return <>{children}</>;
};
