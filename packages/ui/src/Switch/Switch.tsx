import {
  Switch as ChakraSwitch,
  SwitchProps as ChakraSwitchProps,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

const StyledSwitch = styled(ChakraSwitch)`
  .chakra-switch__track {
    background: ${props => (props.flag ? "white" : "black")};
    border: ${props =>
      props.flag ? "1px solid var(--chakra-colors-offWhite);" : "none"};
  }
  .chakra-switch__thumb {
    background: ${props => (props.flag ? "black" : "white")};
  }
`;

type SwitchProps = { flag: boolean } & ChakraSwitchProps;

export const Switch = ({ flag, ...rest }: SwitchProps) => {
  return <StyledSwitch flag={+flag} {...rest} />;
};
