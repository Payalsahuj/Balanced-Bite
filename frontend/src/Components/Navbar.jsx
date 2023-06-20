
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import logo from "../Image/Balanced-removebg-preview.png"
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { Link as Reactlink } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {

  const [token,setToken]=useState(false)
  const { isOpen, onToggle } = useDisclosure();
  useEffect(()=>{
    const tokendata=localStorage.getItem("token")
    if(tokendata){
      setToken(true)
    }
    else{
      setToken(false)
    }
  },[token])

 function handlelogout(){
  localStorage.removeItem("token")
  setToken(false)
 }
  

  return (
    <Box position='fixed' top='0%'  zIndex={3} width={'100%'}>
      <Flex
        bg={useColorModeValue('#ffffffc5', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Reactlink to='/'><Image src={logo} width={{base: '140px', md:'120px'}}  alt='Logo' /></Reactlink>
        

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        {token?
        <Stack
      
        flex={{ base: 1, md: 0 }}
        justify={'flex-end'}
        direction={'row'}
        spacing={6}>
          
        <Button
         as={'a'}
         display={{ base: 'none', md: 'inline-flex' }}
         fontSize={'sm'}
         fontWeight={600}
         color={'white'}
         bg={'#1A237E'}
         _hover={{
           bg: '#1a227ed6',
         }} onClick={handlelogout}> 
          Logout
        </Button>
        
      </Stack>
        :
        <Stack
      
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
            <Reactlink to='/login'>
          <Button
            
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
             color={'black'} mt={'10px'}> 
            Sign In
          </Button></Reactlink>
          <Reactlink to='/register'>
          <Button
            
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'sm'}
            fontWeight={600}
            color={'white'}
            bg={'#1A237E'}
            _hover={{
              bg: '#1a227ed6',
            }} >
             Sign Up
            
          </Button>
          </Reactlink>
        </Stack>}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('black', 'black');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4} paddingTop="18px">
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Reactlink to={navItem.href}>
              <Text
                p={2}
               
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }} >
                {navItem.label}
              </Text>
              </Reactlink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Reactlink to={href}>
    <Box
     
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}  >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
    </Reactlink>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('#ffffffc5', 'gray.800')}
      p={4}
      
      display={{ md: 'none' }}>
      {NAV_ITEMSMob.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
      
        py={2}
        
        
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
          <Reactlink to={href}>
        <Text
          fontWeight={600}
          fontFamily='Chronicle Deck'
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        </Reactlink>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};



const NAV_ITEMS = [
  {
    label: 'ON THE MENU',
    href:"/products"
  },
  {
    label: 'PRICING',
    href:"/pricing"
  },
  {
    label: 'WINE',
    href: '/wine',
  },
  {
    label: 'GIFTS',
    href: '/gift',
  }
];




const NAV_ITEMSMob = [
  {
    label: 'ON THE MENU',
    href:"/products"
  },
  {
    label: 'PRICING',
    href:"/pricing"
  },
  {
    label: 'WINE',
    href: '/wine',
  },
  {
    label: 'GIFTS',
    href: '/gift',
  },{
    label:"SIGN UP",
    href:'/register'
  }
];
