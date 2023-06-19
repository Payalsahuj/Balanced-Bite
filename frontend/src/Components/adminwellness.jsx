
import { useEffect, useState } from "react";
import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import AOS from "aos"
import "aos/dist/aos.css"

export const Adminwellness=()=>{
    const [well,setwell]=useState([])


  const getData=()=>{
    fetch("https://frail-toad-sunglasses.cyclic.app/product/wellness",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((res)=>{
      setwell(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    AOS.init({ duration: 800 });
    getData()
  },[])

  return (
    <Box data-aos="zoom-in">
        <br/>
        <br/>
        < Heading as='h5' fontSize={'18px'} mb={'9px'} textAlign={'left'}>Wellness products</Heading>

      <SimpleGrid columns={[1, 2, 3, 4]} spacing={5} data-aos="zoom-in">
        {well?.map((el) => (
            <Flex>
              <Box
                textAlign={"left"}
                boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
                borderRadius={"5px"}
                cursor={"pointer"}
                
              >
                <Image
                  // borderTopLeftRadius={"5px"}
                  // borderTopRightRadius={"5px"}
                  src={el.image}
                />
                <Box
                  marginTop={"10px"}
                  marginBottom={"20px"}
                  paddingLeft={"20px"}
                  paddingRight={"20px"}
                >
                  <Heading size={"md"} noOfLines={1}>{el.name}</Heading>
                  <Box marginTop={"10px"}>{el.title}</Box>
                  
                  
                </Box>
              </Box>
            </Flex>
          ))}
      </SimpleGrid>
    </Box>
  );
}