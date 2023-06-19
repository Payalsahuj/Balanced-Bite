import { Box, Button, Heading, Input, Text, Textarea, useToast} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addproduct } from "../Redux/AdminReducer/action";
import { ADD_PRODUCT, ERROR } from "../Redux/AdminReducer/actionType";

export function Addproductadmin() {

    const dispatch=useDispatch()
    const toast=useToast()
    const [name,setname]=useState("")
    const[title,settitle]=useState("")
    const [desc,setdesc]=useState("")
    const [cate,setcate]=useState("")
    const [calo,setcalo]=useState("")
    const [high,sethigh]=useState("")
    const [price,setprice]=useState("")
    const [time,settime]=useState("")
    const [img,setimg]=useState("")
    const [ingimg,setingimg]=useState("")
    const [insone,setinsone]=useState("")
    const [instwo,setinstwo]=useState("")
    const [insthree,setinsthree]=useState("")
    const [insfour,setinsfour]=useState("")
    const [insfive,setinsfive]=useState("")
    const [inssix,setinssix]=useState("")
    const [imgone,setimgone]=useState("")
    const [imgtwo,setimgtwo]=useState("")
    const [imgthree,setimgthree]=useState("")
    const [imgfour,setimgfour]=useState("")
    const [imgfive,setimgfive]=useState("")
    const [imgsix,setimgsix]=useState("")
    const [details,setdetails]=useState("")
    const [erro,seterr]=useState(false)


    const [insarr,setinsarr]=useState([])
    const [imgarr,setimgarr]=useState([])
    const [inglist,setinglist]=useState([])


    function handlesubmit(){
        if(name && title && desc && cate && calo && price && time && img && ingimg && insone && instwo && insthree && imgone && imgtwo && imgthree && details){

            seterr(false)
            let arr1=[]
            let arr2=[]
            
            arr1.push(insone)
            arr1.push(instwo)
            arr1.push(insthree)
            arr2.push(imgone)
            arr2.push(imgtwo)
            arr2.push(imgthree)
            if(insfour){
                arr1.push(insfour)
            }
            if(insfive){
                arr1.push(insfive)
            }
            if(inssix){
                arr1.push(inssix)
            }
            if(imgfour){
                arr2.push(imgfour)
            }
            if(imgfive){
                arr2.push(imgfive)
            }
            if(imgsix){
                arr2.push(imgsix)
            }

            setinsarr(arr1)
            setimgarr(arr2)
            setinglist(details.split(","))
            let obj={
                name:name,
                title:title,
                about_dish:desc,
                category:cate,
                calories:calo,
                highlight:high,
                price:price,
                time:time,
                image:img,
                ingredients_image:ingimg,
                instruction_image:insarr,
                instruction_detail:imgarr,
                ingredients_detail:inglist
            }
            dispatch(addproduct(obj)).then((res)=>{
                console.log(res.data.note)
                dispatch({type:ADD_PRODUCT,payload:res.data.note})
                toast({
                    position: 'top',
                    title: res.data.msg,
                    status: 'success',
                    duration: 4000,
                    isClosable: true,

                })
                setname("")
                settitle("")
                setdesc("")
                setcate("")
                setcalo("")
                sethigh("")
                setprice("")
                settime("")
                setimg("")
                setingimg("")
                setinsone("")
                setinstwo("")
                setinsthree("")
                setinsfour("")
                setinsfive("")
                setinssix("")
                setdetails("")
                setimgone("")
                setimgtwo("")
                setimgthree("")
                setimgfour("")
                setimgfive("")
                setimgsix("")
                setinsarr([])
                setimgarr([])
                setinglist([])

            }).catch((err)=> dispatch({type:ERROR}))
            
  

            }
            else{
                seterr(true)
                alert("Need to fill all the Input details")
            }
    }


    return (
        <Box>
      < Heading as='h2' fontSize={'25px'} textAlign={'left'}>Add Products</Heading>
      <br/>
            <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }} textAlign={'left'} gap={7}>
                <Box>
                    <b>Enter Product name</b>
                    <Input name="name" value={name} size='lg' type="text" border={erro?'2px solid red':''} backgroundColor={'#c1d6f3'} placeholder="Enter Product name" onChange={(e)=>setname(e.target.value)}/>
                </Box>
                <Box>
                    <b>Enter Product title</b>
                    <Input name='title' value={title} size='lg' type="text" border={erro?'2px solid red':''} backgroundColor={'#c1d6f3'} placeholder="Enter Product title" onChange={(e)=>settitle(e.target.value)}/>
                </Box>
                <Box>
                    <b>Enter Product description</b>
                    <Input name='desc' value={desc} size='lg' type="text" border={erro?'2px solid red':''} backgroundColor={'#c1d6f3'} placeholder="Enter Product description" onChange={(e)=>setdesc(e.target.value)}/>
                </Box>
                <Box>
                    <b>Enter Product category</b>
                    <Input name='category' value={cate} size='lg' type="text" border={erro?'2px solid red':''} backgroundColor={'#c1d6f3'} placeholder="Enter Product category" onChange={(e)=>setcate(e.target.value)}/>
                </Box>
                <Box>
                    <b>Enter Product calories</b>
                    <Input name='calories' value={calo} size='lg' type="number" border={erro?'2px solid red':''} backgroundColor={'#c1d6f3'} placeholder="Enter Product calories" onChange={(e)=>setcalo(e.target.value)}/>
                </Box>
                <Box>
                    <b>Enter Product highlight</b>
                    <Input name='highlight' value={high} size='lg' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter Product highlight" onChange={(e)=>sethigh(e.target.value)}/>
                </Box>
                <Box>
                    <b>Enter Product price</b>
                    <Input name='price' value={price} size='lg' type="number" border={erro?'2px solid red':''} backgroundColor={'#c1d6f3'} placeholder="Enter Product price" onChange={(e)=>setprice(e.target.value)}/>
                </Box>
                <Box>
                    <b>Enter Prepration Time</b>
                    <Input name='time' value={time} size='lg' type="number" border={erro?'2px solid red':''} backgroundColor={'#c1d6f3'} placeholder="Enter time limit to prepare the product" onChange={(e)=>settime(e.target.value)}/>
                </Box>
                <Box>
                    <b>Enter Product Image</b>
                    <Input name='image' value={img} size='lg' type="text" border={erro?'2px solid red':''} backgroundColor={'#c1d6f3'} placeholder="Enter Product image" onChange={(e)=>setimg(e.target.value)}/>
                </Box>
                <Box>
                    <b>Enter Ingredients Image</b>
                    <Input name='ing_img' value={ingimg} size='lg' type="text" border={erro?'2px solid red':''} backgroundColor={'#c1d6f3'} placeholder="Enter ingredients_image" onChange={(e)=>setingimg(e.target.value)}/>
                </Box>

            </Box>





            <Box w={'100%'} mt='15px'  boxShadow='rgba(0, 0, 0, 0.16) 0px 1px 4px' backgroundColor="white" borderRadius={'10px'} p='30px 25px'>

                <Box style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)' }} gap={7}>
                    <Box display={'flex'}>
                        <Box w='20%' display={'flex'} >
                            <Text textAlign={'left'}><b>Add Instructions (Add atleast first 3 details)</b></Text>
                        </Box>
                        <Box w='80%' >
                            <Input name='insone' value={insone} border={erro?'2px solid red':''} onChange={(e)=>setinsone(e.target.value)} size='md' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_details"></Input>
                            <Input name='instwo' value={instwo} border={erro?'2px solid red':''} onChange={(e)=>setinstwo(e.target.value)} size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_details"></Input>
                            <Input name='insthree' value={insthree} border={erro?'2px solid red':''} onChange={(e)=>setinsthree(e.target.value)} size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_details"></Input>
                            <Input name='insfour' value={insfour}  onChange={(e)=>setinsfour(e.target.value)} size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_details"></Input>
                            <Input name='insfive' value={insfive} onChange={(e)=>setinsfive(e.target.value)} size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_details"></Input>
                            <Input name='inssix' value={inssix} onChange={(e)=>setinssix(e.target.value)} size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_details"></Input>
                        </Box>
                    </Box>

                    <Box display={'flex'}>
                        <Box w='20%' display={'flex'} >
                            <Text textAlign={'left'}><b>Add Images (Add atleast first 3 images)</b></Text>
                        </Box>
                        <Box w='80%' >
                            <Input name='imgone' value={imgone} border={erro?'2px solid red':''} onChange={(e)=>setimgone(e.target.value)} size='md' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_Images"></Input>
                            <Input name='imgtwo' value={imgtwo} border={erro?'2px solid red':''} onChange={(e)=>setimgtwo(e.target.value)} size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_Images"></Input>
                            <Input name='imgthree' value={imgthree} border={erro?'2px solid red':''} onChange={(e)=>setimgthree(e.target.value)} size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_Images"></Input>
                            <Input name='imgfour' value={imgfour} onChange={(e)=>setimgfour(e.target.value)} size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_Images"></Input>
                            <Input name='imgfive' value={imgfive} onChange={(e)=>setimgfive(e.target.value)} size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_Images"></Input>
                            <Input name='imgsix' value={imgsix} onChange={(e)=>setimgsix(e.target.value)} size='md' mt='4%' type="text" backgroundColor={'#c1d6f3'} placeholder="Enter instruction_Images"></Input>
                        </Box>
                    </Box>
                    <Box>
                    </Box>
                </Box>
                <Box >
                    <Box w={'100%'} display={'flex'}  >
                        <Text><b>Add ingredient details <span style={{ color: 'green' }}>(Add ingredients details seperated by commas)</span></b></Text>
                    </Box>
                    <Box w='100%' textAlign={'right'}>
                        <Textarea value={details} border={erro?'2px solid red':''} name='details' onChange={(e)=>setdetails(e.target.value)} backgroundColor={'#c1d6f3'} placeholder="Enter ingredients_details"></Textarea>
                    </Box>
                    <Box textAlign={'left'} mt='2%'>
                        <Button backgroundColor="green" p='0px 35px' color={'white'} onClick={handlesubmit}>ADD ITEM </Button>

                    </Box>

                </Box>
            </Box>
        </Box>

    )
}