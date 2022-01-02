import { ColleagueRole, ColleagueType, UserStatus } from "../src";
import type {
  GetTeamMembers_teamMembers,
  GetTeamMembers_teamMembers_edges,
} from "../src/queries/team/_generated/GetTeamMembers";
import { UserJobTitle } from "../types/graphql-global-types";

export const genereateMember = (
  id: string,
  name: string,
  displayName: string
): GetTeamMembers_teamMembers_edges => ({
  __typename: "TeamMemberEdge",
  isTeamMember: true,
  node: {
    __typename: "TeamMember",
    active: true,
    id,
    primary: true,
    role: ColleagueRole.MEMBER,
    teamId: "asdasdasd",
    type: ColleagueType.CREATOR,
    userId: id,
    user: {
      __typename: "User",
      displayName,
      email: "",
      id,
      jobTitle: UserJobTitle.CEO,
      name,
      phone: "",
      status: UserStatus.ACTIVE,
      username: "",
    },
  },
});

export const teamMembersMock: GetTeamMembers_teamMembers = {
  __typename: "TeamMemberConnection",
  edges: [
    genereateMember("1231243", "Ian Pitts", "devIan"),
    genereateMember("56658456745", "Shamaila Mahmood", "devShamaila"),
    genereateMember("7324453146", "Min Soo Kim", "devMinSoo"),
    genereateMember("456456", "Frank Diamond", "Frank&James"),
  ],
};
