import { Box, Image } from "@chakra-ui/react";
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
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as Reactlink } from 'react-router-dom';
export function Login(){
    const [showPassword, setShowPassword] = useState(false);
    useEffect(()=>{
        AOS.init({ duration: 1000 });
    },[])
    return(<Box >
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
                                            <FormControl id="email" isRequired>
                                                <FormLabel>Email</FormLabel>
                                                <Input backgroundColor={'#c1d6f3'} type="email" />
                                            </FormControl>
                                        </Box>
                                        <Box width={{base:'100%',md:'65%'}} pt={'20px'}  margin={'auto'}>
                                            <FormControl id="password" isRequired>
                                                <FormLabel>Password</FormLabel>
                                                <Input backgroundColor={'#c1d6f3'} type="password" />
                                            </FormControl>
                                        </Box>
                                        <Box width={{base:'100%',md:'55%'}} pt={'20px'}  margin={'auto'}>
                                            <FormControl id="confirmpassword" isRequired>
                                                <FormLabel> Confirm Password</FormLabel>
                                                <Input backgroundColor={'#c1d6f3'} type="password" />
                                            </FormControl>
                                        </Box>
                                    </Flex>
                                    
                                    <Stack  spacing={10} pt={2}>
                                        <Button
                                        width={{base:'100%',md:'50%'}}
                                        margin={'auto'}
                                            loadingText="Submitting"
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
        </Box>
    </Box>)
}