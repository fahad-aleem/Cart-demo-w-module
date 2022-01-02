import {
  Box,
  Stack,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useState } from "react";

import { ValidationMessage } from "@goldn/ui";

import SUPPLIER_TYPES from "../../../../../apps/marketing-app/companyTypes";
import LOCATIONS from "../../../../../apps/marketing-app/locations";
import SERVICES from "../../../../../apps/marketing-app/services";

const filterToUrl = filters => {
  const urlParts: string[] = [];

  if (filters.services.length > 0) {
    urlParts.push("service");
    urlParts.push(filters.services.join(","));
  }

  if (filters.supplierTypes.length > 0) {
    urlParts.push("companyType");
    urlParts.push(filters.supplierTypes.join(","));
  }

  if (filters.locations.length > 0) {
    urlParts.push("location");
    urlParts.push(filters.locations.join(","));
  }
  if (filters.searchKeyword.length > 0) {
    urlParts.push("keyword");
    urlParts.push(filters.searchKeyword.join(","));
  }
  return urlParts.join("/");
};

export const SupplierFilters = ({ selectedFilters, setSelectedFilters }) => {
  const router = useRouter();
  const [spitAlert, setSpitAlert] = useState(false);
  const [accordion, setAccordion] = useState(true);
  const [AccService, setAccService] = useState(true);
  const [AccLocation, setAccLocation] = useState(true);

  const handleAccordion = event => {
    setAccordion(!accordion);
  };

  const handleAccordionService = event => {
    setAccService(!AccService);
  };

  const handleAccordionLocation = event => {
    setAccLocation(!AccLocation);
  };

  const handleLocationClicked = event => {
    let selection = [];

    if (
      event.target.checked &&
      selectedFilters.locations.indexOf(event.target.value) == -1
    ) {
      if (
        (selectedFilters.supplierTypes.length > 1 &&
          selectedFilters.locations.length > 0) ||
        (selectedFilters.services.length > 1 &&
          selectedFilters.locations.length > 0) ||
        (selectedFilters.services.length > 0 &&
          selectedFilters.locations.length > 0) ||
        (selectedFilters.locations.length > 0 &&
          selectedFilters.searchKeyword.length > 0)
      ) {
        setSpitAlert(!spitAlert);
        selection = selectedFilters.locations;
      } else {
        selection = [...selectedFilters.locations, event.target.value];
      }
    } else {
      selection = selectedFilters.locations.filter(
        element => element != event.target.value
      );

      setSpitAlert(false);
    }
    const filters = { ...selectedFilters, locations: selection };

    router.push(`/suppliers/${filterToUrl(filters)}`);
  };

  const handleServiceClicked = event => {
    let selection = [];

    if (
      event.target.checked &&
      selectedFilters.services.indexOf(event.target.value) == -1
    ) {
      if (
        (selectedFilters.supplierTypes.length > 1 &&
          selectedFilters.services.length === 0) ||
        (selectedFilters.locations.length > 1 &&
          selectedFilters.services.length === 0) ||
        selectedFilters.searchKeyword.length === 1
      ) {
        setSpitAlert(!spitAlert);
      } else {
        selection = [...selectedFilters.services, event.target.value];
      }
    } else {
      selection = selectedFilters.services.filter(
        element => element != event.target.value
      );
      setSpitAlert(false);
    }
    const filters = { ...selectedFilters, services: selection };

    router.push(`/suppliers/${filterToUrl(filters)}`);
  };

  const handleSupplierTypeClicked = event => {
    let selection = [];

    if (
      event.target.checked &&
      selectedFilters.supplierTypes.indexOf(event.target.value) == -1
    ) {
      if (
        (selectedFilters.supplierTypes.length > 0 &&
          selectedFilters.services.length > 0) ||
        (selectedFilters.supplierTypes.length > 0 &&
          selectedFilters.locations.length > 1) ||
        (selectedFilters.supplierTypes.length > 0 &&
          selectedFilters.searchKeyword.length > 0)
      ) {
        setSpitAlert(!spitAlert);
        selection = selectedFilters.supplierTypes;
      } else {
        selection = [...selectedFilters.supplierTypes, event.target.value];
      }
    } else {
      selection = selectedFilters.supplierTypes.filter(
        element => element != event.target.value
      );

      setSpitAlert(false);
    }
    const filters = { ...selectedFilters, supplierTypes: selection };

    router.push(`/suppliers/${filterToUrl(filters)}`);
  };

  const clearState = () => {
    const filters = {
      locations: [],
      searchKeyword: [],
      supplierTypes: [],
      services: [],
    };

    setSpitAlert(false);
    router.push("/suppliers/");
    setSelectedFilters(filters);
  };

  return (
    <>
      <ValidationMessage message={spitAlert} />

      <Box
        maxWidth={["100%", "250px", "300px"]}
        minWidth={["100%", "250px", "300px"]}
        borderRadius="sm"
        boxShadow="sm"
        bg="white"
        p={6}
        pt={3}
        mr={5}
        className="FilterSideBar"
      >
        <Accordion defaultIndex={[0]}>
          {accordion ? (
            <AccordionItem
              borderTopWidth="0"
              borderBottomWidth="1px"
              borderColor="gray.200"
            >
              <AccordionButton
                fontSize="lg"
                px="0"
                _hover={{ bg: "transparent" }}
                onClick={handleAccordion}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  fontFamily="SofiaPro-SemiBold"
                  fontSize={["18", "20px"]}
                >
                  Supplier type
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel px={0} pt={0} pb={4}>
                <Stack spacing={2} direction="column">
                  <CheckBoxList
                    list={SUPPLIER_TYPES}
                    clickHandler={handleSupplierTypeClicked}
                    checkedItems={selectedFilters.supplierTypes}
                  />
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          ) : (
            <AccordionItem
              borderTopWidth="0"
              borderBottomWidth="1px"
              borderColor="gray.200"
            >
              <AccordionButton
                flexDirection="column"
                alignItems="flex-start"
                fontSize="lg"
                px="0"
                pos="relative"
                _hover={{ bg: "transparent" }}
                onClick={handleAccordion}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  fontFamily="SofiaPro-SemiBold"
                  fontSize={["18", "20px"]}
                  maxH="30px"
                >
                  Supplier type
                </Box>
                <Stack
                  spacing={2}
                  direction="column"
                  alignItems="self-start"
                  justifyContent="flex-start"
                  textAlign="left"
                  mt="8px"
                  className="selectedCheckBtn"
                >
                  {selectedFilters.supplierTypes.map(item => (
                    <Checkbox
                      key={item}
                      colorScheme="green"
                      color="gray.600"
                      value={item}
                      isChecked={true}
                      alignItems="flex-start"
                    >
                      {item}
                      <Text as="span" color="darkgray" mt="4px">
                        {"(" + SUPPLIER_TYPES[item] + ")"}
                      </Text>
                    </Checkbox>
                  ))}
                </Stack>

                <AccordionIcon />
              </AccordionButton>
            </AccordionItem>
          )}
        </Accordion>
        <Accordion defaultIndex={[0]}>
          {AccService ? (
            <AccordionItem
              borderTopWidth="0"
              borderBottomWidth="1px"
              borderColor="gray.200"
            >
              <AccordionButton
                fontSize="lg"
                px="0"
                _hover={{ bg: "transparent" }}
                onClick={handleAccordionService}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  fontFamily="SofiaPro-SemiBold"
                  fontSize={["18", "20px"]}
                >
                  Service
                </Box>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel px={0} pt={0} pb={4}>
                <Stack spacing={2} direction="column">
                  <CheckBoxList
                    list={SERVICES}
                    clickHandler={handleServiceClicked}
                    checkedItems={selectedFilters.services}
                  />
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          ) : (
            <AccordionItem
              borderTopWidth="0"
              borderBottomWidth="1px"
              borderColor="gray.200"
            >
              <AccordionButton
                flexDirection="column"
                alignItems="flex-start"
                fontSize="lg"
                px="0"
                pos="relative"
                _hover={{ bg: "transparent" }}
                onClick={handleAccordionService}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  fontFamily="SofiaPro-SemiBold"
                  fontSize={["18", "20px"]}
                  maxH="30px"
                >
                  Service
                </Box>
                <Stack
                  spacing={2}
                  direction="column"
                  alignItems="self-start"
                  justifyContent="flex-start"
                  textAlign="left"
                  mt="8px"
                  className="selectedCheckBtn"
                >
                  {selectedFilters.services.map(item => (
                    <Checkbox
                      key={item}
                      colorScheme="green"
                      color="gray.600"
                      value={item}
                      isChecked={true}
                      alignItems="flex-start"
                    >
                      {item}
                      <Text as="span" color="darkgray" mt="4px">
                        {"(" + SERVICES[item] + ")"}
                      </Text>
                    </Checkbox>
                  ))}
                </Stack>

                <AccordionIcon />
              </AccordionButton>
            </AccordionItem>
          )}
        </Accordion>

        <Accordion defaultIndex={[0]}>
          {AccLocation ? (
            <AccordionItem
              borderTopWidth="0"
              borderBottomWidth="1px"
              borderColor="gray.200"
            >
              <AccordionButton
                fontSize="lg"
                px="0"
                _hover={{ bg: "transparent" }}
                onClick={handleAccordionLocation}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  fontFamily="SofiaPro-SemiBold"
                  fontSize={["18", "20px"]}
                >
                  Location
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel px={0} pt={0} pb={4}>
                <Stack spacing={2} direction="column">
                  <CheckBoxList
                    list={LOCATIONS}
                    clickHandler={handleLocationClicked}
                    checkedItems={selectedFilters.locations}
                  />
                </Stack>
              </AccordionPanel>
            </AccordionItem>
          ) : (
            <AccordionItem
              borderTopWidth="0"
              borderBottomWidth="1px"
              borderColor="gray.200"
            >
              <AccordionButton
                flexDirection="column"
                alignItems="flex-start"
                fontSize="lg"
                px="0"
                pos="relative"
                _hover={{ bg: "transparent" }}
                onClick={handleAccordionLocation}
              >
                <Box
                  flex="1"
                  textAlign="left"
                  fontFamily="SofiaPro-SemiBold"
                  fontSize={["18", "20px"]}
                  maxH="30px"
                >
                  Location
                </Box>
                <Stack
                  spacing={2}
                  direction="column"
                  alignItems="self-start"
                  justifyContent="flex-start"
                  textAlign="left"
                  mt="8px"
                  className="selectedCheckBtn"
                >
                  {selectedFilters.locations.map(item => (
                    <Checkbox
                      key={item}
                      colorScheme="green"
                      color="gray.600"
                      value={item}
                      isChecked={true}
                      alignItems="flex-start"
                    >
                      {item}
                      <Text as="span" color="darkgray" mt="4px">
                        {"(" + LOCATIONS[item] + ")"}
                      </Text>
                    </Checkbox>
                  ))}
                </Stack>

                <AccordionIcon />
              </AccordionButton>
            </AccordionItem>
          )}
        </Accordion>

        <Button
          color="brightGreen"
          borderColor="brightGreen"
          variant="outline"
          borderRadius="sm"
          fontSize="16px"
          mt={7}
          w="100%"
          h="50px"
          _hover={{ bg: "brightGreen", color: "white" }}
          _focus={{ bg: "brightGreen", color: "white" }}
          onClick={clearState}
          d={{ base: "none", lg: "block" }}
        >
          Reset all filters
        </Button>
      </Box>
    </>
  );
};

