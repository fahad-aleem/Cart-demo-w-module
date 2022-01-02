import { Box, Flex, Spinner } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";

import { SupplierListItem } from "./SupplierListItem";

export const SupplierList = ({
  suppliers,
  isClosed,
  setIsClosed,
  sentryRef,
  loadingItems,
  displaySupplierDetails,
}) => {
  const [styling, setStyling] = useState();

  return (
    <>
      <Box flexGrow={1} bg="white" pos="relative" className="ItemListMobile">
        {suppliers &&
          suppliers.map((supplier, index) => (
            <SupplierListItem
              styling={styling}
              setStyling={setStyling}
              isClosed={isClosed}
              setIsClosed={setIsClosed}
              supplier={supplier}
              key={index}
              index={index}
              displaySupplierDetails={displaySupplierDetails}
            />
          ))}
        {loadingItems && (  
        <Flex ref={sentryRef} alignItems="center" justifyContent="center" my="15px" mx="auto">
          <Spinner></Spinner>
        </Flex>)
        }
      </Box>
    </>
  );
};

SupplierList.propTypes = {
  suppliers: PropTypes.object.isRequired,
  isClosed: PropTypes.bool.isRequired,
  setIsClosed: PropTypes.func.isRequired,
  displaySupplierDetails: PropTypes.func.isRequired,
};
