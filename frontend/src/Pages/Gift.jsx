import {
   Box,
   Flex,
   Heading,
   Image,
   Tab,
   Tabs,
   Text,
   Button,
} from "@chakra-ui/react";
import meal from "../images/meal-header..jpg";
import wine from "../images/wine-header.jpg";
import React, { useState } from "react";

const Gift = () => {
   const [gift, setGift] = useState("meal");
   const [quantity, setQuantity] = useState(1);

   return (
      <Box paddingTop={["65px", "65px", "65px"]}>
         <Box position="relative" style={{ width: "100%" }}>
            <Image
               width="100%"
               height="auto"
               filter="grayscale(25%)"
               src={gift === "meal" ? meal : wine}
               alt="gift meal"
            />
            <Box
               position="absolute"
               top="50%"
               left="50%"
               transform="translate(-50%, -50%)"
               textAlign="center"
               p={4}
               bg="white"
               borderRadius="md"
               boxShadow="md"
            >
               <Heading
                  as="h1"
                  size="3xl"
                  color="#1A237E"
                  fontFamily="Chronicle Deck"
               >
                  {gift === "meal"
                     ? "The Gift of Home Cooking"
                     : "A Gift to Sip & Savor"}
               </Heading>
            </Box>
         </Box>

         <Box
            bg="#1A237E"
            width={["100%", "80%", "400px"]}
            position="absolute"
            top="25%"
            left="15%"
            height="200px"
            p={4}
            borderRadius="20px"
            color="white"
            zIndex={10}
            boxShadow="md"
         >
            <Heading fontSize="2xl" mb={2}>
               ${gift === "meal" ? "70" : "140"} E-GIFT CARD
            </Heading>
            <Text fontSize="sm" mt={1}>
               {gift === "meal" ? "MEAL" : "WINE"} E-GIFT CARD
            </Text>
            <Image src="" alt="logo" mt={4} />
         </Box>

         <Box p={8}>
            <Flex
               direction={["column", "column", "row"]}
               justify="center"
               align="center"
            >
               <Box
                  width={["100%", "100%", "50%"]}
                  mb={[8, 8, 0]}
                  pr={[0, 0, 8]}
               >
                  <Tabs isLazy>
                     <Tabs variant="soft-rounded" colorScheme="blue" mb={4}>
                        <Tab onClick={() => setGift("meal")}>MEAL</Tab>
                        <Tab onClick={() => setGift("wine")}>WINE</Tab>
                     </Tabs>
                  </Tabs>

                  <Tabs isLazy variant="soft-rounded" colorScheme="blue" mb={4}>
                     <Tab>$70</Tab>
                     <Tab>$140</Tab>
                     <Tab>$280</Tab>
                  </Tabs>

                  <Text>$140 is our most popular option</Text>

                  <Tabs isLazy variant="soft-rounded" colorScheme="blue" mt={4}>
                     <Tab>Quantity: {quantity}</Tab>
                  </Tabs>

                  <Flex justify="center" mt={4}>
                     <Button bg="orange" color="white" width="100%">
                        ADD TO CART
                     </Button>
                  </Flex>
               </Box>

               <Box width={["100%", "100%", "50%"]} pl={[0, 0, 8]}>
                  <Box border="1px solid black" mb={4} p={4}>
                     <Text fontSize="xl">YOUR CART IS EMPTY</Text>
                  </Box>

                  <Box>
                     <ul>
                        <li>
                           Recipients can use a Meal E-Gift Card towards any
                           subscription meal plan or Market items
                        </li>
                        <li>
                           E-Gift Cards are subject to our Gift Card Terms and
                           are not redeemable towards our Wine Program
                        </li>
                        <li>
                           Blue Apron Gift Cards never expire and carry no fees
                        </li>
                     </ul>
                  </Box>
               </Box>
            </Flex>
         </Box>
      </Box>
   );
};

export default Gift;
