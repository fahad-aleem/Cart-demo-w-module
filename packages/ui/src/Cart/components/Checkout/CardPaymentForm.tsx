import { Box, Button } from "@chakra-ui/react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

import useStore from "../../store/store";

interface CheckoutDetailsValidation {
  checkoutDetails: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
}

const CardPaymentForm = ({ checkoutDetails }: CheckoutDetailsValidation) => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const totalAmount = useStore(state => state["cart"]["total"]);

  const handleSubmit = async event => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      email,
      phone,
      addressLine1: line1,
      addressLine2: line2,
      city,
      state,
      postalCode,
      country,
    } = checkoutDetails;

    // check if there is anything empty
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      line1 === "" ||
      city === "" ||
      state === "" ||
      postalCode === "" ||
      country === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
      billing_details: {
        name: `${firstName} ${lastName}`,
        email,
        phone,
        address: {
          line1,
          line2,
          postal_code: postalCode,
          city,
          state,
          country,
        },
      },
    });

    if (!error) {
      try {
        const { id } = paymentMethod;

        const response = await axios.post("http://localhost:3003/api/payment", {
          id,
          amount: totalAmount * 100,
        });

        if (response.data.success) {
          setSuccess(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(error);
    }
  };

  if (success) {
    return <h1>Your order has been completed</h1>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box
        className="FormRow"
        border="1px solid #d5d5d5"
        borderColor="#d5d5d5"
        borderRadius="6px"
        padding="16px"
        my="2"
      >
        <CardElement />
      </Box>
      <Button type="submit" variant="goldn" width="260px" my="2">
        Pay Now
      </Button>
    </form>
  );
};

export default CardPaymentForm;
