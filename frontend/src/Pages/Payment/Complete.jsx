import { Box, Text, Link, Center } from "@chakra-ui/react";
import { BsCheckCircle } from "react-icons/bs";
import CelebrationVideo from "./celebration-video.webm";

const Complete = () => {
   return (
      <Box
         className="complete"
         textAlign="center"
         p={8}
         // bg="gray.200"
         borderRadius="md"
         boxShadow="md"
         // maxW="400px"
         mx="auto"
      >
         <Center position="relative">
            <video autoPlay loop muted style={{ width: "100%" }}>
               <source src={CelebrationVideo} type="video/mp4" />
            </video>
            <Center
               position="absolute"
               top="50%"
               left="50%"
               transform="translate(-50%, -50%)"
               zIndex="1"
            >
               <BsCheckCircle className="icon" color="green" size={58} />
               <Text fontWeight="bold" fontSize="2xl" mt={4}>
                  Purchase Completed
               </Text>
            </Center>
         </Center>

         <Text mt={4}>
            Please check your email for details concerning this transaction.
         </Text>

         <Link href="/" color="blue.500" mt={6} display="inline-block">
            Return Home
         </Link>
      </Box>
   );
};

export default Complete;
