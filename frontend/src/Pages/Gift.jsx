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
import cap from "../Image/white cap.png";
import meal from "../images/meal-header..jpg";
import wine from "../images/wine-header.jpg";
import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Gift = () => {
   const [gift, setGift] = useState("meal");
   const [quantity, setQuantity] = useState(1);

   return (
      <Box paddingTop={["65px", "65px", "65px"]} fontFamily="Chronicle Deck">
         <Navbar />
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
                  size={["sm", "xl", "2xl", "4xl"]}
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
            width={["50%", "50%", "80%", "400px"]}
            position="absolute"
            top={["6%", 10, 10, "30%"]}
            left="15%"
            height={["100px", "140px", "150px", "200px"]}
            p={[1.5, 1.8, 2, 4]}
            borderRadius="20px"
            color="white"
            zIndex={10}
            boxShadow="md"
         >
            <Heading fontSize={["12px", "xl", "2xl", "4xl"]} mb={2}>
               ${gift === "meal" ? "70" : "140"} E-GIFT CARD
            </Heading>
            <Text fontSize={["8px", "15px", "18px", "sm"]} mt={1}>
               {gift === "meal" ? "MEAL" : "WINE"} E-GIFT CARD
            </Text>
            <Image
               src={cap}
               ml={[20, 10, 10, 10]}
               width={{ base: "30px", md: "90px", lg: "40px", xl: "70px" }}
               alt="logo"
            />
            <Heading
               ml={[0, 0, 0, -200]}
               size={{ base: "1rem", md: "md", lg: "16px" }}
               fontFamily="Chronicle Deck"
            >
               The Balanced Bite
            </Heading>
            {/* <Image src="" alt="logo" mt={4} /> */}
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
                  <Box mt={[9, 9, 10, "150px"]}>
                     <Button
                        bg={gift === "meal" ? " #1A237E" : "none"}
                        color={gift == "meal" ? "white" : "black"}
                        onClick={() => setGift("meal")}
                     >
                        MEAL
                     </Button>
                     <Button
                        bg={gift === "wine" ? " #1A237E" : "none"}
                        color={gift == "wine" ? "white" : "black"}
                        onClick={() => setGift("wine")}
                     >
                        WINE
                     </Button>
                  </Box>

                  <Tabs mb={4}>
                     <Tab border={"1px solid black"}>$70</Tab>
                     <Tab>$140</Tab>
                     <Tab>$280</Tab>
                  </Tabs>

                  <Text>$140 is our most popular option</Text>
                  <h1>Quantity</h1>
                  <Button disabled ={quantity<=1} onClick={()=>setQuantity(quantity-1)}>-</Button>
                  <Button disabled> {quantity}</Button>

                  <Button onClick={()=>setQuantity(quantity+1)}>+</Button>
                  

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
         <Footer />
      </Box>
   );
};

export default Gift;
