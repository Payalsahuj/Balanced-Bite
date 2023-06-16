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
import { useNavigate, useParams } from "react-router-dom";
import { FcClock } from "react-icons/fc";
import { useToast } from '@chakra-ui/react'


function SingleProduct() {
  const [sdata, setSdata] = useState({});
  
  const toast = useToast()
  const params = useParams();
  const navigate=useNavigate()

  console.log(params);

  const getData = () => {
    fetch(
      `https://frail-toad-sunglasses.cyclic.app/product/singleproduct/${params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setSdata(res);
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, [params.id]);

  const handleAddtocart=()=>{
    fetch(`https://frail-toad-sunglasses.cyclic.app/cart/add`,{
      method:"POST",
      body:JSON.stringify(sdata),
      headers:{
        "Content-Type":"application/json",
        // Authorization: `${localStorage.getItem("token")}`
      }
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
      if(res.msg=="Please login first!"){
        toast({
          title: 'Please Login First!',
          status: 'error',
          duration: 9000,
          position: 'top',
          isClosable: true,
          
        })

      }else{
        toast({
          title: 'Product Added to Cart',
          status: 'success',
          duration: 9000,
          position: 'top',
          isClosable: true,
          
        })
        navigate("/pricing")

      }
     
    })
    .catch((err)=>{
      console.log("err",err)
      toast({
        title: 'Please Login First!',
        status: 'error',
        duration: 9000,
        position: 'top',
        isClosable: true,
        
      })
    })
  }
  

  const arr=[]
  for(let i=0; i<=sdata?.instruction_detail?.length-1; i++){
    let obj={}
    obj.title=sdata.instruction_detail[i]
    obj.image=sdata.instruction_image[i]

    arr.push(obj)
  }
  console.log("arr",arr)

  return (
    <Box width={["90%", "90%", "90%", "80%"]} margin={"auto"}>
      <br />
      <br />
      <br />
      <br />
      <br />
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
        <Box>
          <Image width={"100%"} height={"100%"} src={sdata?.image} />
        </Box>
        <Box textAlign={"left"}>
          <Heading fontFamily={"serif"} color={"#002C9B"}>
            {sdata?.name}
          </Heading>
          <Text
            fontSize={"2xl"}
            fontFamily={"serif"}
            color={"#6A6D75"}
            marginTop={"5px"}
          >
            {sdata?.title}
          </Text>

          <Flex alignItems={"center"} gap={2}>
            <Text
              fontSize={"2xl"}
              fontFamily={"serif"}
              color={"#00A0DF"}
              marginTop={"5px"}
            >
              {<FcClock />}
            </Text>
            <Text
              fontSize={"xl"}
              fontFamily={"serif"}
              color={"#00A0DF"}
              marginTop={"5px"}
            >
              {sdata?.time} MIN
            </Text>
          </Flex>
          <Text
            fontSize={"lg"}
            fontFamily={"serif"}
            color={"#6A6D75"}
            marginTop={"8px"}
          >
            2 Servings
          </Text>
          <Heading fontFamily={"serif"} fontSize={"2xl"} marginTop={"25px"}>
           From the Test Kitchen
          </Heading>
          <Text
            fontSize={"xl"}
            fontFamily={"serif"}
            color={"#6A6D75"}
            marginTop={"10px"}
          >
            {sdata?.about_dish}
          </Text>
          <br />
          <br />
          <Flex gap={"30px"} alignItems={"center"}>
            <Button colorScheme={"green"} variant={"solid"} onClick={handleAddtocart}>
              GET COOKING
            </Button>
            {/* <Button colorScheme={"orange"} variant={"solid"}>
              ADD TO WISHLIST
            </Button> */}
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
            <Text color={"#6A6D75"}>{sdata?.calories} Cals</Text>
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
        <Box>
          <br />
          <Image
            width={"100%"}
            height={"auto"}
            src={sdata?.ingredients_image}
          />
        </Box>
        <Box>
          {sdata && sdata?.ingredients_detail?.map((el) => (
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
       {arr && arr?.map((el,i)=>(
         <Box>
         <Image
           width={"100%"}
           // height={"100%"}
           src={el.image}
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
             {i+1}
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
          {el.title}
           {/* Preheat the oven to 450°F. Wash and dry the tomatoes. Pat the
           chicken dry with paper towels. Season with salt, pepper, and enough
           of the spice blend to coat (you may have extra). In the tray,
           combine the seasoned chicken, tomatoes, guajillo sauce, and tomato
           sauce. Season with salt and pepper; stir to thoroughly combine.
           Bake, uncovered, 19 to 21 minutes, or until slightly thickened and
           the chicken is cooked through. */}
         </Text>
       </Box>
       ))}
      </SimpleGrid>
      <br />
      <hr />
      <br />
    </Box>
  );
}
export default SingleProduct;
