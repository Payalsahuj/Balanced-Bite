import { Box, Divider, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import { useEffect, useState } from "react";
import load from './loading.gif';

const Summary = () => {
   const navigate = useNavigate();
   const [id,setId] = useState('')
   const [order,setOrder] = useState([])
   const [x,setx] = useState(false)
const [l,setL] = useState(false)

   useEffect(()=>{
      fetch("https://frail-toad-sunglasses.cyclic.app/order", {
         method: "GET",
         headers: {
           "Content-Type": "application/json",
           Authorization: `${localStorage.getItem("token")}`,
         },
       })
         .then((res) => res.json())
         .then((res) => {
            console.log("order",res)
           setOrder(res) 
           setId(res[res.length-1]._id)
           console.log('id in line 24 ',id)
         })
         .catch((err) => {
           console.log(err);
         });
   },[l])

   const handleBook = (e) => {
      setx(true);
      setTimeout(() => {
         navigate("/payment/complete");
      }, 4000);
      
   };

   // console.log('order in line 42',order)
   const handleCancel = (e) => {
      fetch(`https://frail-toad-sunglasses.cyclic.app/payment/delete/${id}`, {
         method: "DELETE",
     
         headers: {
           "Content-Type": "application/json",
           Authorization: `${localStorage.getItem("token")}`,
         },
       })
         .then((res) => res.json())
         .then((res) => {
            console.log("order",res)
           
         })
         .catch((err) => {
            console.log(err.message);
         });
      navigate("/");
   };

   return (
      <Box
         className="page3"
         p={4}
         // bg="gray.200"
         borderRadius="md"
         boxShadow="md"
         // maxW="400px"
         mx="auto"
      >
         <Navbar />
         {x ? (
            <Box p={"10% 40%"} m={"auto"} textAlign={"center"}>
               <img src={load} alt="Gif is running" backgroundColor="none" />
            </Box>
         ) :
         // maxW="400px"
         <Box maxWidth="800px"
               mx="auto" 
               bg="gray.200"
               px={["1rem", "2rem", "9rem"]}
               py={["20%", 15, 20, "5%"]}>
         <Button onClick={()=>setL(!l)} color="green">chan</Button>
         <VStack spacing={4} align="start">
            <Text fontWeight="bold"  fontSize="xl">
            {/* {order.map((e)=>{
               <h1>{e.name}</h1>
            })} */}
              {/* {order[1]['title']}  */}
              name
            </Text>
            <Text fontWeight="bold" fontSize="xl">
               Price
            </Text>

            <Divider />

            <Text>Data science and usability</Text>
            <Text>50,000.00</Text>

            <Text>Shipping</Text>
            <Text>0.00</Text>

            <Divider />

            <Text fontWeight="bold" fontSize="xl">
               Total
            </Text>
            <Text fontWeight="bold" fontSize="xl">
               50,000.00
            </Text>
         </VStack>

         <Button onClick={handleBook} bg={"green"} color={"white"}>
            Book Your Meal
         </Button>
         <Button onClick={handleCancel} m={5} bg={"red"} color={"white"}>
            Cancel Your Meal
         </Button>
         </Box>
         }
      </Box>
   );
};

export default Summary;
