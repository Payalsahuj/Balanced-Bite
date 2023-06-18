import { Box, Text, Link, Center, Button, Flex } from "@chakra-ui/react";
import { BsCheckCircle } from "react-icons/bs";
import CelebrationVideo from "./celebration-video.webm";
import { useNavigate } from "react-router-dom";

const Complete = () => {
  const navigate = useNavigate();
  return (
    <Box
      // className="complete"
      // textAlign="center"
      // p={8}
      // mx="auto" px={["1rem", "2rem", "4rem"]} py="10%"
      // borderRadius="md"
      // boxShadow="md"

      bg={"#0f346c"}
    >
      <br />
      <br />
      <br />
      <Box
        width={["90%", "90%", "80%", "60%"]}
        margin={"auto"}
        padding={["10px", "10px", "20px", "40px"]}
        bgColor={"#FFFFFF"}
        borderTopLeftRadius={"50px"}
        borderBottomRightRadius={"50px"}
        boxShadow={
         "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
       }
      >
        <Center
          position="relative"
          maxW={"800px"}
          margin={"auto"}
          box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        >
          <video autoPlay loop muted style={{ height: "400px", width: "100%" }}>
            {/* <source src={CelebrationVideo} type="video/mp4" /> */}
            <source
              src="https://cdnl.iconscout.com/lottie/premium/thumb/order-placed-8151453-6551578.mp4"
              type="video/mp4"
            />
          </video>
          {/* <Center
               position="absolute"
               top="50%"
               left="50%"
               transform="translate(-50%, -50%)"
               zIndex="1"
            >
               <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
               <Text fontWeight="bold" fontSize="2xl" mt={4}>
               <BsCheckCircle className="icon" color="green" size={38} />
               </Text>
               <Text fontWeight="bold" fontSize="2xl" mt={4}>
                  Your Order Placed !
               </Text>
               </Flex>
            </Center> */}
        </Center>
        <br />
        <Box>
          <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
            <Text fontWeight="bold" fontSize="2xl" mt={4}>
              <BsCheckCircle className="icon" color="green" size={38} />
            </Text>
            <Text fontWeight="bold" fontSize="2xl" mt={4}>
              Your Order Placed !
            </Text>
          </Flex>
        </Box>

        <Text
          mt={4}
          fontSize={["sm", "md", "lg", "xl", "xl"]}
          fontFamily={"heading"}
          fontWeight={"bold"}
        >
          Please check your email for details concerning this transaction.
        </Text>

        <Button
          mt={6}
          colorScheme="white"
          variant={"solid"}
          bgColor={"#0f346c"}
          onClick={() => {
            navigate("/");
          }}
        >
          Return Home
        </Button>
        {/* <Link href="/" color="blue.500" mt={6} display="inline-block">
            Return Home
         </Link> */}
      </Box>
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
};

export default Complete;
