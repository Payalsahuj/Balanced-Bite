
import { Box, Button, Flex, Grid, Heading, Image, Input, SimpleGrid, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Addproductadmin } from "./Addproductadmin";


export const Adminallproduct = () => {
  const {place}=useParams()
  console.log(place)
  const store = useSelector(store => store.adminReducer)
  console.log(store.product)
  const [displayadd, setdisplayadd] = useState(false)
  const navigate=useNavigate()
  function handleaddbutton() {
    let value = !displayadd
    setdisplayadd(value)
   
  }
  function handleclick(id){
    navigate(`${id}`)
  }
 
 

  return (<Box>

    <br />
    <Box backgroundColor="white" borderRadius={'10px'} boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' p='25px 25px'>
      < Heading as='h2' fontSize={'20px'} textAlign={'left'}>Apply CRUD operations on product</Heading>
      <br />
      <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(1,1fr)' }} gap={10}>
        <Button size={'lg'} backgroundColor={'#c1d6f3'} onClick={handleaddbutton}>CLICK <span style={{color:'red',padding:'0px 5px'}}><u>HERE</u> </span> TO ADD MEALS</Button>

        <Button size={'lg'} backgroundColor={'#c1d6f3'}  disabled={true}>FOR UPDATE AND DELETE THE PRODUCTS CLICK ON THE SELECTED PRODUCT</Button>

      </Box>
    </Box>
    <Box w={'100%'} mt='15px' display={displayadd ? '' : 'none'} boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' backgroundColor="white" borderRadius={'10px'} p='30px 25px'>
      <Addproductadmin/>
    </Box>
    
    
  
   


    <Box mt='6%'>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={5}>
        {
          store.product.map((el) => (
           
            <Flex key={el._id} >
              <Box
              onClick={()=>handleclick(el._id)}
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
    </Box></Box>)
}