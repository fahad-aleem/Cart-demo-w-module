import { Story } from "@storybook/react";

import {
  MockAuthProvider,
  User,
} from "@goldn/authentication/src/MockAuthProvider";

import { LoadContentByUser } from "./LoadContentByUser";

export default {
  title: "LoadContentByUser",
  component: LoadContentByUser,
};

const dummyUser: User = {
  id: "1231234",
};

export const LoadContentByUserComponent: Story<{ hasUser: boolean }> = args => {
  return (
    <MockAuthProvider user={args.hasUser ? dummyUser : null}>
      <LoadContentByUser>Im hidden when no userID exists</LoadContentByUser>
    </MockAuthProvider>
  );
};
LoadContentByUserComponent.args = {
  hasUser: false,
};
