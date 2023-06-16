import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { color } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const data = {
  image:
    "https://media.blueapron.com/recipes/39019/square_newsletter_images/1684252892-46-0006-5404/0619_2P11_Guajillo-Chicken-Tacos_339_SQ_Web.jpg?quality=80&width=850&format=pjpg",
  name: "Oven-Baked Chicken Tacos",
  title: "with Guacamole, Guajillo Sauce & Jalapeño",
  time: "25 MIN",
  serv: "2 Servings",
  title1: "From the Test Kitchen",
  desc: "Featuring pre-chopped ingredients and a recyclable baking tin, our Ready to Cook recipes make prep and cleaning a breeze. Just assemble, bake, and enjoy! For this dish, you’ll bake a hearty taco filling—featuring tender bites of chicken, fresh tomatoes, smoky guajillo sauce, and more—to serve inside soft flour tortillas. You’ll finish the tacos off with melty cheese and a dollop of creamy guacamole.",
  ingrediant: [
    "10 oz Boneless Chicken Breast Pieces",
    "4 Flour Tortillas",
    "4 oz Grape Tomatoes",
    "⅓ cup Guajillo Chile Pepper Sauce",
    "2 oz Shredded Cheddar & Monterey Jack Cheese Blend",
    "¼ cup Guacamole",
    "1 Tbsp Mexican Spice Blend (Ancho Chile Powder, Smoked Paprika, Garlic Powder, Ground Cumin & Dried Mexican Oregano)",
    "1 8-Oz Can Tomato Sauce",
    "1 oz Sliced Pickled Jalapeño Pepper",
    "1 Single-Use Aluminum Tray",
  ],
};

