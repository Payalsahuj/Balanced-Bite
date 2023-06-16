import { useState } from "react";
import {
   FormControl,
   FormLabel,
   Input,
   Tab,
   TabList,
   TabPanel,
   TabPanels,
   Tabs,
   VStack,
} from "@chakra-ui/react";

const PersonalDetails = () => {
   const [detail, setDetail] = useState({
      name: "",
      email: "",
      Address: "",
      city: "",
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

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(detail);
   };

   return (
      <Tabs variant="enclosed">
         <TabList mb="1em">
            <Tab>Personal Details</Tab>
         </TabList>

         <TabPanels>
            <TabPanel>
               <VStack spacing={4} as="form" onSubmit={handleSubmit}>
                  <FormControl>
                     <FormLabel>Name</FormLabel>
                     <Input
                        type="text"
                        required
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
                        required
                        value={detail.city}
                        name="city"
                        placeholder="User's City"
                        onChange={handleChange}
                     />
                  </FormControl>

                  <FormControl>
                     <FormLabel>Contact Number</FormLabel>
                     <Input
                        type="number"
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
                        value={detail.state}
                        name="state"
                        placeholder="State"
                        onChange={handleChange}
                     />
                  </FormControl>

                  <Input type="submit" value="Submit" />
               </VStack>
            </TabPanel>
         </TabPanels>
      </Tabs>
   );
};

export default PersonalDetails;
