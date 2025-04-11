import { ReactNode, useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={"sm"} color={useColorModeValue("gray.600", "gray.400")}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function AdminAllDetails() {
  const [data, setdata] = useState([]);
  function getalladmindetails() {
    axios
      .get("https://balanced-bite.onrender.com/admin-auth")
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getalladmindetails();
  }, []);
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <br />
      <br />
      <br />
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Admin Details</Heading>
          <Text>
            Team collaboration is the cornerstone of building team synergy,
            because collaborative teams work{" "}
          </Text>
          <Text>
            together to brainstormnew ideas, share knowledge, and complete
            ambitious projects.{" "}
          </Text>
        </Stack>
        <Stack
          style={{ display: "grid" }}
          gridTemplateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {data?.map((ele) => (
            <Testimonial key={ele._id}>
              <TestimonialContent>
                <TestimonialHeading>{ele.name}</TestimonialHeading>
                <TestimonialText>{ele.description}</TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={ele.image}
                name={ele.name === "Payal Sahu" ? "Team Leader" : "Team Member"}
                title={ele.role}
              />
            </Testimonial>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
