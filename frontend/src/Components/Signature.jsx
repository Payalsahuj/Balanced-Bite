import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image:
      "https://media.blueapron.com/recipes/38764/centered_main_dish_images/1684298327-48-0023-7417/0619_2P12_Togarashi-Scallops_670_Web.jpg?quality=80&width=800",
    title: "Togarashi Scallops",
    disc: "with Beurre Blanc, Soy Mustard & Sushi Rice",
    brand: "PREMIUM",
    time: "35 MIN",
  },
  {
    image:
      "https://media.blueapron.com/recipes/39019/centered_main_dish_images/1684252895-46-0007-2542/0619_2P11_Guajillo-Chicken-Tacos_338_Web.jpg?quality=80&width=800",
    title: "Oven-Baked Chicken Tacos",
    disc: "with Guacamole, Guajillo Sauce & Jalapeño",
    brand: "READY TO COOK",
    time: "25 MIN",
  },
  {
    image:
      "https://media.blueapron.com/recipes/38764/centered_main_dish_images/1684298327-48-0023-7417/0619_2P12_Togarashi-Scallops_670_Web.jpg?quality=80&width=800",
    title: "Togarashi Scallops",
    disc: "with Beurre Blanc, Soy Mustard & Sushi Rice",
    brand: "PREMIUM",
    time: "35 MIN",
  },
  {
    image:
      "https://media.blueapron.com/recipes/39019/centered_main_dish_images/1684252895-46-0007-2542/0619_2P11_Guajillo-Chicken-Tacos_338_Web.jpg?quality=80&width=800",
    title: "Oven-Baked Chicken Tacos",
    disc: "with Guacamole, Guajillo Sauce & Jalapeño",
    brand: "READY TO COOK",
    time: "25 MIN",
  },
  {
    image:
      "https://media.blueapron.com/recipes/38764/centered_main_dish_images/1684298327-48-0023-7417/0619_2P12_Togarashi-Scallops_670_Web.jpg?quality=80&width=800",
    title: "Togarashi Scallops",
    disc: "with Beurre Blanc, Soy Mustard & Sushi Rice",
    brand: "PREMIUM",
    time: "35 MIN",
  },
  {
    image:
      "https://media.blueapron.com/recipes/39019/centered_main_dish_images/1684252895-46-0007-2542/0619_2P11_Guajillo-Chicken-Tacos_338_Web.jpg?quality=80&width=800",
    title: "Oven-Baked Chicken Tacos",
    disc: "with Guacamole, Guajillo Sauce & Jalapeño",
    brand: "READY TO COOK",
    time: "25 MIN",
  },
];

function Signature() {

  let navigate=useNavigate()

  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3, 3]} spacing={5}>
        {data &&
          data.map((el,i) => (
            <Flex>
              <Box
                textAlign={"left"}
                boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
                borderRadius={"5px"}
                cursor={"pointer"}
                onClick={()=>navigate(`/products/${i}`)}
              >
                <Image
                  borderTopLeftRadius={"5px"}
                  borderTopRightRadius={"5px"}
                  src={el.image}
                />
                <Box
                  marginTop={"10px"}
                  marginBottom={"20px"}
                  paddingLeft={"20px"}
                  paddingRight={"20px"}
                >
                  <Heading size={"md"}>{el.title}</Heading>
                  <Box marginTop={"10px"}>{el.disc}</Box>
                  <Box
                    bgColor={el.brand == "PREMIUM" ? "#1EB389" : "#002C9B"}
                    color={"#FFFFFF"}
                    marginTop={"10px"}
                    padding={"5px"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    {el.brand}
                  </Box>
                  <br />
                  <Heading size={"sm"}>{el.time}</Heading>
                </Box>
              </Box>
            </Flex>
          ))}
      </SimpleGrid>
    </Box>
  );
}
export default Signature;
