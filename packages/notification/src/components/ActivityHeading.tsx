import { Box, Flex, Switch, Tooltip } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { ChangeEvent } from "react";

import { PRIORITY_ALL } from "../../constants";

const NotificationLabel = styled(Box)`
  font-style: normal;
  font-size: 14px;
  letter-spacing: -0.01em;
  color: "offBlack";
`;

const ActivityLabel = styled(NotificationLabel)`
  font-weight: bold;
  line-height: 20px;
`;

const PriorityLabel = styled(NotificationLabel)`
  font-weight: 600;
  margin-right: 8px;
`;

interface Props {
  priority: string;
  togglePrioritySwitch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ActivityHeading = ({ priority, togglePrioritySwitch }: Props) => {
  return (
    <Flex justifyContent="space-between" h={12} px={3.5} py={2.5}>
      <ActivityLabel>Activity</ActivityLabel>
      <Flex>
        <PriorityLabel>
          {priority === PRIORITY_ALL ? "All" : "Priority"}
        </PriorityLabel>
        <Tooltip
          label={
            priority === PRIORITY_ALL ? "" : "Filter out less relevant activity"
          }
          aria-label="A tooltip"
        >
          <Box>
            <Switch
              variant="goldn"
              data-testid="priority-switch"
              size="md"
              onChange={togglePrioritySwitch}
              isChecked={priority !== PRIORITY_ALL}
            />
          </Box>
        </Tooltip>
      </Flex>
    </Flex>
  );
};
