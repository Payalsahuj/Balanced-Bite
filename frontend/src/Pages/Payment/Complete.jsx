import { Box, Text, Link, Center, Button } from "@chakra-ui/react";
import { BsCheckCircle } from "react-icons/bs";
import CelebrationVideo from "./celebration-video.webm";
import { useNavigate } from "react-router-dom";

const Complete = () => {
   const navigate = useNavigate()
   return (
      <Box
         className="complete"
         textAlign="center"
         p={8}
         mx="auto" px={["1rem", "2rem", "4rem"]} py="10%"
         borderRadius="md"
         boxShadow="md"
        
         bg={"blue.100"}
      >
         <Center position="relative" maxW={"800px"} margin={"auto"} box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
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

         <Text mt={4} fontSize={['sm','md',"lg","xl","2xl"]}>
            Please check your email for details concerning this transaction.
         </Text>

      <Button mt={6} onClick={()=>{
         navigate("/")
      }}>
      Return Home
      </Button>
         {/* <Link href="/" color="blue.500" mt={6} display="inline-block">
            Return Home
         </Link> */}
      </Box>
   );
};

export default Complete;
