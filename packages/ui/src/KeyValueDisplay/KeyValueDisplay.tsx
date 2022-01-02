import { Box, Text } from "@chakra-ui/react";

interface KeyValueDisplayProps {
  label: string;
  value: string;
}
export const KeyValueDisplay = ({ label, value }: KeyValueDisplayProps) => (
  <Box>
    <Text pl={3} fontWeight="bold" fontSize="sm">
      {label}
    </Text>
    <Text pl={3} fontSize="sm">
      {value}
    </Text>
  </Box>
);
