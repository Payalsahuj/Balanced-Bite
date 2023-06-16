import { useState } from "react";
import {
   Box,
   FormControl,
   FormLabel,
   Input,
   Select,
   Button,
} from "@chakra-ui/react";

const Card = () => {
   const [cardData, setCardData] = useState({
      nameOnCard: "",
      cardType: "",
      cardDetails: "",
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

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(cardData);
   };

   return (
      <Box
        //  bg="blue.900"
         minHeight="100vh"
         py={8}
         px={4}
         borderRadius={"10%"}
         box-shadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      >
         <form onSubmit={handleSubmit}>
            <FormControl>
               <FormLabel>Name on Card</FormLabel>
               <Input
                  type="text"
                  name="nameOnCard"
                  value={cardData.nameOnCard}
                  onChange={handleChange}
               />
            </FormControl>

            <FormControl>
               <FormLabel>Card Type</FormLabel>
               <Select
                  name="cardType"
                  value={cardData.cardType}
                  onChange={handleChange}
               >
                  <option value="visa">Visa</option>
                  <option value="mastercard">MasterCard</option>
                  <option value="verve">Verve</option>
               </Select>
            </FormControl>

            <FormControl>
               <FormLabel>Card Details</FormLabel>
               <Input
                  type="text"
                  name="cardDetails"
                  value={cardData.cardDetails}
                  onChange={handleChange}
               />
            </FormControl>

            <FormControl>
               <FormLabel>Expiry Date</FormLabel>
               <Input
                  type="text"
                  placeholder="MM / YY"
                  maxLength={7}
                  name="expiryDate"
                  value={cardData.expiryDate}
                  onChange={handleChange}
               />
            </FormControl>

            <FormControl>
               <FormLabel>CVV</FormLabel>
               <Input
                  type="text"
                  name="cvv"
                  value={cardData.cvv}
                  onChange={handleChange}
               />
            </FormControl>

            <Button type="submit">Submit</Button>
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
   );
};

export default Card;
