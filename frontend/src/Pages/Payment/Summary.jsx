import { Box, Divider, Text, VStack } from "@chakra-ui/react";

const Summary = () => {
   return (
      <Box
         className="page3"
         p={4}
         bg="gray.200"
         borderRadius="md"
         boxShadow="md"
         maxW="400px"
         mx="auto"
      >
         <VStack spacing={4} align="start">
            <Text fontWeight="bold" fontSize="xl">
               Item name
            </Text>
            <Text fontWeight="bold" fontSize="xl">
               Price
            </Text>

            <Divider />

            <Text>Data science and usability</Text>
            <Text>50,000.00</Text>

            <Text>Shipping</Text>
            <Text>0.00</Text>

            <Divider />

            <Text fontWeight="bold" fontSize="xl">
               Total
            </Text>
            <Text fontWeight="bold" fontSize="xl">
               50,000.00
            </Text>
         </VStack>
      </Box>
   );
};

export default Summary;
