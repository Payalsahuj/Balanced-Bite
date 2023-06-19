import { Box, FormErrorMessage, FormHelperText, Image, useToast } from "@chakra-ui/react";
import cap from "../Image/cap black.png"
import AOS from "aos"
import "aos/dist/aos.css"
import {
    Flex,

    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {  Link as Reactlink, useNavigate } from 'react-router-dom';
import Navbar from "../Components/Navbar";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/RegisterReducer/action";
import { POST_LOGIN_SUCCESS, POST_REGISTER_ERROR } from "../Redux/RegisterReducer/actionTypes";
import LoadingBlack from "./Loadingblack";





export function Login(){
  const isLoading = useSelector(store => store.adminReducer.isLoading)

    const [email, setemail] = useState("")
    const [isErroremail, setisErroremail] = useState(false)

    const [pass, setpass] = useState("")
    const [isErrorpass, setisErrorpass] = useState(false)
    const toast = useToast()

    const dispatch = useDispatch()
   const navigate=useNavigate()
    useEffect(()=>{
        AOS.init({ duration: 1000 });
    },[])



    function handleclick() {

       
        if (email === "") {
            setisErroremail(true)
        }
        else if (pass === "") {
            setisErrorpass(true)
        }
        
        else {

            let obj = {
                email: email,
                pass: pass
            }

            dispatch(login(obj)).then((res) => {
                console.log(res)
                setisErroremail(false)
                setisErrorpass(false)
                dispatch({ type: POST_LOGIN_SUCCESS, payload: res.data.user })
                toast({
                    position: 'top',
                    title: res.data.msg,
                    status: 'success',
                    duration: 4000,
                    isClosable: true,

                })
                localStorage.setItem("token",res.data.token)
                
                setemail("")
                setpass("")
                navigate("/")
                
                
            })
                .catch((err) => {
                    console.log(err)
                    if (err.response.data.msg === "Invalid Password !!") {
                        setisErrorpass(true)
                        setisErroremail(false)
                        toast({
                            position: 'top-right',
                            title: err.response.data.msg,
                            status: 'warning',
                            duration: 3000,
                            isClosable: true,

                        })
                    }
                    else if (err.response.data.msg === "Invalid email !!") {
                        
                        setisErrorpass(false)
                        setisErroremail(true)

                        toast({
                            position: 'top-right',
                            title: err.response.data.msg,
                            status: 'warning',
                            duration: 3000,
                            isClosable: true,

                        })

                    }
                    dispatch({ type: POST_REGISTER_ERROR })
                })

        }
    }


    return(<Box >
        {isLoading?<LoadingBlack/>:<Box>
        <Navbar/>
        <Box
            height={'300px'} backgroundColor={'#0f346c'}></Box>
        <Box >
            <Box data-aos="fade-left" position='relative' top='-100px' borderRadius={'10px'} left={'14%'} backgroundColor='#eef4fae6' width={'70%'} boxShadow='rgba(0, 0, 0, 0.35) 0px 5px 15px'>
                <Box style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image src={cap} width={{base:'10%',md:'7%'}} m={'15px'} alt='' />
                    <a style={{ marginTop: '23px' }} href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=23&pause=1000&color=212121&repeat=false&width=445&lines=Login+to+Balanced+Bite." alt="Typing SVG" /></a>
                </Box>
                <Box  width={'90%'} m='auto'>
                    <Flex
                       
                        align={'center'}
                        justify={'center'}
                        pb='30px'
                    //   bg={useColorModeValue('gray.50', 'gray.800')}
                    >
                        
                        <Stack width={'100%'} >
                            
                            <Box
                                 
                                //   bg={useColorModeValue('white', 'gray.700')}
                                // boxShadow={'lg'}
                                p={8}>
                                <Stack data-aos="fade-left" spacing={9}>
                                   
                                    <Flex width={'100%'}  direction={'column'} justifyContent={'space-between'} >
                                        <Box width={{base:'100%',md:'75%'}} margin={'auto'}>
                                        <FormControl id="email" isInvalid={isErroremail} isRequired>
                                                <FormLabel>Email</FormLabel>
                                                <Input backgroundColor={'#c1d6f3'} type="email" value={email} onChange={(e) => setemail(e.target.value)} />
                                                {!isErroremail ? (
                                                    <FormHelperText>
                                                        Enter the email you'd like to receive payment details.
                                                    </FormHelperText>
                                                ) : (
                                                    <FormErrorMessage>Email is required.</FormErrorMessage>
                                                )}
                                            </FormControl>
                                        </Box>
                                        <Box width={{base:'100%',md:'65%'}} pt={'20px'}  margin={'auto'}>
                                        <FormControl id="password" isInvalid={isErrorpass} isRequired>
                                                <FormLabel>Password</FormLabel>
                                                <Input backgroundColor={'#c1d6f3'} type="password" value={pass} onChange={(e) => setpass(e.target.value)} />
                                                {!isErrorpass ? (
                                                    <FormHelperText>
                                                        Password should contain atleast one number, one special character, and of atleast 8 characters long.
                                                    </FormHelperText>
                                                ) : (
                                                    <FormErrorMessage>Password should contain atleast one number, one special character, and of atleast 8 characters long.</FormErrorMessage>
                                                )}
                                            </FormControl>
                                        </Box>
                                        
                                    </Flex>
                                    
                                    <Stack  spacing={10} pt={2}>
                                        <Button
                                        width={{base:'100%',md:'50%'}}
                                        margin={'auto'}
                                           onClick={handleclick}
                                            size="lg"
                                            bg={'blue.400'}
                                            color={'white'}
                                            _hover={{
                                                bg: 'blue.500',
                                            }}>
                                            Login
                                        </Button>
                                    </Stack>
                                    <Stack pt={6}>
                                        <Text align={'center'}>
                                            Is your account is <Reactlink to="/register" ><span style={{color:'#4299E1'}}>Registered?</span></Reactlink>
                                        </Text>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Stack>
                    </Flex>
                </Box>
            </Box>
        </Box></Box>}
    </Box>)
}