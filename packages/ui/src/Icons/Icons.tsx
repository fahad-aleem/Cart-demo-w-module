import {
  Table,
  TableCaption,
  Tbody,
  Tr,
  Td,
  VStack,
  Text,
} from "@chakra-ui/react";

import {
  ActivityIcon,
  AlertIcon,
  BurgerIcon,
  DropDownArrow,
  GlobeIcon,
  GoogleIcon,
  HomeIcon,
  LinkedinIcon,
  ProjectIcon,
  SearchIcon,
  TickIcon,
  UploadIcon,
  ZoomIcon,
  SortIcon,
} from "@goldn/icons";
import { FacebookIcon } from "@goldn/icons/src/FacebookIcon";
import { TwitterIcon } from "@goldn/icons/src/TwitterIcon";

export const Icons = () => {
  return (
    <Table>
      <TableCaption>Goldn Icons</TableCaption>
      <Tbody>
        <Tr>
          <Td>
            <VStack>
              <ActivityIcon />
              <Text> ActivityIcon </Text>
            </VStack>
          </Td>
          <Td>
            <VStack>
              <AlertIcon />
              <Text> AlertIcon </Text>
            </VStack>
          </Td>
          <Td>
            <VStack>
              <DropDownArrow />
              <Text> DropDownArrow </Text>
            </VStack>
          </Td>
          <Td>
            <VStack>
              <FacebookIcon />
              <Text> FacebookIcon </Text>
            </VStack>
          </Td>
          <Td>
            <VStack>
              <GlobeIcon />
              <Text> GlobeIcon </Text>
            </VStack>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <VStack>
              <HomeIcon />
              <Text> HomeIcon </Text>
            </VStack>
          </Td>
          <Td>
            <VStack>
              <GoogleIcon />
              <Text> GoogleIcon </Text>
            </VStack>
          </Td>
          <Td>
            <VStack>
              <ProjectIcon />
              <Text> ProjectIcon </Text>
            </VStack>
          </Td>
          <Td>
            <VStack>
              <LinkedinIcon />
              <Text> LinkedinIcon </Text>
            </VStack>
          </Td>
          <Td>
            <VStack>
              <SearchIcon />
              <Text> SearchIcon </Text>
            </VStack>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <VStack>
              <TickIcon />
              <Text> TickIcon </Text>
            </VStack>
          </Td>
          <Td>
            <VStack>
              <TwitterIcon />
              <Text> TwitterIcon </Text>
            </VStack>
          </Td>
          <Td>
            <VStack>
              <UploadIcon />
              <Text> UploadIcon </Text>
            </VStack>
          </Td>
          <Td>
            <VStack>
              <ZoomIcon />
              <Text> ZoomIcon </Text>
            </VStack>
          </Td>
          <Td>
            <VStack>
              <BurgerIcon />
              <Text> Burger/SliderThumb </Text>
            </VStack>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <VStack>
              <SortIcon />
              <Text> Sort </Text>
            </VStack>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};
