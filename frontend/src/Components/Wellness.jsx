import { Box, Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductError, getProductSuccess } from "../Redux/ProductReducer/action";
import { useEffect } from "react";
import { FcClock} from "react-icons/fc";


function Wellness() {

  let navigate=useNavigate()
  const dispatch = useDispatch();

  const { isLoading, isError, product } = useSelector(
    (store) => store.ProductReducer
  );

  console.log("prod",product)

  const getData=()=>{
    fetch("https://frail-toad-sunglasses.cyclic.app/product/wellness",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((res)=>{
      dispatch(getProductSuccess(res));
    })
    .catch((err)=>{
      dispatch(getProductError());
    })
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <Box>
      <SimpleGrid columns={[1, 2, 3, 3]} spacing={5}>
        {product &&
          product?.map((el) => (
            <Flex key={el._id}>
              <Box
                textAlign={"left"}
                boxShadow="rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px"
                borderRadius={"5px"}
                cursor={"pointer"}
                onClick={()=>navigate(`/products/${el._id}`)}
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
                  <Box marginTop={"10px"} noOfLines={1}>{el.title}</Box>
                  <Box
                    bgColor={el.time%2 == 0? "#1EB389" : "#002C9B"}
                    color={"#FFFFFF"}
                    marginTop={"10px"}
                    padding={"5px"}
                    textAlign={"center"}
                    fontWeight={"bold"}
                  >
                    {el.time%2==0? "PREMIUM":"READY TO COOK"}
                  </Box>
                  <br />
                  <Flex alignItems={"center"} gap={2}>
                    <Heading size={"md"}>{<FcClock/>}</Heading>
                     <Heading size={"sm"}>{el.time} MIN</Heading>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          ))}
      </SimpleGrid>
    </Box>
  );
}
export default Wellness;
