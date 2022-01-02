import { Box, Center } from "@chakra-ui/react";

const FULL_SIZE = "15px";
const SMALL_SIZE = "10px";

interface IndicatorDotProps {
  currentIndex: number;
  index: number;
  goToStep: (i: number) => void;
}

export const IndicatorDot = ({
  currentIndex,
  index,
  goToStep,
}: IndicatorDotProps) => {
  const isActive = currentIndex === index;
  const size = isActive ? FULL_SIZE : SMALL_SIZE;

  return (
    <Center width={FULL_SIZE} height={FULL_SIZE}>
      <Box
        boxShadow="dark-lg"
        cursor="pointer"
        onClick={() => goToStep(index)}
        width={size}
        height={size}
        rounded="50%"
        background={isActive ? "white" : "gray"}
        sx={{
          "&:hover": {
            width: FULL_SIZE,
            height: FULL_SIZE,
          },
        }}
      />
    </Center>
  );
};
