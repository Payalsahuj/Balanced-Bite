import { Box, Button, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, Textarea, useDisclosure, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteproduct, updateproduct } from "../Redux/AdminReducer/action";
import { DELETE_PRODUCT, ERROR, UPDATE_PRODUCT } from "../Redux/AdminReducer/actionType";


export function Updateproductadmin() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    const navigate = useNavigate()
    const product = useSelector(store => store.adminReducer.product)
    const [data, setdata] = useState({})
    const { id } = useParams()
    const [name, setname] = useState("")
    const [title, settitle] = useState("")
    const [about_dish, setabout_dish] = useState("")
    const [category, setcategory] = useState("")
    const [calories, setcalories] = useState("")
    const [price, setprice] = useState("")
    const [time, settime] = useState("")
    const dispatch = useDispatch()

    useEffect(() => {
        const data = product.find(ele => ele._id === id)
        setdata(data)
        setname(data.name)
        settitle(data.title)
        setabout_dish(data.about_dish)
        setcategory(data.category)
        setcalories(data.calories)
        setprice(data.price)
        settime(data.time)
    }, [])

    console.log("data", data)

    function handlesubmit() {
        if (name && title && about_dish && category && calories && price && time) {
            let obj = {
                name,
                title,
                about_dish,
                category,
                calories,
                price,
                time
            }

            dispatch(updateproduct(data._id, obj)).then((res) => {
                console.log(res.data)
                dispatch({ type: UPDATE_PRODUCT })
                toast({
                    position: 'top-right',
                    title: 'Data has been Updated',
                    description: "Please Login now !!",
                    status: 'success',
                    duration: 4000,
                    isClosable: true,

                })
                navigate("/admin/handlestocks")

            })
                .catch((err) => {
                    dispatch({ type: ERROR })
                })

        }
        else {

            toast({
                position: 'top-right',
                title: 'Need to fill all the data',
                status: 'warning',
                duration: 4000,
                isClosable: true,

            })
        }


    }

    function handledelete() {
        dispatch(deleteproduct(data?._id)).then((res)=>{
            console.log(res)
            dispatch({type:DELETE_PRODUCT})
            toast({
                position: 'right',
                title: 'Account has been Deleted',
                description: "Thank you !!",   
                status: 'success',
                duration: 4000,
                isClosable: true,

            })
            navigate("admin/handlestocks")
        })
        .catch((err)=>{
            dispatch({type:ERROR})
        })
    }

    return (
        <Box p={'25px 30px'}>
            < Heading as='h2' fontSize={'31px'} ><u>Update Products values</u></Heading>
            <br />

            <br />
            <Box display={'flex'}>
                <Box w='40%' padding={'20px 30px'}>
                    <Image src={data?.image} alt="" />
                </Box>
                <Box w='60%' style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }} textAlign={'left'} gap={7}>
                    <Box>
                        <b>Enter Product name</b>
                        <Input name="name" value={name} size='lg' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter Product name" onChange={(e) => setname(e.target.value)} />
                    </Box>
                    <Box>
                        <b>Enter Product title</b>
                        <Input name='title' value={title} size='lg' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter Product title" onChange={(e) => settitle(e.target.value)} />
                    </Box>
                    <Box>
                        <b>Enter Product description</b>
                        <Input name='desc' value={about_dish} size='lg' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter Product description" onChange={(e) => setabout_dish(e.target.value)} />
                    </Box>
                    <Box>
                        <b>Enter Product category</b>
                        <Input name='category' value={category} size='lg' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter Product category" onChange={(e) => setcategory(e.target.value)} />
                    </Box>
                    <Box>
                        <b>Enter Product calories</b>
                        <Input name='calories' value={calories} size='lg' type="number" backgroundColor={'#c1d6f3'} placeholder="Enter Product calories" onChange={(e) => setcalories(e.target.value)} />
                    </Box>

                    <Box>
                        <b>Enter Product price</b>
                        <Input name='price' value={price} size='lg' type="number" backgroundColor={'#c1d6f3'} placeholder="Enter Product price" onChange={(e) => setprice(e.target.value)} />
                    </Box>
                    <Box>
                        <b>Enter Prepration Time</b>
                        <Input name='time' value={time} size='lg' type="number" backgroundColor={'#c1d6f3'} placeholder="Enter time limit to prepare the product" onChange={(e) => settime(e.target.value)} />
                    </Box>


                </Box>

            </Box>



            <Box w={'100%'} mt='15px' boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' backgroundColor="white" borderRadius={'10px'} p='30px 25px'>

                <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }} gap={7}>
                    {/* <Box display={'flex'}>
                        <Box w='20%' display={'flex'} >
                            <Text textAlign={'left'}><b>Add Instructions (Add atleast first 3 details)</b></Text>
                        </Box>
                        <Box w='80%' >
                            
                            <Box>
                                                <Input name='insone'  size='md' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_details"></Input>
                                                <Input name='instwo'  size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_details"></Input>
                                                <Input name='insthree' size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_details"></Input>
                                                <Input name='insfour'  size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_details"></Input>
                                                <Input name='insfive'  size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_details"></Input>
                                                <Input name='inssix' size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_details"></Input></Box>
                                                
                        </Box>
                    </Box>

                    <Box display={'flex'}>
                        <Box w='20%' display={'flex'} >
                            <Text textAlign={'left'}><b>Add Images (Add atleast first 3 images)</b></Text>
                        </Box>
                        
                            <Box w='80%' >
                            <Input name='imgone' size='md' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_Images"></Input>
                            <Input name='imgtwo' size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_Images"></Input>
                            <Input name='imgthree'  size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_Images"></Input>
                            <Input name='imgfour'  size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_Images"></Input>
                            <Input name='imgfive'  size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_Images"></Input>
                            <Input name='imgsix'  size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_Images"></Input>
                        </Box>
                        
                        
                    </Box> */}
                    <Box>
                    </Box>
                </Box>
                <Box >
                    {/* <Box w={'100%'} display={'flex'}  >
                        <Text><b>Add ingredient details <span style={{ color: 'green' }}>(Add ingredients details seperated by commas)</span></b></Text>
                    </Box>
                    <Box w='100%' textAlign={'right'}>
                        <Textarea name='details' backgroundColor={'#c1d6f3'} placeholder="Enter ingredients_details"></Textarea>
                    </Box> */}
                    <Box textAlign={'center'} mt='2%'>
                        <Button w={'90%'} backgroundColor="green" p='0px 35px' color={'white'} _hover={{ bg: 'green' }} onClick={handlesubmit}>UPDATE THE ITEM </Button>

                    </Box>
                    <Box textAlign={'center'} mt='2%'>
                        <Button w={'80%'} backgroundColor="green" p='0px 35px' color={'white'} _hover={{ bg: 'green' }} onClick={onOpen}>DELETE THE ITEM </Button>

                        <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                            <ModalContent top={'20%'}>
                                <ModalHeader pt={'40px'}>Do you really want to delete this item ?</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                During the deletion process, we will take all necessary precautions to ensure the item and its related data are permanently and securely removed from our databases and backups. Our aim is to minimize the risk of any residual traces or unintended retention.
                                You will not be able to Undo this data !

                                </ModalBody>
                                <ModalFooter>
                                    {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                                        Close
                                    </Button> */}
                                    <Button variant='ghost' backgroundColor='#BEE3F8' onClick={handledelete} >Delete</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>

                    </Box>

                </Box>
            </Box>
        </Box>

    )
}