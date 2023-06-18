import { useEffect } from "react";

import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "../Pages/loading";



export const Adminsig=()=>{
  const isLoading = useSelector(store => store.adminReducer.isLoading)

    const [sig,setsig]=useState([])
    
    const getDatasig = () => {
        fetch("https://frail-toad-sunglasses.cyclic.app/product/signature", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then((res) => res.json())
          .then((res) => {
           setsig(res)
          })
          .catch((err) => {
            console.log(err)
          })
      }
      useEffect(() => {
        
        getDatasig()
      }, [])
    return (     <Box>{isLoading?<Loading/>:<Box>
        < Heading as='h2' fontSize={'29px'} mb={'9px'} textAlign={'left'}>Product details</Heading>
        < Heading as='h5' fontSize={'18px'} mb={'9px'} textAlign={'left'}>Signature products</Heading>

        <Box>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
            {
              sig.map((el) => (
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
        </Box>}
        </Box>)
}