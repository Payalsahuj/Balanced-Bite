
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

import AppStoreBadge from '../Image/app-store-logo.png';
import PlayStoreBadge from '../Image/google-play-store-8-1-73-apk.png';

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={9}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
    
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'7xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
          <Stack align={'flex-start'}>
            
            <Link href={'#'}>On the Menu</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Our Vision</Link>
            <Link href={'#'}>Wine</Link>
            <Link href={'#'}>Market</Link>
            <Link href={'#'}>Gift cards</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Cookbook</Link>

          </Stack>

          <Stack align={'flex-start'}>
            
            <Link href={'#'}>Supplier</Link>
            <Link href={'#'}>Affiliates</Link>
            <Link href={'#'}>Supply Chains Act</Link>
            <Link href={'#'}>Food Safety</Link>
            <Link href={'#'}>Career</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Our Team</Link>
            <Link href={'#'}>Investors Relations</Link>


          </Stack>

          <Stack align={'flex-start'}>
            
            <Link href={'#'}>Military & Veterans</Link>
            <Link href={'#'}>Students</Link>
            <Link href={'#'}>Teachers</Link>
            <Link href={'#'}>Seniors (+55)</Link>
            <Link href={'#'}>Medical Staff</Link>
            <Link href={'#'}>First Responders</Link>

          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Customer Support</ListHeader>
            <Link href={'#'}>Help center & FAQ</Link>
            <Link href={'#'}>Students</Link>
            <Link href={'#'}>contact@balancedbite.com</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Install App</ListHeader>
            <Image src={PlayStoreBadge} width="150px"  alt='Logo' />
            <Image src={AppStoreBadge} width="150px"  alt='Logo' />

          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Balanced Bite. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}