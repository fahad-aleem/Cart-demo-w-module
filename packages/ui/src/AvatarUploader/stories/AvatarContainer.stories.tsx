import { Story } from "@storybook/react/types-6-0";

import { AvatarContainer, AvatarContainerProps } from "../AvatarContainer";
import { UploadImageType } from "../useImage";

export default {
  title: "AvatarContainer",
  component: AvatarContainer,
};

const Template: Story<AvatarContainerProps> = args => (
  <AvatarContainer {...args} />
);

export const Default = Template.bind({});
Default.args = {
  submitFile: (f: UploadImageType) => {
    alert("going to submit file:" + f.type);
  },
};

export const WithCropperInitialImage = Template.bind({});
WithCropperInitialImage.args = {
  submitFile: (f: UploadImageType) => {
    alert("going to submit file:" + f.type);
  },
  initialImage: "/kaung-myat-min-bCAOV2Sg7Es-unsplash.jpg",
};
