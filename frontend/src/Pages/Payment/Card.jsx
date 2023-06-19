import { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Button,
  SimpleGrid,
  Image,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import load from "./loading.gif";
import Loading from "../loading";

const Card = () => {
   const [order,setOrder] = useState({})
   const [id,setId] = useState("")
   const [x,setx] = useState(false);
   const [cardData, setCardData] = useState({
      nameOnCard: "",
      cardType: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
   });

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
           setOrder(res[res.length-1]._id) 
          
           
         })
         .catch((err) => {
           console.log(err);
         });
   },[])
   const handleChange = (e) => {
      const { name, value } = e.target;
      setCardData((prev) => ({
         ...prev,
         [name]: value,
      }));
   };

   const navigate = useNavigate();
   const handleSubmit = (e) => {
    e.preventDefault();
    setx(true);
    fetch(`https://frail-toad-sunglasses.cyclic.app/order/update/${order?._id}`, {
       method: "PATCH",
       body: JSON.stringify({card:cardData}),
       headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
       },
    })
       .then((res) => res.json())
       .then((res) => {
          console.log("order in line 71", res);
       })
       .catch((err) => {
          console.log(err);
       });

    // console.log(cardData);
    setTimeout(() => {
       navigate("/payment/complete");
       setx(false);
    }, 3000);
 };

   const handleCancel = (e) => {
    fetch(`https://frail-toad-sunglasses.cyclic.app/order/deleteallorder`, {
       method: "DELETE",

       headers: {
          //   "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
       },
    })
       .then((res) => res.json())
       .then((res) => {
          console.log("order", res);
       })
       .catch((err) => {
          console.log(err.message);
       });
    alert("Your Order Canceled");
    navigate("/");
    setCardData({
      nameOnCard: "",
      cardType: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
 };

  return (
    <Box
      //  bg="blue.900"
      // maxWidth="800px"
      // mx="auto"
      // // px={["1rem", "2rem", "4rem"]}
      // py="10%"
      // minHeight="100vh"
      // borderRadius={"10%"}
      // box-shadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      backgroundColor={"#0f346c"}
      height={"100vh"}
      margin={"auto"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Navbar />
      {x ? (
        <Box p={"10% 40%"} m={"auto"} textAlign={"center"}>
          {/* <img src={load} alt="Gif is running" backgroundColor="none" /> */}
        <Loading/>
        </Box>
      ) : (
        <Box>
          <br />
          <br />
          <br />
          <br />
          <br />
          <SimpleGrid
            backgroundColor={"#FFFFFF"}
            columns={[1, 1, 1, 2]}
            spacing={5}
            width={["90%", "90%", "80%", "70%"]}
            margin={"auto"}
            boxShadow={
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            }
            borderBottomRightRadius={"50px"}
            borderTopLeftRadius={"50px"}
            padding={["8px", "10px", "20px", "50px"]}
          >
            <Box
            //  maxWidth="800px"
            //  mx="auto"
            //  px={["1rem", "2rem", "9rem"]}
            //  py={["20%", 15, 20, "0%"]}
            >
              <Heading
                fontFamily={"heading"}
                color={"#002C9B"}
                fontSize={["xl", "xl", "2xl", "3xl"]}
              >
                Enter Your Card Details . . .
              </Heading>
              <br />
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel>Name on Card</FormLabel>
                  <Input
                    type="text"
                    name="nameOnCard"
                    placeholder="Name On Card"
                    required
                    value={cardData.nameOnCard}
                    backgroundColor={"#c1d6f3"}
                    onChange={handleChange}
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Card Type</FormLabel>
                  <Select
                    name="cardType"
                    // placeholder="Name On Card"
                    required
                    backgroundColor={"#c1d6f3"}
                    value={cardData.cardType}
                    onChange={handleChange}
                  >
                    <option value="">Select The Type of Card</option>
                    <option value="visa">Visa</option>
                    <option value="mastercard">MasterCard</option>
                    <option value="verve">Verve</option>
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Card Number</FormLabel>
                  <Input
                    type="number"
                    placeholder="Card Number"
                    required
                    backgroundColor={"#c1d6f3"}
                    name="cardNumber"
                    value={cardData.cardNumber}
                    onChange={handleChange}
                  />
                </FormControl>

                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={5}
                >
                  <FormControl>
                    <FormLabel>Expiry Date</FormLabel>
                    <Input
                      type="text"
                      placeholder="MM / YY"
                      required
                      backgroundColor={"#c1d6f3"}
                      maxLength={7}
                      name="expiryDate"
                      value={cardData.expiryDate}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl>
                    <FormLabel>CVV</FormLabel>
                    <Input
                      type="password"
                      required
                      backgroundColor={"#c1d6f3"}
                      name="cvv"
                      placeholder="Enter Your CVV"
                      value={cardData.cvv}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Flex>
                <br />
                <Button
                  bg={"#0f346c"}
                  colorScheme={"white"}
                  variant={"solid"}
                  type="submit"
                >
                  Submit Card Details
                </Button>
                <Button
                  onClick={handleCancel}
                  m={5}
                  bg={"red.500"}
                  colorScheme={"white"}
                  variant={"solid"}
                >
                  Cancel Your Meal
                </Button>
              </form>

              <Box mt={8} display="flex" justifyContent="center">
                <img
                  src="https://www.freepnglogos.com/uploads/visa-and-mastercard-logo-26.png"
                  alt="Visa"
                  style={{ width: "50px", marginRight: "10px" }}
                />
                <img
                  src="https://www.freepnglogos.com/uploads/visa-and-mastercard-logo-26.png"
                  alt="MasterCard"
                  style={{ width: "50px", marginRight: "10px" }}
                />
                <img
                  src="https://www.freepnglogos.com/uploads/visa-and-mastercard-logo-26.png"
                  alt="Verve"
                  style={{ width: "50px" }}
                />
              </Box>
            </Box>
            <Box>
              <br />
              <Image
                borderBottomRightRadius={"50px"}
                src={
                  "https://img.freepik.com/free-vector/smart-id-card-abstract-concept-illustration_335657-1814.jpg?size=626&ext=jpg&ga=GA1.2.1056998353.1659457435&semt=ais"
                }
              />
            </Box>
          </SimpleGrid>
        </Box>
      )}
      <br />
      <br />
      <br />
    </Box>
  );
};

export default Card;
