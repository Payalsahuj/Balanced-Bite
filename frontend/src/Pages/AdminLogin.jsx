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
    FormHelperText,
    FormErrorMessage,
    useToast,
  } from '@chakra-ui/react'
import { ERROR, POST_ADMINLOGIN_SUCCESS } from '../Redux/AdminReducer/actionType'
import { adminlogin } from '../Redux/AdminReducer/action'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
export function Adminlogin(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [name, setname] = useState("")

    const [email, setemail] = useState("")
    const [isErroremail, setisErroremail] = useState(false)

    const [pass, setpass] = useState("")
    const [isErrorpass, setisErrorpass] = useState(false)
    const toast = useToast()

    const dispatch = useDispatch()
   const navigate=useNavigate()
   

  

    function handleclick() {

       
        if (email === "") {
            setisErroremail(true)
        }
        else if (pass === "") {
            setisErrorpass(true)
        }
        
        else {

            let obj = {
                name:name,
                email: email,
                pass: pass
            }

            dispatch(adminlogin(obj)).then((res) => {
                console.log(res)
                setisErroremail(false)
                setisErrorpass(false)
                dispatch({ type: POST_ADMINLOGIN_SUCCESS, payload: res.data.user })
                toast({
                    position: 'top',
                    title: res.data.msg,
                    status: 'success',
                    duration: 4000,
                    isClosable: true,

                })
                localStorage.setItem("admintoken",res.data.token)
                localStorage.setItem("name",res.data.user)
                setemail("")
                setpass("")
                navigate("/admin")
                
                
            })
                .catch((err) => {
                     
                        setisErrorpass(true)
                        setisErroremail(true)

                        toast({
                            position: 'top-right',
                            title: "Invalid email and Password !!",
                            status: 'warning',
                            duration: 3000,
                            isClosable: true,

                        })

                    
                    dispatch({ type: ERROR})
                })

        }
    }



    return (<>
            <Button bg='#1a227e6d' color={'white'} size='md' padding={'0px 20px'} borderRadius={'0px'} _hover={{bg:'#1a227e'}} onClick={onOpen}>~Admin</Button>
            <Modal isOpen={isOpen}   onClose={onClose}>
              <ModalOverlay />
              <ModalContent bg="#73737992" marginTop={'13%'} padding={'15px 0px'} color={'white'}>
                <ModalHeader  margin={'auto'} fontFamily="Chronicle Deck"><span style={{fontSize:'25px'}}>V</span>erify your Admin Account</ModalHeader>
                <ModalCloseButton />
                <Flex   direction={'column'} justifyContent={'space-between'} >
                <Box margin={'auto'} width={'85%'}>
                                        <FormControl id="name" isInvalid={isErroremail} isRequired>
                                                <FormLabel>Name</FormLabel>
                                                <Input  type="text" value={name} onChange={(e) => setname(e.target.value)} />
                                                
                                            </FormControl>
                                        </Box>
                                        <Box margin={'auto'} width={'85%'}>
                                        <FormControl id="email" isInvalid={isErroremail} isRequired>
                                                <FormLabel>Email</FormLabel>
                                                <Input  type="email" value={email} onChange={(e) => setemail(e.target.value)} />
                                                {!isErroremail ? (
                                                    <FormHelperText color={'white'}>
                                                        Enter the email you'd like to receive payment details.
                                                    </FormHelperText>
                                                ) : (
                                                    <FormErrorMessage color={'white'}>Email is required.</FormErrorMessage>
                                                )}
                                            </FormControl>
                                        </Box>
                                        <Box  pt={'20px'}  margin={'auto'} width={'85%'}>
                                        <FormControl id="password" isInvalid={isErrorpass} isRequired>
                                                <FormLabel>Password</FormLabel>
                                                <Input type="password" value={pass} onChange={(e) => setpass(e.target.value)} />
                                                {!isErrorpass ? (
                                                    <FormHelperText color={'white'}>
                                                        Password should contain atleast one number, one special character, and of atleast 8 characters long.
                                                    </FormHelperText>
                                                ) : (
                                                    <FormErrorMessage color={'white'}>Password should contain atleast one number, one special character, and of atleast 8 characters long.</FormErrorMessage>
                                                )}
                                            </FormControl>
                                        </Box>
                                        
                                    </Flex>
                                    <br/>
                <ModalFooter>
                  <Button bg="#1A237E" mr={3} _hover={{bg:'#1a227ecc'}} color={'white'} onClick={onClose}>
                    Close
                  </Button>
                  <Button onClick={handleclick} variant='outline' _hover={{bg:'none'}} border={'2px solid white'} color={'white'} overflow={'auto'}>Login as Admin</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>)
}