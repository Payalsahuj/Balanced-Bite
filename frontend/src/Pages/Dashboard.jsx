import React, { useEffect, useState } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,

  Drawer,
  DrawerContent,
  Text,
  useDisclosure,

  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Grid,
  Heading,
  Image,
  Table,
  Thead,
  Tbody,

  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,

} from '@chakra-ui/react';
import AOS from "aos"
import "aos/dist/aos.css"
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';

import { Link as ReactLink, useNavigate, useParams } from "react-router-dom"
import { BsFillBoxSeamFill } from "react-icons/bs";
import { RiFolderSettingsFill } from "react-icons/ri"
import "../Allcss/dashboard.css"
import logo from "../Image/admin.jpg"

import { VscGraph } from "react-icons/vsc"
import { FaUsers } from "react-icons/fa"
import { TbTruckDelivery } from 'react-icons/tb'
import { MdCategory,MdPersonAddAlt1 } from "react-icons/md"

import { Link as Reactlink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getallproducts, getallusersdata } from '../Redux/AdminReducer/action';

import { ERROR, GET_ALLPRODUCTDATA, GET_ALLUSERDATA } from '../Redux/AdminReducer/actionType';
import { Piechart } from '../Components/Piechart';
import { RiAdminFill } from "react-icons/ri"
import Carousel from '../Components/carousel';

import { Adminsig } from '../Components/adminsignature';
import { Adminwellness } from '../Components/adminwellness';
import Adminvegi from '../Components/adminvegetari';
import { Adminallproduct } from '../Components/adminAllproduct';
import AdminAllDetails from '../Components/adminAlldetails';

import RegisterAdmin from '../Components/Registeradmin';
import { Salsedata } from '../Components/salesdata';

import LoadingBlack from './Loadingblack';
import Networkad from '../Components/Network';
import Scatterchart from '../Components/Scatterchart';
import {Linechart} from "../Components/Linegraph"


const LinkItems = [
  { name: 'Dashboard', icon: FiHome, link: "/admin/dashboard" },
  { name: 'Products', icon: BsFillBoxSeamFill, link: "/admin/productsdata" },
  { name: 'Sales Data', icon: FiTrendingUp, link: "/admin/salesdata" },
  // { name: 'Network', icon: FiCompass, link: "/admin/network" },
  { name: 'Manage stocks', icon: RiFolderSettingsFill, link: "/admin/handlestocks" },
  { name: 'Admin Data', icon: RiAdminFill, link: "/admin/admindata" },
  { name: 'Register Admin', icon: MdPersonAddAlt1, link: "/admin/registeradmin" },
  

];
  // { name: 'Settings', icon: FiSettings, link: "/admin/setting" },





