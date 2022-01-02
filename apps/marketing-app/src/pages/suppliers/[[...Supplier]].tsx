import { Box, HStack, Flex, Spinner, useDisclosure } from "@chakra-ui/react";
import firebase from "firebase/app";
import { useRouter } from "next/router";
import { isEmpty } from "ramda";
import React, { useEffect, useRef, useState } from "react";
import useInfiniteScroll from "react-infinite-scroll-hook";

import {
  SupplierDetails,
  SupplierList,
  SupplierSearch,
  SupplierFilters,
  InitializeFirebase,
  SupplierMessage,
  MobileSupplierDetails,
} from "@goldn/ui";

import "firebase/firestore";

interface SelectedFilters {
  locations: any[];
  searchKeyword: any[];
  supplierTypes: any[];
  services: any[];
}

const parseFilters = (filters: any) => {
  let supplierTypes = [];
  const location = [];
  let services = [];
  let locations = [];
  const searchKeyword = [];

  const queryfilter = filters ? [...filters] : [];

  while (queryfilter.length > 0) {
    const [key, value] = queryfilter.splice(0, 2);

    if (queryfilter !== undefined) {
      if (key == "companyType") {
        supplierTypes = value.split(",").filter((s: string) => s != "");
      }
      if (key == "service") {
        services = value.split(",").filter(s => s != "");
      }
      if (key == "location") {
        location.push(value);
        locations = location[0].match(/[^,]+,[^,]+,[^,]+/g);
      }
      if (key == "keyword") {
        searchKeyword.push(value);
      }
    }
  }

  return {
    locations: locations,
    supplierTypes: supplierTypes,
    services: services,
    searchKeyword: searchKeyword,
  };
};

const SupplierQuery = (filters: SelectedFilters, itemsPerPage: number) => {
  let query: firebase.firestore.Query<firebase.firestore.DocumentData> = InitializeFirebase().collection(
    "suppliers"
  );

  if (filters.supplierTypes?.length) {
    if (filters.supplierTypes.length > 1) {
      query = query.where("companyType", "in", filters.supplierTypes);
    } else {
      query = query.where("companyType", "==", filters.supplierTypes[0]);
    }
  }

  if (filters.locations?.length) {
    const cities = filters.locations.map(item => item.split(",")[0]);

    if (filters.locations.length > 1) {
      query = query.where("contact.city", "in", cities);
    } else {
      query = query.where("contact.city", "==", cities[0]);
    }
  }

  if (filters.services?.length) {
    query = query.where("services", "array-contains-any", filters.services);
  }

  if (filters.searchKeyword?.length) {
    const filterkeyword = filters.searchKeyword;

    const filterkey = [];

    if (filterkeyword[0] !== undefined) {
      filterkey.push(filterkeyword[0].toLowerCase());
      query = query.where("keywords", "array-contains-any", filterkey);
    }
  }

  query = query.orderBy("name").limit(itemsPerPage);
  return query;
};
const Supplier = () => {
  const router = useRouter();
  const filters = router.query.Supplier;
  const [isClosed, setIsClosed] = useState(true);
  const itemsPerPage = 25;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [width, setWidth] = useState(null);
  const [suppliers, setSuppliers] = useState<
    firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[]
  >();

  const [details, setDetails] = useState<
    firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>[]
  >();

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({
    locations: [],
    searchKeyword: [],
    supplierTypes: [],
    services: [],
  });

  const loading = useRef(false);
  const hasNextPage = useRef(true);

  const loadMore = () => {
    const filters = selectedFilters;

    loading.current = true;

    let query = SupplierQuery(filters, itemsPerPage);

    if (suppliers) {
      query = query.startAfter(suppliers[suppliers.length - 1].get("name"));
    }
    const results = query.get();

    results.then(data => {
      loading.current = false;
      hasNextPage.current = data.docs.length == itemsPerPage;
      const loadedSuppliers = [];

      if (suppliers) loadedSuppliers.push(...suppliers);
      loadedSuppliers.push(...data.docs);
      setSuppliers(loadedSuppliers);
    });
  };

  const loadResults = () => {
    const filters = selectedFilters;

    loading.current = true;

    const query = SupplierQuery(filters, itemsPerPage);

    const results = query.get();

    results.then(data => {
      loading.current = false;
      hasNextPage.current = data.docs.length == itemsPerPage;
      setSuppliers(data.docs);
    });
    window.scrollTo(0, 0);
  };

  useEffect(loadResults, [selectedFilters]);

  useEffect(() => {
    const filterParam = parseFilters(filters);

    setSelectedFilters(filterParam);
  }, [filters]);

  useEffect(() => {
    if (width === null) {
      setWidth(window.innerWidth);
    }
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
  });

  const displaySupplierDetails = supplierSlug => {
    const db = firebase.firestore();
    const resultDetails: Promise<
      firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
    > = db.collection("suppliers").where("slug", "==", supplierSlug).get();

    resultDetails.then(data => {
      setDetails(data.docs);
    });
  };

  const [sentryRef] = useInfiniteScroll({
    loading: loading.current,
    hasNextPage: hasNextPage.current,
    onLoadMore: loadMore,
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: false,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: "0px 0px 400px 0px",
  });

  return (
    <>
      <SupplierSearch
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <HStack alignItems="flex-start" w="100%" mb="30px">
        <Box d={{ base: "none", lg: "block" }}>
          <SupplierFilters
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </Box>
        <HStack
          alignItems="flex-start"
          flexGrow={1}
          bg="white"
          boxShadow="sm"
          ml={{ base: "0 !important", lg: "0.5rem !important" }}
        >
          {suppliers ? (
            <SupplierList
              suppliers={suppliers}
              isClosed={isClosed}
              setIsClosed={setIsClosed}
              sentryRef={sentryRef}
              loadingItems={loading.current || hasNextPage.current}
              displaySupplierDetails={displaySupplierDetails}
            />
          ) : (
            <Flex
              alignItems="center"
              justifyContent="center"
              my="15px"
              mx="auto"
            >
              <Spinner></Spinner>
            </Flex>
          )}
          {isEmpty(suppliers) && <SupplierMessage />}
          {!isEmpty(details) && !isClosed && (
            <>
              {width >= 1024 ? (
                <SupplierDetails
                  details={details}
                  isClosed={isClosed}
                  setIsClosed={setIsClosed}
                />
              ) : (
                <MobileSupplierDetails
                  details={details}
                  isClosed={isClosed}
                  setIsClosed={setIsClosed}
                  isOpen={isOpen}
                  onOpen={onOpen}
                  onClose={onClose}
                />
              )}
            </>
          )}
        </HStack>
      </HStack>
    </>
  );
};

export default Supplier;
