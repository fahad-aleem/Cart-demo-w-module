import {
  Box,
  Button as ButtonComponent,
  Switch as SwitchComponent,
  Checkbox as CheckboxComponent,
  Textarea as TextareaComponent,
  Text,
  Flex,
  FlexProps,
  ButtonProps,
} from "@chakra-ui/react";

import {
  sampleButtonComponentData,
  sampleButtonSizeData,
  sampleRadioComponentData,
  sampleSwitchComponentData,
  sampleTextareaComponentData,
} from "./constants";

export default {
  title: "Components",
};

const ComponentContainer = ({
  children,
  ...rest
}: {
  children: React.ReactNode;
} & FlexProps) => (
  <Flex
    justifyContent="space-between"
    w="100%"
    m="0"
    p="0"
    minW="590px"
    overflowX="scroll"
    {...rest}
  >
    {children}
  </Flex>
);

interface SwitchComponentProps {
  size: string;
  isDisabled?: boolean;
  isChecked?: boolean;
}

const SwitchComponentBox = ({
  label,
  switchComponent,
  boxMarginRight,
}: {
  label: string;
  switchComponent: SwitchComponentProps;
  boxMarginRight?: number;
}) => (
  <Box mr={boxMarginRight}>
    <Text fontSize="10px" mb={0.5}>
      {label}
    </Text>
    <SwitchComponent
      variant="goldn"
      size={switchComponent.size}
      isDisabled={switchComponent.isDisabled}
      isChecked={switchComponent.isChecked}
    />
  </Box>
);

const SwitchContainer = ({
  title,
  switchParameters,
}: {
  title: string;
  switchParameters: {
    label: string;
    component: SwitchComponentProps;
    marginRight?: number;
  }[];
}) => (
  <Box p={1}>
    <Text fontSize="sm" mb={4}>
      {title}
    </Text>
    <Flex>
      {switchParameters.map((parameter, index) => (
        <SwitchComponentBox
          key={index}
          label={parameter.label}
          switchComponent={parameter.component}
          boxMarginRight={parameter.marginRight}
        />
      ))}
    </Flex>
  </Box>
);

export const Switch = () => (
  <ComponentContainer>
    {sampleSwitchComponentData.map((data, index) => (
      <SwitchContainer
        key={index}
        title={data.title}
        switchParameters={data.switchParameters}
      />
    ))}
  </ComponentContainer>
);

interface ButtonDataProps {
  marginRight?: number;
  variant: string;
  label: string;
  isDisabled?: boolean;
}

const ButtonComponentBox = ({
  marginBottom,
  buttonData,
  size,
}: {
  marginBottom?: number;
  buttonData: ButtonDataProps[];
  size: string;
}) => (
  <Flex mb={marginBottom}>
    {buttonData.map((data, index) => (
      <ButtonToRender
        key={index}
        variant={data.variant}
        marginRight={data.marginRight}
        label={data.label}
        size={size}
        isDisabled={data.isDisabled}
      />
    ))}
  </Flex>
);

const ButtonToRender = ({
  label,
  ...rest
}: {
  label: string;
} & ButtonProps) => (
  <ButtonComponent w="50%" {...rest}>
    {label}
  </ButtonComponent>
);

export const Button = () => {
  return (
    <ComponentContainer>
      {sampleButtonSizeData.map((size, index) => (
        <Flex key={index} flexDirection="column" p={1}>
          <Text fontSize="sm" mb={4}>
            {size[0]}
          </Text>
          {sampleButtonComponentData.map((data, index) => (
            <ButtonComponentBox
              key={index}
              size={size[1]}
              marginBottom={data.marginBottom}
              buttonData={data.buttonData}
            />
          ))}
        </Flex>
      ))}
    </ComponentContainer>
  );
};

export const Checkbox = () => (
  <ComponentContainer>
    {sampleRadioComponentData.map((data, index) => (
      <CheckboxComponent
        key={index}
        variant="goldn"
        mr={data.marginRight}
        isChecked={data.isChecked}
        isDisabled={data.isDisabled}
        isIndeterminate={data.isIndeterminate}
      >
        {data.label}
      </CheckboxComponent>
    ))}
  </ComponentContainer>
);

export const Textarea = () => {
  return (
    <ComponentContainer>
      {sampleTextareaComponentData.map((data, index) => (
        <TextareaComponent
          key={index}
          variant="goldn"
          m={2}
          placeholder={data.placeholder}
          isDisabled={data.isDisabled}
        />
      ))}
    </ComponentContainer>
  );
};
