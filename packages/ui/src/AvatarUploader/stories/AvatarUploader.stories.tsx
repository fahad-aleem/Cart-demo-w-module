import { Box, Spinner, Flex } from "@chakra-ui/react";
import { Story } from "@storybook/react/types-6-0";
import { useState } from "react";

import {
  MockAuthProvider,
  User,
} from "@goldn/authentication/src/MockAuthProvider";

import { AvatarUploader, AvatarUploaderProps } from "../AvatarUploader";

export default {
  title: "AvatarUploader",
  component: AvatarUploader,
};

const Template: Story<AvatarUploaderProps> = args => {
  const [isloading, setIsLoading] = useState(false);

  const onLoad = () => setIsLoading(true);

  const onLoadEnd = () => setIsLoading(false);

  const dummyUser: User = {
    id: "1231234",
  };

  return (
    <Flex>
      <MockAuthProvider user={dummyUser}>
        <AvatarUploader {...args} onLoad={onLoad} onLoadEnd={onLoadEnd} />
        {isloading && (
          <Box marginLeft="auto">
            <Box>somewhere else on the page:</Box>
            <Box>
              updating... <Spinner />
            </Box>
          </Box>
        )}
      </MockAuthProvider>
    </Flex>
  );
};

export const Default = Template.bind({});