function SingleProduct() {
  //const [data,setData]=useState({})

  const params=useParams()

  const getData=()=>{
    fetch(`https://frail-toad-sunglasses.cyclic.app/products_veg/${params.id}`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log("res",res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    getData()

  },[params.id])

  return (
    <Box width={["90%", "90%", "90%", "85%"]} margin={"auto"}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
        <Box>
          <Image width={"100%"} height={"100%"} src={data.image} />
        </Box>
        <Box textAlign={"left"}>
          <Heading fontFamily={"serif"} color={"#002C9B"}>
            {data.name}
          </Heading>
          <Text
            fontSize={"2xl"}
            fontFamily={"serif"}
            color={"#6A6D75"}
            marginTop={"5px"}
          >
            {data.title}
          </Text>
          <Text
            fontSize={"xl"}
            fontFamily={"serif"}
            color={"#00A0DF"}
            marginTop={"5px"}
          >
            {data.time}
          </Text>
          <Text
            fontSize={"lg"}
            fontFamily={"serif"}
            color={"#6A6D75"}
            marginTop={"8px"}
          >
            {data.serv}
          </Text>
          <Heading fontFamily={"serif"} fontSize={"2xl"} marginTop={"25px"}>
            {data.title1}
          </Heading>
          <Text
            fontSize={"xl"}
            fontFamily={"serif"}
            color={"#6A6D75"}
            marginTop={"10px"}
          >
            {data.desc}
          </Text>
          <br />
          <br />
          <Flex gap={"30px"} alignItems={"center"}>
            <Button colorScheme={"green"} variant={"solid"}>
              GET COOKING
            </Button>
            <Button colorScheme={"orange"} variant={"solid"}>
              ADD TO WISHLIST
            </Button>
          </Flex>
          <br />
          <br />
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading fontSize={"xl"}>Nutrition</Heading>
            <Text color={"#6A6D75"}>PER SERVING</Text>
          </Flex>
          <br />
          <hr />
          <br />
          <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Heading fontSize={"xl"}>Calories</Heading>
            <Text color={"#6A6D75"}>600 Cals</Text>
          </Flex>
          <br />
          <hr />
          <br />
          <Box
            color={"#002C9B"}
            fontFamily={"heading"}
            fontWeight={"bold"}
            border={"1px solid #6A6D75"}
            padding={"10px 20px"}
            borderRadius={"50px"}
            textAlign={"center"}
            cursor={"pointer"}
          >
            VIEW FULL NUTRITION
          </Box>
        </Box>
      </SimpleGrid>
      <br />
      <br />
      <hr />
      <br />
      <Box textAlign={"left"}>
        <Text fontSize={"2xl"} color={"#6A6D75"}>
          fresh
        </Text>
        <Heading fontFamily={"heading"} color={"#002C9B"}>
          I N G R E D I E N T S
        </Heading>
        <br />
      </Box>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
        <Box >
          <Image
            width={"100%"}
            height={"100%"}
            src={
              "https://media.blueapron.com/recipes/39019/ingredient_images/1684430214-50-0006-6742/0619_2PRE11_large_feature.png"
            }
          />
        </Box>
        <Box>
          {data &&
            data?.ingrediant.map((el, i) => (
              <Box
                textAlign={"left"}
                // paddingLeft={i % 2 == 0 ? "30px" : "90px"}
                paddingLeft={"20px"}
              >
                <br />
                <Heading
                  fontSize={"lg"}
                  fontFamily={"heading"}
                  color={"#0F346C"}
                >
                  {el}
                </Heading>
              </Box>
            ))}
        </Box>
      </SimpleGrid>
      <br />
      <hr />
      <br />
      <Box textAlign={"left"}>
        <Text fontSize={"2xl"} color={"#6A6D75"}>
          step-by-step
        </Text>
        <Heading fontFamily={"heading"} color={"#002C9B"}>
          I N S T R U C T I O N S
        </Heading>
        <br />
      </Box>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
        <Box>
          <Image
            width={"100%"}
            // height={"100%"}
            src={
              "https://media.blueapron.com/recipes/39019/recipe_steps/94133/1684252905-47-0003-3300/0619_2P11_Guajillo-Chicken-Tacos673_Web.jpg?width=512"
            }
          />
          <br />
          <Heading textAlign={"left"} fontSize={"xl"}>
            <span
              style={{
                borderRadius: "100px",
                backgroundColor: "#002C9B",
                padding: "2px 10px",
                color: "white",
              }}
            >
              1
            </span>{" "}
            Prepare the ingredients & bake the tray
          </Heading>
          <br />
          <hr />
          <br />
          <Text
            textAlign={"left"}
            fontSize={"xl"}
            fontFamily={"serif"}
            color={"#6A6D75"}
            marginTop={"10px"}
          >
            Preheat the oven to 450°F. Wash and dry the tomatoes. Pat the
            chicken dry with paper towels. Season with salt, pepper, and enough
            of the spice blend to coat (you may have extra). In the tray,
            combine the seasoned chicken, tomatoes, guajillo sauce, and tomato
            sauce. Season with salt and pepper; stir to thoroughly combine.
            Bake, uncovered, 19 to 21 minutes, or until slightly thickened and
            the chicken is cooked through.
          </Text>
        </Box>
        <Box>
          <Image
            width={"100%"}
            // height={"100%"}
            src={
              "https://media.blueapron.com/recipes/39019/recipe_steps/94134/1684252944-47-0004-8849/0702_2PP_Margarita-Chicken-Fajitas_0547_WEB.jpg?width=512"
            }
          />
          <br />
          <Heading textAlign={"left"} fontSize={"xl"}>
            <span
              style={{
                borderRadius: "100px",
                backgroundColor: "#002C9B",
                padding: "2px 10px",
                color: "white",
              }}
            >
              2
            </span>{" "}
            Warm the tortillas & serve your dish
          </Heading>
          <br />
          <hr />
          <br />
          <Text
            textAlign={"left"}
            fontSize={"xl"}
            fontFamily={"serif"}
            color={"#6A6D75"}
            marginTop={"10px"}
          >
            Meanwhile, wrap the tortillas in foil and place directly onto an
            oven rack; warm 7 to 9 minutes, or until heated through. Transfer to
            a work surface and carefully unwrap. Serve the baked tray with the
            warmed tortillas. Top with the cheese, guacamole, and as much of the
            pepper as you'd like, depending on how spicy you'd like the dish to
            be. Enjoy!
          </Text>
        </Box>
      </SimpleGrid>
      <br />
      <hr />
      <br />
    </Box>
  );
}
export default SingleProduct;
