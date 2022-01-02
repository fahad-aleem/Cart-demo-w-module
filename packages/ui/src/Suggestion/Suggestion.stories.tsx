import { useState } from "react";

import { ColleagueRole, ColleagueType } from "@goldn/data";
import {
  GetTeamMembers_teamMembers,
  GetTeamMembers_teamMembers_edges,
} from "@goldn/data/src/queries/team/_generated/GetTeamMembers";
import {
  UserJobTitle,
  UserStatus,
} from "@goldn/data/types/graphql-global-types";

import { SuggestionGrid } from "./SugestionGrid";
import {
  SuggestionContainer,
  SuggestionContainerProps,
} from "./SuggestionContainer";
import { SuggestionInput } from "./SuggestionInput";
import { SuggestionItem } from "./SuggestionItem";

export default {
  title: "Suggestions",
};

const toggle = (item, selected) => {
  console.log("toggle", item, selected);
};

const options = [
  { text: "item1", selected: true },
  { text: "item2", selected: false },
  { text: "item3", selected: true },
  { text: "item4", selected: false },
  { text: "item5", selected: true },
  { text: "item6", selected: false },
  { text: "item7", selected: true },
  { text: "item8", selected: false },
  { text: "item9", selected: true },
];

export const SuggestionItemComponent = args => (
  <SuggestionItem selected={args.selected} text="item" toggle={toggle} />
);
export const SuggestionInputComponent = args => (
  <SuggestionInput
    options={options}
    label="Label"
    placeholder="Add your own"
    apply={args.apply}
    applyOnEnter={args.applyOnEnter}
  />
);
SuggestionInputComponent.args = {
  apply: console.log,
  applyOnEnter: true,
};

SuggestionItemComponent.args = {
  selected: false,
};

export const SuggestionGridComponent = args => {
  return (
    <SuggestionGrid
      paginateSize={args.pageSize}
      toggle={toggle}
      options={options}
    />
  );
};

SuggestionGridComponent.args = {
  pageSize: 6,
};

export const SuggestionContainerComponent = (
  args: SuggestionContainerProps
) => {
  const options = [
    { text: "item1", selected: false },
    { text: "item2", selected: false },
    { text: "item3", selected: false },
    { text: "item4", selected: false },
    { text: "item5", selected: false },
    { text: "item6", selected: false },
    { text: "item7", selected: false },
    { text: "item8", selected: false },
    { text: "item9", selected: false },
  ];
  const [selected, setSelected] = useState([]);

  return (
    <>
      <SuggestionContainer
        options={options}
        applyOnEnter
        onChange={setSelected}
        {...args}
      />
      {selected.map(s => (
        <span key={s}> {s + " | "} </span>
      ))}
    </>
  );
};
SuggestionContainerComponent.args = {
  inputLabel: "Label",
  inputPlaceholder: "Add your own",
  columns: 3,
  pageSize: 6,
} as SuggestionContainerProps;

export const SuggestionContainerMemberComponent = (
  args: SuggestionContainerProps
) => {
  const genereateMember = (
    id,
    name,
    displayName
  ): GetTeamMembers_teamMembers_edges => ({
    __typename: "TeamMemberEdge",
    isTeamMember: true,
    node: {
      __typename: "TeamMember",
      active: true,
      id: "654635465374",
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

  const teamMembers: GetTeamMembers_teamMembers = {
    __typename: "TeamMemberConnection",
    edges: [
      genereateMember("1231243", "Ian Pitts", "devIan"),
      genereateMember("56658456745", "Shamaila Mahmood", "devShamaila"),
      genereateMember("7324453146", "Min Soo Kim", "devMinSoo"),
      genereateMember("456456", "Frank Diamond", "Frank&James"),
    ],
  };
  const transformedTeamMembers = teamMembers.edges.map(e => ({
    text: e.node.user.name,
    textAddon: "@" + e.node.user.displayName,
    userID: e.node.userId,
    selected: false,
  }));

  const [selected, setSelected] = useState([]);

  return (
    <>
      <SuggestionContainer
        options={transformedTeamMembers}
        applyOnEnter
        onChange={setSelected}
        onlyProposed
        onChangeProp="userID"
        {...args}
      />
      {selected.map(s => (
        <span key={s}> {s + " | "} </span>
      ))}
    </>
  );
};
SuggestionContainerComponent.args = {
  inputLabel: "Label",
  inputPlaceholder: "Add your own",
  columns: 3,
  pageSize: 6,
} as SuggestionContainerProps;
