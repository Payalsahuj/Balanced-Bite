import { useState } from "react";
import {
   Box,
   FormControl,
   FormLabel,
   Input,
   Select,
   Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import load from './loading.gif'

const Card = () => {
   const [x,setx] = useState(false);
   const [cardData, setCardData] = useState({
      nameOnCard: "",
      cardType: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
   });

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
      setTimeout(() => {
         navigate("/payment/summary");
      }, 4000);
      console.log(cardData);
   };

   const handleCancel = (e)=>{
      navigate('/')
         }  

   return (
      <Box
         //  bg="blue.900"
         // maxWidth="800px"
         mx="auto"
         // px={["1rem", "2rem", "4rem"]}
         py="10%"
         minHeight="100vh"
         borderRadius={"10%"}
         box-shadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      >
      <Navbar/>
      {x ? 
            <Box p={"10% 40%"} m={"auto"} textAlign={"center"}>
               <img src={load} alt="Gif is running" backgroundColor="none" />
            </Box> :
            <Box  maxWidth="800px"
               mx="auto"
               px={["1rem", "2rem", "9rem"]}
               py={["20%", 15, 20, "0%"]}>
      
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

            <Button bg={"green"} color={"white"} type="submit">Submit Card Details</Button>
         <Button onClick={handleCancel} m={5} bg={"red"} color={"white"}>Cancel Your Meal</Button>

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
      }
      </Box>
   );
};

export default Card;
