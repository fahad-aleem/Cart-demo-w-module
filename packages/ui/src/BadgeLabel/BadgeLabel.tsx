import { Badge } from "@chakra-ui/react";

export const BadgeLabel = () => {
  return (
    <Badge borderRadius="9999" bg="brightBlue" color="white" fontSize="15px" textTransform="capitalize" py="5px" px="14px" position="absolute" top="15px" left="15px">
      Recommended
    </Badge>
  );
};
