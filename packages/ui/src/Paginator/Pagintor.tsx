import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Box, HStack } from "@chakra-ui/react";
/**
 * Pagination component for list of records.
 * Input: maxPages, currentPage, onPageChange, isDisabled
 */

export const Paginator = ({ page, total, size = 10, setPage = num => {} }) => {
  let pageCount = [];
  const remainder = total % size;
  let totalPages = 0;

  if (remainder === 0) {
    totalPages = total / size;
  } else {
    totalPages = (total - remainder) / size + 1;
  }
  pageCount = [...Array(totalPages).keys()];

  const changePage = num => {
    document.getElementById("categoryAnchor");
    setPage(num);
  };

  return totalPages > 1 ? (
    <Box>
      <HStack
        className="paginatorBar"
        mb="30px"
        d="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Button
          bg="transparent !important"
          borderBottom="2px"
          borderColor="transparent"
          borderRadius="none"
          color="textGray"
          fontSize="md"
          p="0"
          ml="0.5rem"
          minWidth="30px"
          boxShadow="none"
          outline="none"
          _hover={{
            background: "none",
            borderBottomColor: "goldn",
            color: "offBlack",
          }}
          display={page === 0 ? "none" : "block"}
          onClick={() => {
            if (page > 0) {
              changePage(page - 1);
            }
          }}
        >
          <ArrowBackIcon />
        </Button>
        {pageCount.map((el, index) => {
          return (
            <Button
              bg="transparent !important"
              borderBottom="2px"
              borderColor="transparent"
              borderRadius="none"
              color="textGray"
              fontSize="md"
              p="0"
              ml="0.5rem"
              minWidth="30px"
              boxShadow="none"
              outline="none"
              _hover={{
                background: "none",
                borderBottomColor: "goldn",
                color: "offBlack",
              }}
              {...(page === index
                ? {
                    bgColor: "paginator.bgColor",
                    textColor: "paginator.color",
                    borderColor: "goldn",
                  }
                : "")}
              key={index}
              onClick={() => changePage(index)}
            >
              {index + 1}
            </Button>
          );
        })}

        <Button
          bg="transparent !important"
          borderBottom="2px"
          borderColor="transparent"
          borderRadius="none"
          color="textGray"
          fontSize="md"
          p="0"
          ml="0.5rem"
          minWidth="30px"
          boxShadow="none"
          outline="none"
          _hover={{
            background: "none",
            borderBottomColor: "goldn",
            color: "offBlack",
          }}
          display={page === totalPages - 1 ? "none" : "block"}
          onClick={() => changePage(page + 1)}
        >
          <ArrowForwardIcon />
        </Button>
      </HStack>
    </Box>
  ) : (
    <></>
  );
};
