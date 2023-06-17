import { useState } from "react";
import {
   Box,
   Button,
   FormControl,
   FormLabel,
   Heading,
   Input,
   Select,
} from "@chakra-ui/react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import load from "./loading.gif";

const PersonalDetails = () => {
   const [stage, setStage] = useState(1);

   const [detail, setDetail] = useState({
      name: "",
      email: "",
      Address: "",
      city: "",
      nation: "",
      contact: "",
      state: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setDetail((prev) => ({
         ...prev,
         [name]: value,
      }));
   };
   const [x, setx] = useState(false);
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      setx(true);
      setTimeout(() => {
         navigate("/payment/card");
      }, 3000);
      console.log(detail);
   };

   const handleCancel = (e) => {
      navigate("/");
   };
   return (
      <Box>
         <Navbar />
         {x ? (
            <Box p={"10% 40%"} m={"auto"} textAlign={"center"}>
               <img src={load} alt="Gif is running" backgroundColor="none" />
            </Box>
         ) : (
            <Box
               maxWidth="800px"
               mx="auto"
               px={["1rem", "2rem", "9rem"]}
               py={["20%", 15, 20, "5%"]}
            >
            <Heading>
               Enter Your delivery Address
            </Heading>
               <form spacing={4} as="form" onSubmit={handleSubmit}>
                  <FormControl>
                     <FormLabel>Name</FormLabel>
                     <Input
                        type="text"
                        required
                        backgroundColor={"#c1d6f3"}
                        value={detail.name}
                        name="name"
                        placeholder="User's Name"
                        onChange={handleChange}
                     />
                  </FormControl>

                  <FormControl>
                     <FormLabel>Email Address</FormLabel>
                     <Input
                        type="text"
                        required
                        backgroundColor={"#c1d6f3"}
                        value={detail.email}
                        name="email"
                        placeholder="User's email"
                        onChange={handleChange}
                     />
                  </FormControl>

                  <FormControl>
                     <FormLabel>Address</FormLabel>
                     <Input
                        type="text"
                        backgroundColor={"#c1d6f3"}
                        required
                        value={detail.Address}
                        name="Address"
                        placeholder="User's permanent address"
                        onChange={handleChange}
                     />
                  </FormControl>

                  <FormControl>
                     <FormLabel>City</FormLabel>
                     <Input
                        type="text"
                        backgroundColor={"#c1d6f3"}
                        required
                        value={detail.city}
                        name="city"
                        placeholder="User's City"
                        onChange={handleChange}
                     />
                  </FormControl>
                  <FormControl>
                     <FormLabel>Nation</FormLabel>
                     <Select
                        backgroundColor={"#c1d6f3"}
                        placeholder="Select option"
                        required
                        value={detail.nation}
                        name="nation"
                        onChange={handleChange}
                     >
                        <option value="Afghanistan">Afghanistan</option>
                        <option value="Australia">Australia</option>
                        <option value="Canada">Canada</option>
                        <option value="China">China</option>
                        <option value="Germany">Germany</option>
                        <option value="India">India</option>

                        <option value="Nepal">Nepal</option>

                        <option value="Sri Lanka">Sri Lanka</option>

                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United States">USA</option>
                     </Select>
                       
                  </FormControl>

                  <FormControl>
                     <FormLabel>Contact Number</FormLabel>
                     <Input
                        type="number"
                        backgroundColor={"#c1d6f3"}
                        required
                        value={detail.contact}
                        name="contact"
                        placeholder="Contact Number"
                        onChange={handleChange}
                     />
                  </FormControl>

                  <FormControl>
                     <FormLabel>State</FormLabel>
                     <Input
                        type="text"
                        required
                        backgroundColor={"#c1d6f3"}
                        value={detail.state}
                        name="state"
                        placeholder="State"
                        onChange={handleChange}
                     />
                  </FormControl>

                  <Button
                     bg={"green"}
                     color={"white"}
                     type="submit"
                     value={"submit"}
                  >
                     Submit Personal Info
                  </Button>
                  <Button
                     onClick={handleCancel}
                     m={5}
                     bg={"red"}
                     color={"white"}
                  >
                     Cancel Your Meal
                  </Button>
               </form>
               {/* <Input type="submit" value="Submit" /> */}
            </Box>
         )}
      </Box>
   );
};

export default PersonalDetails;
