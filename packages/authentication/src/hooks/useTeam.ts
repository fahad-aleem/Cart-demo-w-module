import { prop } from "ramda";

import { AuthUser } from "../AuthProvider";
import { useUser } from "./useUser";

export function useTeam<T extends keyof AuthUser["team"]>(
  selector: T
): AuthUser["team"][T];

export function useTeam(): AuthUser["team"];

export function useTeam(selector?: keyof AuthUser["team"]) {
  const team = useUser("team");

  return selector ? prop(selector, team) : team;
}
