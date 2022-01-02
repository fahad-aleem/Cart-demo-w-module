import { CloseIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

import {
  ActivityStatus,
  ActivityStatusProps,
} from "../ActivityStatus/ActivityStatus";
import { StatusType } from "../ActivityStatus/ActivityStatusIcon";

type ToastProps = ActivityStatusProps & {
  title: string;
  description: string;
  close: () => void;
  status?: StatusType;
  icon?: React.ReactNode;
  button?: React.ReactNode;
};

export const Toast = ({
  avatarBorderColor,
  name,
  avatar,
  title,
  description,
  close,
  status,
  button,
  icon,
}: ToastProps) => {
  return (
    <Box w="391px" minH="119px" bg="black" borderRadius="md" padding={3}>
      <Grid templateColumns="repeat(10, 1fr)">
        <GridItem rowSpan={2} colSpan={1} pl={1} pt={1} mr={1}>
          <ActivityStatus
            avatarBorderColor={avatarBorderColor}
            name={name}
            avatar={avatar}
            status={status}
            icon={icon}
          />
        </GridItem>
        <GridItem rowSpan={1} colSpan={8}>
          <Text fontSize="sm" color="white" fontWeight="600" py={2}>
            {title}
          </Text>
          <Text fontSize="sm" color="white" mb={1}>
            {description}
          </Text>
          {button}
        </GridItem>
        <GridItem rowSpan={2} colSpan={1} textAlign="right">
          <CloseIcon
            _hover={{
              backgroundColor: "white",
              border: "none",
              color: "black",
            }}
            onClick={close}
            color="gray"
            w={6}
            h={6}
            p={1.5}
            border="1px"
            borderColor="gray"
            borderRadius="sm"
          />
        </GridItem>
      </Grid>
    </Box>
  );
};
