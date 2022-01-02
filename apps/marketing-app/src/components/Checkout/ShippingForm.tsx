import {
  Heading,
  Box,
  SimpleGrid,
  GridItem,
  FormControl,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { useContext } from "react";

import { CheckoutContext } from "../../context/context";

const ShippingForm = () => {
  const { checkoutDetails, handleSetCheckoutDetails } = useContext(
    CheckoutContext
  );

  return (
    <Box my={2}>
      <Heading as="h4" fontSize="lg">
        Shipping Information
      </Heading>
      <Box border="1px solid #d5d5d5" borderRadius="5px" p={4} my={2}>
        <SimpleGrid columns={2} spacing={4}>
          <GridItem colSpan={1}>
            <FormControl mb={1}>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input
                value={checkoutDetails.firstName}
                id="firstName"
                placeholder="First Name"
                border="1px solid #d5d5d5"
                borderColor="#d5d5d5"
                onChange={e =>
                  handleSetCheckoutDetails({
                    ...checkoutDetails,
                    firstName: e.target.value,
                  })
                }
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl mb={1}>
              <FormLabel htmlFor="firstName">Last Name</FormLabel>
              <Input
                value={checkoutDetails.lastName}
                id="lastName"
                placeholder="Last Name"
                border="1px solid #d5d5d5"
                borderColor="#d5d5d5"
                onChange={e =>
                  handleSetCheckoutDetails({
                    ...checkoutDetails,
                    lastName: e.target.value,
                  })
                }
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl mb={1}>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                value={checkoutDetails.email}
                id="email"
                placeholder="Email"
                border="1px solid #d5d5d5"
                borderColor="#d5d5d5"
                onChange={e =>
                  handleSetCheckoutDetails({
                    ...checkoutDetails,
                    email: e.target.value,
                  })
                }
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl mb={1}>
              <FormLabel htmlFor="email">Phone No.</FormLabel>
              <Input
                value={checkoutDetails.phone}
                id="PhoneNo"
                placeholder="Phone No."
                border="1px solid #d5d5d5"
                borderColor="#d5d5d5"
                onChange={e =>
                  handleSetCheckoutDetails({
                    ...checkoutDetails,
                    phone: e.target.value,
                  })
                }
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl mb={1}>
              <FormLabel htmlFor="email">Address line 1</FormLabel>
              <Input
                value={checkoutDetails.addressLine1}
                id="addressLine1"
                placeholder="Address"
                border="1px solid #d5d5d5"
                borderColor="#d5d5d5"
                onChange={e =>
                  handleSetCheckoutDetails({
                    ...checkoutDetails,
                    addressLine1: e.target.value,
                  })
                }
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl mb={1}>
              <FormLabel htmlFor="email">Address line 2</FormLabel>
              <Input
                value={checkoutDetails.addressLine2}
                id="addressLine2"
                placeholder="Address"
                border="1px solid #d5d5d5"
                borderColor="#d5d5d5"
                onChange={e =>
                  handleSetCheckoutDetails({
                    ...checkoutDetails,
                    addressLine2: e.target.value,
                  })
                }
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl mb={1}>
              <FormLabel htmlFor="email">City</FormLabel>
              <Input
                value={checkoutDetails.city}
                id="city"
                placeholder="City"
                border="1px solid #d5d5d5"
                borderColor="#d5d5d5"
                onChange={e =>
                  handleSetCheckoutDetails({
                    ...checkoutDetails,
                    city: e.target.value,
                  })
                }
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl mb={1}>
              <FormLabel htmlFor="postalCode">Postal Code</FormLabel>
              <Input
                value={checkoutDetails.postalCode}
                id="postalCode"
                placeholder="Postal Code"
                border="1px solid #d5d5d5"
                borderColor="#d5d5d5"
                onChange={e =>
                  handleSetCheckoutDetails({
                    ...checkoutDetails,
                    postalCode: e.target.value,
                  })
                }
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl mb={1}>
              <FormLabel htmlFor="state">State</FormLabel>
              <Input
                value={checkoutDetails.state}
                id="state"
                placeholder="State"
                border="1px solid #d5d5d5"
                borderColor="#d5d5d5"
                onChange={e =>
                  handleSetCheckoutDetails({
                    ...checkoutDetails,
                    state: e.target.value,
                  })
                }
              />
            </FormControl>
          </GridItem>
          <GridItem colSpan={1}>
            <FormControl mb={1}>
              <FormLabel htmlFor="country">Country</FormLabel>
              <Input
                value={checkoutDetails.country}
                id="country"
                placeholder="Country"
                border="1px solid #d5d5d5"
                borderColor="#d5d5d5"
                onChange={e =>
                  handleSetCheckoutDetails({
                    ...checkoutDetails,
                    country: e.target.value,
                  })
                }
              />
            </FormControl>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default ShippingForm;
