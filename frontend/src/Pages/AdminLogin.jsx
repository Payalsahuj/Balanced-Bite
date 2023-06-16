import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
  } from '@chakra-ui/react'
export function Adminlogin(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (<>
            <Button bg='#1a227e6d' color={'white'} size='md' padding={'0px 20px'} borderRadius={'0px'} _hover={{bg:'#1a227e'}} onClick={onOpen}>~Admin</Button>
            <Modal isOpen={isOpen}   onClose={onClose}>
              <ModalOverlay />
              <ModalContent bg="#73737992" marginTop={'13%'} padding={'15px 0px'} color={'white'}>
                <ModalHeader  margin={'auto'} fontFamily="Chronicle Deck"><span style={{fontSize:'25px'}}>V</span>erify your Admin Account</ModalHeader>
                <ModalCloseButton />
                <Flex   direction={'column'} justifyContent={'space-between'} >
                                        <Box margin={'auto'} width={'85%'}>
                                            <FormControl id="email" isRequired>
                                                <FormLabel>Email</FormLabel>
                                                <Input type="email" fontSize={'20px'} />
                                            </FormControl>
                                        </Box>
                                        <Box  pt={'20px'}  margin={'auto'} width={'85%'}>
                                            <FormControl id="password" isRequired>
                                                <FormLabel>Password</FormLabel>
                                                <Input  type="password" fontSize={'20px'} />
                                            </FormControl>
                                        </Box>
                                        
                                    </Flex>
                                    <br/>
                <ModalFooter>
                  <Button bg="#1A237E" mr={3} _hover={{bg:'#1a227ecc'}} color={'white'} onClick={onClose}>
                    Close
                  </Button>
                  <Button variant='outline' _hover={{bg:'none'}} border={'2px solid white'} color={'white'} overflow={'auto'}>Login as Admin</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>)
}