import { AddIcon } from "@chakra-ui/icons";
import { IconButton, IconButtonProps } from "@chakra-ui/react";

export const GoldnPlus = (props: IconButtonProps) => (
  <IconButton colorScheme="gold" icon={<AddIcon />} {...props} />
);
