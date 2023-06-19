import { useEffect } from "react";
import axios from "axios"
import { useState } from "react";
import { Box, Heading, Image, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";


 export function Salsedata(){
    const [data,setdata]=useState([])
    function getdata(){

        axios.get("https://frail-toad-sunglasses.cyclic.app/order",{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        })
        .then((res)=>{
            console.log(res.data)
            setdata(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        getdata()
    },[])

    return (<Box>
    <Box  boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'} >
                          <TableContainer bg={'white'}>
                            <Table variant='striped' colorScheme='blue'>
                              <TableCaption>User data details</TableCaption>
                              <Thead>
                                <Tr>
                                  <Th>S. no.</Th>
                                  <Th>User Name</Th>
                                  <Th>Email</Th>
                                  <Th >City</Th>
                                  <Th>Nation</Th>
                                  <Th >Address</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                {data.map((ele, index) => <Tr key={index}>
                                  <Td>{index + 1}</Td>
                                  <Td style={{ display: 'flex' }}> {ele.address.name}</Td>
                                  <Td>{ele.address.email}</Td>
                                  <Td>{ele.address.city}</Td>
                                  <Td>{ele.address.nation}</Td>
                                  <Td>{ele.address.address}</Td>
                                </Tr>)}
                              </Tbody>
                              {/* <Tfoot>
                            <Tr>
                              <Th>To convert</Th>
                              <Th>into</Th>
                              <Th isNumeric>multiply by</Th>
                            </Tr>
                          </Tfoot> */}
                            </Table>
                          </TableContainer>
                        </Box>

                        <br/>
                        <br/>
    <Box  boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'} >
                          <TableContainer bg={'white'}>
                            <Table variant='striped' colorScheme='blue'>
                              <TableCaption>Product sales</TableCaption>
                              <Thead>
                                <Tr>
                                  <Th>S. no.</Th>
                                  <Th>Name</Th>
                                  <Th>Category</Th>
                                  <Th >Prepration time</Th>
                                  <Th>Price</Th>
                                  <Th >Calories</Th>
                                </Tr>
                              </Thead>
                              <Tbody>
                                {data.map((ele, index) => <Tr key={index}>
                                  <Td>{index + 1}</Td>
                                  <Td style={{ display: 'flex' }}><Image mr='10px' borderRadius={'50%'} src={ele.image} width={'7%'} h="100%" alt="" /> {ele.name}</Td>
                                  <Td>{ele.category}</Td>
                                  <Td>{ele.time}:00</Td>
                                  <Td>{ele.price}</Td>
                                  <Td>{ele.calories}</Td>
                                </Tr>)}
                              </Tbody>
                              {/* <Tfoot>
                            <Tr>
                              <Th>To convert</Th>
                              <Th>into</Th>
                              <Th isNumeric>multiply by</Th>
                            </Tr>
                          </Tfoot> */}
                            </Table>
                          </TableContainer>
                        </Box>


    </Box>)

}