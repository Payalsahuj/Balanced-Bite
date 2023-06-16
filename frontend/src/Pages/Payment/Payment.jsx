import { useState } from "react";
import {
   Box,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Button,
} from "@chakra-ui/react";
import Page1 from "./PersonalDetails";
import Page2 from "./Card";
import Page3 from "./Summary";
import Complete from "./Complete";
import ButtonComponent from "./Button";

const Payment = () => {
   const [stage, setStage] = useState(0);
   const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);
   const [isInvalidStage, setIsInvalidStage] = useState(false);

   const increaseStage = () => {
      if (stage === 3) {
         setIsInvalidStage(true);
      } else {
         setStage(stage + 1);
      }
   };

   const decStage = () => {
      if (stage === 0) {
         setIsInvalidStage(true);
      } else {
         setStage(stage - 1);
      }
   };

   const handleCloseModal = () => {
      setIsInvalidStage(false);
   };

   return (
      <Box maxWidth="800px" mx="auto" px={["1rem", "2rem", "4rem"]} py="10%">
         {/* <Header /> */}
         <Box mt="2rem">
            <h2 className="title">Complete Your Purchase</h2>
            {stage === 0 && <Page1 />}
            {stage === 1 && <Page2 />}
            {stage === 2 && <Page3 />}
            {stage === 3 && <Complete />}
         </Box>
         <ButtonComponent onClick={increaseStage} backclick={decStage} />

         <Modal
            isOpen={isPaymentCompleted}
            onClose={() => setIsPaymentCompleted(false)}
         >
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Purchase Completed</ModalHeader>
               <ModalBody>
                  <p>
                     Please check your email for details concerning this
                     transaction.
                  </p>
               </ModalBody>
               <ModalFooter>
                  <Button onClick={() => setIsPaymentCompleted(false)}>
                     Close
                  </Button>
               </ModalFooter>
            </ModalContent>
         </Modal>

         <Modal isOpen={isInvalidStage} onClose={handleCloseModal}>
            <ModalOverlay />
            <ModalContent>
               <ModalHeader>Invalid Stage</ModalHeader>
               <ModalBody>
                  <p>
                     {stage === 0
                        ? "Please fill the above credentials."
                        : "You have made the payment."}
                  </p>
               </ModalBody>
               <ModalFooter>
                  <Button onClick={handleCloseModal}>Close</Button>
               </ModalFooter>
            </ModalContent>
         </Modal>
      </Box>
   );
};

export default Payment;
