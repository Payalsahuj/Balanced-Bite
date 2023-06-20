import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
    Textarea,
    useToast,
    Box,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios'

export default function RegisterAdmin() {
    const toast = useToast()

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [role, setrole] = useState("")
    const [desc, setdesc] = useState("")
    const [image, setimage] = useState("")
    const [location, setlocation] = useState("")

    function handleclick() {
        console.log(name, email, password, role, desc, image, location)
        if (name && email && password && role && desc && image && location) {
            let obj={
                name:name,
                email:email,
                description:desc,
                image:image,
                location:location,
                pass:password,
                role:role
            }
           axios.post("https://frail-toad-sunglasses.cyclic.app/admin-auth/register",obj).then((res)=>{
            console.log(res)
            toast({
                position: 'top-right',
                title: 'New Admin has been added',
                status: 'success',
                duration: 4000,
                isClosable: true,
            })
            setname("")
            setemail("")
            setdesc("")
            setimage("")
            setlocation("")
            setpassword("")
            setrole("")
           }).catch((err)=>{
            console.log(err)
           })
           
        }
        else {
            
        //    alert("Need to Fill All Credientials")
        toast({
            position: 'top-right',
            title: 'Need to fill all the data',
            status: 'warning',
            duration: 4000,
            isClosable: true,

        })

        }
    }

    return (
        <Box backgroundColor={'#0f346c'} color={'white'} borderRadius={'10px'}>
            <br/>
            <Heading fontFamily={'sans-serif'} fontSize={'2xl'} margin={'auto'}><u>Register Admin Account</u></Heading>

    
        <Stack minH={'100vh'}  direction={{ base:'column', md: 'row' }}>

            <Flex p={8} flex={1} align={'center'} justify={'center'}>

                <Stack spacing={4} w={'full'} maxW={'md'}>

                    
                    <FormControl id="name">
                        <FormLabel>Enter the Admin Name</FormLabel>
                        <Input value={name} type="text" onChange={(e) => setname(e.target.value)} />
                    </FormControl>
                    <FormControl id="role">
                        <FormLabel>Role of Admin</FormLabel>
                        <Input value={role} type="text" onChange={(e) => setrole(e.target.value)} />
                    </FormControl>
                    <FormControl id="description">
                        <FormLabel>About Admin</FormLabel>
                        <Textarea value={desc} typeof='text' onChange={(e) => setdesc(e.target.value)}></Textarea>
                    </FormControl>
                    <FormControl id="image">
                        <FormLabel>Add Image</FormLabel>
                        <Input value={image} type="text" onChange={(e) => setimage(e.target.value)} />
                    </FormControl>
                    <FormControl id="location">
                        <FormLabel>Add Location</FormLabel>
                        <Input value={location} type="text" onChange={(e) => setlocation(e.target.value)} />
                    </FormControl>

                    <FormControl id="email">
                        <FormLabel>Email address</FormLabel>
                        <Input value={email} type="email" onChange={(e) => setemail(e.target.value)} />
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input value={password} type="password" onChange={(e) => setpassword(e.target.value)} />
                    </FormControl>
                    <Stack spacing={6}>
                        <Stack
                            direction={{ base: 'column', sm: 'row' }}
                            align={'start'}
                            justify={'space-between'}>
                            <Checkbox>Remember me</Checkbox>
                            <Link >Forgot password?</Link>
                        </Stack>
                        <Button colorScheme={'blue'} variant={'solid'} onClick={handleclick}>
                            Register Account
                        </Button>
                    </Stack>
                </Stack>
            </Flex>
            <Flex alignItems={'center'} flex={1} justifyContent={'center'}>
                <Image
                    alt={'Login Image'}
                    // objectFit={'cover'}
                    height={'300px'}
                    src={
                        'https://th.bing.com/th/id/R.9788f043771288a577f5dc3fa242287c?rik=ez1Ki9paJBx7Ng&riu=http%3a%2f%2fxooran.com%2fpublic%2ffrontend%2fimages%2flogin-img.png&ehk=1pkVfXWk39Ll6veahY9qadVWPe2nGR9gd1DMyIcP2DE%3d&risl=&pid=ImgRaw&r=0'
                    }
                />
            </Flex>
        </Stack>
        </Box>
        
    );
}