export default function Dashboard({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { place } = useParams()

  const dispatch = useDispatch()
  const store = useSelector(store => store.adminReducer)

  

  function fetchdata() {
    dispatch(getallusersdata).then((res) => {
      dispatch({ type: GET_ALLUSERDATA, payload: res.data })
    })
      .catch((err) => {
        dispatch({ type: ERROR })
      })
    dispatch(getallproducts).then((res) => {

      dispatch({ type: GET_ALLPRODUCTDATA, payload: res.data })
    })
      .catch((err) => {
        dispatch({ type: ERROR })
      })



  }



  useEffect(() => {
    AOS.init({ duration: 800 });
    fetchdata()

  }, [])

  let arr = []
  for (let x = 0; x < store.product.length; x++) {
    if (!arr.includes(store.product[x].category)) {
      arr.push(store.product[x].category)
    }
  }


  return (
    <Box>
      {store.isLoading?<LoadingBlack/>:
    <Box minH="100vh" bg={'gray.100'}>

      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}

      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>

          <SidebarContent onClose={onClose} />

        </DrawerContent>
      </Drawer>

      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
      <Box paddingLeft={{base:'5%',sm:'5%',md:'33%',lg:'23%'}} paddingRight={'5%'}>
        {place === "productsdata" ?
          <Box>{store.isLoading?<LoadingBlack/>:<Box>
            <Adminsig />
            <Adminwellness />
            <Adminvegi /></Box>}
          </Box> :
          place === "salesdata" ?
            <Box >
    < Heading as='h5' fontSize={'30px'} mb={'9px'} textAlign={'left'}>Sales data</Heading>

              <Salsedata/>

            </Box> :
            // place === "network" ?
            //   <Box>
            //     <Networkad/>
            //     <br/>
            //    <Scatterchart/>

            //     <br/>
            //     <Salsedata/>
            //     </Box> 
            //     :
              place === "registeradmin" ?
                <Box><RegisterAdmin/></Box> :
                place === "handlestocks" ?
                  <Box>
                    
                    <Adminallproduct />
                  </Box> :
                  place === "admindata" ?
                    <Box>
                      <Carousel />
                     
                      <AdminAllDetails/>
                    </Box> :
                    // place === "setting" ?
                    //   <Box></Box> :
                      <Box >

                        <Grid templateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(4,1fr)' }} gap={12}>
                          <Box data-aos="zoom-in" overflow={'hidden'} className='collect' >
                            <Box className='innercollect'>
                              <Box><FaUsers size="24" /></Box>
                              <Box ml={3} mt={1} >TOTAL CUSTOMERS</Box>
                            </Box>
                            <Box >
                              <Heading as={'h1'} >{store.userdata.length}</Heading>
                            </Box>
                          </Box>
                          <Box data-aos="zoom-in" className='collect' >
                            <Box className='innercollect'>
                              <Box><VscGraph size="24" /></Box>
                              <Box ml={3} mt={1} >TOTAL STOCKS</Box>
                            </Box>
                            <Box>
                              <Heading as={'h1'}>{store.product.length}</Heading>
                            </Box>
                          </Box>
                          <Box data-aos="zoom-in" className='collect' >
                            <Box className='innercollect'>
                              <Box ><TbTruckDelivery size="24" /></Box>
                              <Box ml={3} mt={1} >ORDERS DETAIL</Box>
                            </Box>
                            <Box>
                              <Heading as={'h1'}>46</Heading>
                            </Box>
                          </Box>
                          <Box data-aos="zoom-in" className='collect' >
                            <Box className='innercollect'>
                              <Box ><MdCategory size="24" /></Box>
                              <Box ml={3} mt={1} >TOTAL CATEGORY</Box>
                            </Box>
                            <Box>
                              <Heading as={'h1'}>{arr.length}</Heading>
                            </Box>
                          </Box>

                        </Grid>



                        <br />
                        <br />
                        < Heading as='h5' fontSize={'18px'} mb={'9px'} textAlign={'left'}>Product details</Heading>
                        <Box data-aos="zoom-in" height={'390px'} overflow={'scroll'} boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'} >
                          <TableContainer bg={'white'}>
                            <Table variant='striped' colorScheme='blue'>
                              <TableCaption>Imperial to metric conversion factors</TableCaption>
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
                                {store.product?.map((ele, index) => <Tr key={index}>
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



                        <br />
                        <br />
                        < Heading as='h5' fontSize={'18px'} mb={'9px'} textAlign={'left'}>Sales graph</Heading>

                        <Box boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'} >
                        <Piechart />
                      
                        </Box>
                        <br />
                        <br />
                        < Heading as='h5' fontSize={'18px'} mb={'9px'} textAlign={'left'}>Product Stocks Pie chart</Heading>

                        <Box boxShadow={'rgba(0, 0, 0, 0.16) 0px 1px 4px'} >
                        <Linechart/>
                        </Box>

                      </Box>}
      </Box>
    </Box>}
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Reactlink to='/'><Image src={logo} width={{base:'200px',sm:'200px',md:'auto',lg:'auto'}} ml={'-15%'} alt='Logo' /></Reactlink>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} link={link.link}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({ icon, children, link, ...rest }) => {

  return (
    <ReactLink to={link} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>

      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'gray',
          color: 'white',
        }}
        {...rest}>
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'white',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>

    </ReactLink>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  
const navigate=useNavigate()
 function handlelogout(){
  localStorage.removeItem("admintoken")
  navigate("/")
 }


  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />


      <Reactlink to='/'><Image src={logo} display={{ base: 'flex', md: 'none' }} h={'50px'} alt='Logo' /></Reactlink>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm" color="black" data-aos="fade-left">{localStorage.getItem("name")}</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem onClick={handlelogout}>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );

 }







