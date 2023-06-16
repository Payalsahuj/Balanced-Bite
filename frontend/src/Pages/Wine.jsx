import React from "react";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Favorites from "../images/Favorites.webp";
import truck from "../images/truck.png";
import glass from "../images/glass.png";
import grapes from "../images/grapes.png";
import dinnerTime from "../images/dinnerTime.webp";
import beef from "../images/CALABRIAN_BEEF.webp";
import monthly from "../images/monthly-delivery-desktop.webp";
import process from "../images/process.png";
import park from "../images/pork_chorizo.webp";
import grenache from "../images/grenache.webp";
import hoisin from "../images/HOISIN-GLAZED_PORK_CHOPS.webp";
import sheet from "../images/SHEET_PAN_PORK.webp";
import raise from "../images/raise-a-glass-footer-desktop.webp";

const Wine = () => {
  return (
    <Box p={"65px"}>
      <Box position="relative">
        <Image src={dinnerTime} alt="wine" width="100%" />
        <Box
          position="absolute"
          top="50%"
          left="70%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          p={4}
          bg="whiteAlpha.900"
          borderRadius="20px"
        >
          <Heading
            color="#002684"
            fontWeight="900"
            fontFamily="Chronicle Deck"
            fontSize={["1.8em", "2.8em"]}
            lineHeight={1.2}
            mb={2}
          >
            Discover <br /> Dinnertime Pairings
          </Heading>
          <Text
            color="#00a0df"
            fontWeight="500"
            fontSize={["1em", "1.5em"]}
            lineHeight={1.35}
            mb={4}
          >
            (and get all the juicy details)
          </Text>
          <Button bg="#002684" color="white" borderRadius="35px" px={6}>
            GET STARTED
          </Button>
        </Box>
      </Box>
      <Box textAlign="center" my={8}>
        <Heading as="h1" fontSize={["2xl", "4xl"]}>
          How It Works
        </Heading>
        <Flex  mt={8} flexWrap={["wrap","nowrap"]} gap={8}>
          <Box flexBasis={["100%", "50%"]}>
            <Flex align="center" mb={4}>
              <Image src={grapes} alt="grapes" boxSize={["40px", "80px"]} />
              <Heading as="h3" fontSize={["xl", "2xl"]} ml={2}>
                INCREDIBLE WINES
              </Heading>
            </Flex>
            <Text>
              Get exclusive access to delicious wines from renowned winemakers.
            </Text>
          </Box>
          <Box flexBasis={["100%", "50%"]}>
            <Flex align="center" mb={4}>
              <Image src={truck} alt="truck" boxSize={["40px", "80px"]} />
              <Heading as="h3" fontSize={["xl", "2xl"]} ml={2}>
                MONTHLY DELIVERY
              </Heading>
            </Flex>
            <Text>
              Select the wines you love. No commitment. Skipping or canceling is easy.
            </Text>
          </Box>
          <Box flexBasis={["100%", "50%"]}>
            <Flex align="center" mb={4}>
              <Image src={glass} alt="glass" boxSize={["40px", "80px"]} />
              <Heading as="h3" fontSize={["xl", "2xl"]} ml={2}>
                SIZED FOR TWO
              </Heading>
            </Flex>
            <Text>
              Enjoy pairing-sized wines (500ml), perfect for two to share, or upgrade to standard-sized bottles (750ml).
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box position="relative">
        <Image src={monthly} alt="wine" width="100%" />
        <Box
          position="absolute"
          top="50%"
          left="70%"
          transform="translate(-50%, -50%)"
          textAlign="left"
          bg="gray.200"
          borderRadius="20px"
          p={8}
        >
          <Heading
            fontWeight="900"
            fontFamily="Chronicle Deck"
            fontSize={["2xl", "4xl"]}
            mb={4}
          >
            Inside Your Monthly Delivery
          </Heading>
          <Box fontWeight="bold" mb={4}>
            <Text>
              6 x 500 mL wines or upgrade to standard-sized 750 mL bottles!
            </Text>
            <Text mt={4}>
              Select all reds, all whites, or mix and match your favorites!
            </Text>
            <Text mt={4}>
              We'll include tasting notes, pairing tips, plus stories behind the wines.
            </Text>
          </Box>
          <Text color="#00a0df" fontWeight="500" fontSize={["1em", "1.5em"]} lineHeight="normal" mt={0}>
            Starting at $11 per bottle
          </Text>
          <Text>
            $75.99/month, incl. shipping* <br />
            <span>*tax applied at checkout</span>
          </Text>
          <Button bg="#002684" color="white" borderRadius="35px" mt={6}>
            GET STARTED
          </Button>
        </Box>
      </Box>
      <Box textAlign="center" my={8} maxW="800px" mx="auto">
        <Heading as="h2" fontSize={["2xl", "4xl"]}>
          From Our Vineyard to Your Doorstep
        </Heading>
        <Text>
          By cutting out the middleman, we’re able to offer you high-quality wines at great prices.
        </Text>
        <Image src={process} alt="Making Process" mt={8} width="100%" />
      </Box>
      <Box position="relative" >
        <Image src={Favorites} alt="Discover your favorites" width="100%" />
        <Box
          position="absolute"
          left="30%"
          right="30%"
          textAlign="left"
          transform="translate(-30%, -240%)"
         //  bg="rgba(0, 0, 0, 0.5)"
          borderRadius="20px"
          p={7}
          color="white"
        >
          <Heading as="h2" fontSize={["2xl", "4xl"]}>
            Discover Your Favorites
          </Heading>
          <Text>
            Don’t know your Pinot Noir from your Pinotage? Our wines come with tasting notes, flavor profiles, and the story behind the bottle to give you the confidence to select the right wine for any occasion – and inspire a lifelong love of wine.
          </Text>
        </Box>
      </Box>
      <Box>
        <Box textAlign="center" maxW="30%" mx="auto" mt={16}>
          <Heading as="h1" fontSize={["2xl", "4xl"]}>
            Elevate Every Meal With The Perfect Pairing
          </Heading>
          <Text>
            Our wines are specially chosen to complement your Blue Apron recipes, so all you have to do is uncork, pour and enjoy.
          </Text>
        </Box>
        <Flex justify="center" py={8}>
          <Box>
            <Image src={beef} alt="CALABRIAN BEEF & GNOCCHI" width={["50%", "100%"]} />
            <Heading as="h2" fontSize={["xl", "2xl"]} mt={4}>
              CALABRIAN BEEF & GNOCCHI
            </Heading>
            <Text>
              Complement the richness of this hearty beef & gnocchi dish with a warming, spicy grenache.
            </Text>
          </Box>
          <Box mx={8}>
            <Image src={grenache} alt="grenache" />
          </Box>
          <Box>
            <Image src={hoisin} alt="HOISIN-GLAZED PORK CHOPS" width={["50%", "100%"]} />
            <Heading as="h2" fontSize={["xl", "2xl"]} mt={4}>
              HOISIN-GLAZED PORK CHOPS
            </Heading>
            <Text>
              Amplify the umami-rich sweetness of the soy glaze with a fruit-forward red.
            </Text>
          </Box>
        </Flex>
        <Flex justify="center" py={8}>
          <Box>
            <Image src={park} alt="PORK CHORIZO, POTATO & FIG BAKE" width={["50%", "100%"]} />
            <Heading as="h2" fontSize={["xl", "2xl"]} mt={4}>
              PORK CHORIZO, POTATO & FIG BAKE
            </Heading>
            <Text>
              Complement the peppery flavors of the chorizo with the notes of baking spices in this wine.
            </Text>
          </Box>
          <Box mx={8}>
            <Image src={sheet} alt="SHEET PAN PORK & SOUR CHERRY SAUCE" width={["50%", "100%"]} />
            <Heading as="h2" fontSize={["xl", "2xl"]} mt={4}>
              SHEET PAN PORK & SOUR CHERRY SAUCE
            </Heading>
            <Text>
              Notes of stone fruit in this grenache bring out the cherry flavors in this sauce.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box position="relative">
        <Image src={raise} alt="raise a glass" width="100%" />
        <Box
          position="absolute"
          borderRadius="20px"
          left="70%"
          textAlign="center"
          transform="translate(-120%, -180%)"
          p={4}
          color="white"
         //  bg="rgba(0, 0, 0, 0.5)"
        >
          <Heading as="h1" fontSize={["xl", "4xl"]} mb={4}>
            Let's Raise A Glasss
          </Heading>
          <Button bg="#002684" color="white" borderRadius="35px">
            Try Our Wine
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Wine;
