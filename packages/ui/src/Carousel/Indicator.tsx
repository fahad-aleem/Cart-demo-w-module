import { Box, Center, HStack } from "@chakra-ui/react";

import { IndicatorDot } from "./IndicatorDot";

interface IndicatorProps {
  total: number;
  current: number;
  goToStep: (i: number) => void;
}

export const Indicator = ({ total, current, goToStep }: IndicatorProps) => {
  return (
    <Box bottom="0" position="absolute" w="100%" height="20px">
      <Center>
        <HStack spacing="10px">
          {new Array(total).fill(undefined).map((_v, key) => (
            <IndicatorDot
              goToStep={goToStep}
              currentIndex={current}
              key={key}
              index={key}
            />
          ))}
        </HStack>
      </Center>
    </Box>
  );
};
