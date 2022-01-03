import { Container, Heading, SimpleGrid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

import { CartSummaryCard, PaymentForm, ShippingForm } from "@goldn/ui";

const Cart = () => {
  const [checkoutDetails, setCheckoutDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  return (
    <Container maxW="container.xl">
      <Heading as="h2">Checkout</Heading>
      <SimpleGrid columns={3} spacing={3}>
        <GridItem colSpan={2}>
          <ShippingForm
            checkoutDetails={checkoutDetails}
            handleSetCheckoutDetails={setCheckoutDetails}
          />
          <PaymentForm
            checkoutDetails={checkoutDetails}
            handleSetCheckoutDetails={setCheckoutDetails}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <CartSummaryCard />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

export default Cart;
