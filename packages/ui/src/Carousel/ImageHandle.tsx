import { ArrowRightIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { Center, Flex } from "@chakra-ui/react";

const handleSize = "20px";

export const ImageHandle = ({
  handle,
  type,
  isDisabled,
}: {
  handle: () => void;
  type: "next" | "prev";
  isDisabled: boolean;
}) => {
  const isNextHandle = type === "next";
  const Icon = isNextHandle ? ArrowRightIcon : ArrowLeftIcon;

  const handleCLick = () => {
    if (!isDisabled) {
      handle();
    }
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="50px"
      height="100%"
      left={isNextHandle ? null : "0"}
      right={!isNextHandle ? null : "0"}
      position="absolute"
      cursor={!isDisabled && "pointer"}
      onClick={handleCLick}
      sx={{
        "&:hover": {
          bg: !isDisabled && "whiteAlpha.200",
        },
      }}
    >
      <Flex
        justifyContent="center"
        background="white"
        rounded="50%"
        width={handleSize}
        height={handleSize}
      >
        <Center>
          <Icon w={3} h={3} color={isDisabled ? "gray.100" : "black"} />
        </Center>
      </Flex>
    </Flex>
  );
};
