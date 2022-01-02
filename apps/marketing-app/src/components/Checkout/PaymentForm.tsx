import { Heading, Box } from "@chakra-ui/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CardPaymentForm from "./CardPaymentForm";

const stripePromise = loadStripe(
  "pk_test_51K42yJDd9umCXJBo8xCqGvKorUgQYSxGd6fQnlMUWby0GeyKMotCJXwZ9QPiBQxsMFRB2oweBdq5sbFaO3A71v1300GzTl14bc"
);

const PaymentForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <Box my="2">
        <Heading as="h4" fontSize="lg">
          Payment Information
        </Heading>
        <CardPaymentForm />
      </Box>
    </Elements>
  );
};

export default PaymentForm;