SupplierFilters.propTypes = {
  selectedFilters: PropTypes.object.isRequired,
  setSelectedFilters: PropTypes.object.isRequired,
};

const CheckBoxList = ({
  list,
  clickHandler,
  checkedItems = [],
}: {
  list: any;
  clickHandler: (e: any) => void;
  checkedItems: any;
}) => {
  const [load, setLoad] = useState(true);
  const ViewLessorMore = event => {
    setLoad(!load);
  };

  return (
    <>
      {load &&
        Object.keys(list)
          .slice(0, 6)
          .map(item => (
            <Checkbox
              key={item}
              onChange={e => clickHandler(e)}
              colorScheme="green"
              color="gray.600"
              value={item}
              isChecked={checkedItems.indexOf(item) != -1}
              alignItems="flex-start"
            >
              {item}
              <Text as="span" color="darkgray" mt="4px">
                {"(" + list[item] + ")"}
              </Text>
            </Checkbox>
          ))}
      {!load &&
        Object.keys(list).map(item => (
          <Checkbox
            key={item}
            onChange={e => clickHandler(e)}
            colorScheme="green"
            color="gray.600"
            value={item}
            isChecked={checkedItems.indexOf(item) != -1}
            alignItems="flex-start"
          >
            {item}
            <Text as="span" color="darkgray" mt="4px">
              {"(" + list[item] + ")"}
            </Text>
          </Checkbox>
        ))}
      {load ? (
        <Button
          onClick={ViewLessorMore}
          bg="transparent !important"
          color="brightGreen"
          boxShadow="none"
          fontSize="16px"
          ml="24px !important"
          p="0"
          justifyContent="flex-start"
        >
          View more
        </Button>
      ) : (
        <Button
          onClick={ViewLessorMore}
          bg="transparent !important"
          color="brightGreen"
          boxShadow="none"
          fontSize="16px"
          ml="24px !important"
          p="0"
          justifyContent="flex-start"
        >
          View less
        </Button>
      )}
    </>
  );
};
