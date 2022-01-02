import { Box, Heading, Text, HStack, VStack } from "@chakra-ui/react";
import "firebase/firestore";
import PropTypes from "prop-types";

export const SupplierListItem = ({
  isClosed,
  setIsClosed,
  supplier,
  displaySupplierDetails,
  setStyling,
  styling,
  index,
}) => {
  return (
    <Box>
      <div
        onClick={() => {
          displaySupplierDetails(supplier.get("slug"));
          setIsClosed(false);
          setStyling(index);
        }}
      >
        <HStack
          className="FilterListItem"
          h={["80px", "88px"]}
          px="4"
          py={["3", "4"]}
          bg="white"
          borderWidth={1}
          borderColor="gray.100"
          borderBottomColor="gray.50"
          boxShadow=""
          _hover={{
            bg: "hoverGray",
            borderRightColor: "goldn",
            borderRightWidth: "2px",
            boxShadow: "none",
            cursor: "pointer",
          }}
          {...(index === styling
            ? {
                bg: "hoverGray",
                borderRightColor: "goldn",
                borderRightWidth: "2px",
                boxShadow: "none",
                cursor: "pointer",
              }
            : "")}
        >
          <VStack alignItems="flex-start">
            <Heading
              fontFamily="SofiaPro-SemiBold"
              fontSize={[18, 20]}
              lineHeight={["24px", "28px"]}
              mb={0}
            >
              {supplier.get("name") || "N/A"}
            </Heading>
            <Text
              fontSize={16}
              lineHeight="24px"
              mt="0 !important"
              color="textGray"
              noOfLines={1}
            >
              {supplier.get("companyType") +
                " ." +
                " " +
                supplier.get("contact.city") +
                "," +
                " " +
                supplier.get("contact.state") +
                "," +
                " " +
                supplier.get("contact.country") || "N/A"}
            </Text>
          </VStack>
        </HStack>
      </div>
    </Box>
  );
};
SupplierListItem.propTypes = {
  isClosed: PropTypes.bool.isRequired,
  setIsClosed: PropTypes.func.isRequired,
  supplier: PropTypes.object.isRequired,
  displaySupplierDetails: PropTypes.func.isRequired,
  setStyling: PropTypes.func.isRequired,
  styling: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};
