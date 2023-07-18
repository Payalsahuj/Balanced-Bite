import { Box, Image, Center, Heading, Text, Grid, GridItem, Button } from "@chakra-ui/react"
import cap from "../Image/white cap.png"

import chef1 from "../Image/chef-experience 1.webp"
import chef2 from "../Image/chef-experience 2.webp"
import chef3 from "../Image/chef-experience 3.webp"
import { FaGlassCheers } from "react-icons/fa"
import video from "../Image/Mr Fox Restaurant Promo Video (online-video-cutter.com).mp4"
import { Link } from "react-router-dom"
import { Adminlogin } from "./AdminLogin"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"


function Home() {

    let card = [
        {
            image: "https://media.blueapron.com/assets/registration/homepage/craft.webp?width=300&amp;height=300&amp;quality=90",
            head: 'CRAFT',
            desc: 'Cheese Crisp Burgers'
        }, {
            image: "https://media.blueapron.com/assets/registration/homepage/wellness.webp?width=300&amp;height=300&amp;quality=90",
            head: 'WELLNESS',
            desc: 'Turkey & Mushroom Lettuce Cups'
        }, {
            image: "https://media.blueapron.com/assets/registration/homepage/family-friendly.webp?width=300&amp;height=300&amp;quality=90",
            head: 'FAMILY FRIENDLY',
            desc: 'Mafalda Pasta'
        },
        {
            image: "https://media.blueapron.com/assets/registration/homepage/fast-and-easy.webp?width=300&amp;height=300&amp;quality=90",
            head: 'FAST & EASY',
            desc: 'Sheet Pan Cheesy Jalapeño Chicken'
        },
        {
            image: "https://media.blueapron.com/assets/registration/homepage/vegetarian.webp?width=300&amp;height=300&amp;quality=90",
            head: 'VEGETARIAN',
            desc: 'Quinoa & Vegetable “Fried Rice”'
        },
        {
            image: "https://media.blueapron.com/assets/registration/homepage/premium-steak.webp?width=300&amp;height=300&amp;quality=90",
            head: 'PREMIUM',
            desc: 'NY Strip Steaks & Herb-Mushroom Pan Sauce'
        },
        {
            image: "https://media.blueapron.com/assets/registration/homepage/ready-to-cook.webp?width=300&amp;height=300&amp;quality=90",
            head: 'READY TO COOK',
            desc: 'Pesto Chicken and Orzo'
        },
        {
            image: "https://media.blueapron.com/assets/registration/homepage/heat-and-eat.webp?width=300&amp;height=300&amp;quality=90",
            head: 'HEAT & EAT',
            desc: 'Cheesy Truffle Cavatappi'
        },
        {
            image: "https://media.blueapron.com/assets/registration/homepage/breakfast.webp?width=300&amp;height=300&amp;quality=90",
            head: 'BREAKFAST',
            desc: 'Fried Egg & Prosciutto Sandwiches'
        },
        {
            image: "https://media.blueapron.com/assets/registration/homepage/desserts.webp?width=300&amp;height=300&amp;quality=90",
            head: 'DESSERTS',
            desc: 'Flourless Chocolate Cake'
        }
    ]
    return <Box>
        <Navbar/>
        <Box style={{ fontFamily: "Chronicle Deck", position: 'relative' }} >
        <Box mt={{base:'17%',sm:'0%'}} style={{ position: 'sticky', top: 0, zIndex: 1, opacity: '.9' }}  >
            <video width={'100%'}  opacity='.9' style={{ objectFit: 'cover', filter: 'brightness(70%)' }} src={video} autoPlay muted loop></video>
            <Box zIndex={3} top={{ base: '37%', sm: '29%', md: '23%' }} left={'5%'} position={'absolute'} color={'white'} height={'200px'} textAlign={'left'} >
                <Image src={cap} width={{ base: '40px', md: '90px', lg: '140px', xl: '170px' }} alt="" />
                <Heading as='h3' size={{ base: 'xs', md: 'md', lg: 'xl' }} fontFamily="Chronicle Deck" >
                    The Balanced Bite
                </Heading>
                <Heading as='h3' mt='10px' size={{ base: 'xs', md: 'md', lg: 'lg' }} fontFamily="Chronicle Deck">
                    Discover a world of culinary delights.
                </Heading>
            </Box>
            <Box zIndex={3} display={{base:'none',sm:'none',md:'flex'}} top={{base:'22%',md:'22%',lg:'12%'}} right={'0%'} position={'absolute'} color={'white'} >
                <Adminlogin/>
                {/* <Button onClick={<Adminlogin/>} _hover={{ transform: 'scale(1.1)' }} bg='#1a227e6d' color={'white'} size='md'>
                    ~Admin
                </Button> */}
                
            </Box>
        </Box>

        <Box style={{ position: 'sticky', top: 0, zIndex: 2, backgroundColor: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
            <Box position='static' style={{ width: '90%', margin: '35px 0px' }}>
                <Box>
                    <Center h='12%' color={'#1A237E'}>
                        <Heading fontFamily="Chronicle Deck" >203+ million meals shipped</Heading>
                    </Center>
                    <Text>See why home cooks stick with the </Text>
                    <Text>original American meal kit.</Text>
                    <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} mt={'40px'} gap={12}>
                        <GridItem m={'auto'}  >
                            <Image src={chef1} mb='30px' alt="" />
                            <Heading as='h5' size='sm' style={{ display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '23ch' }}>
                                5 decades of top restaurant experience
                            </Heading>
                            <Text p={{ base: '10px 0px', sm: '10px 5px', md: '10px 10px', xl: '10px 50px' }}>Our chefs bring high standards to crafting your meals.</Text>
                        </GridItem>
                        <GridItem m={'auto'} >
                            <Image src={chef2} mb='28px' alt="" />
                            <Heading as='h5' size='sm' style={{ display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '23ch' }}>
                                Fresher ingredients faster
                            </Heading>
                            <Text p={{ base: '10px 0px', sm: '10px 5px', md: '10px 10px', xl: '10px 50px' }}>80% of ingredients come directly from producers.</Text>
                        </GridItem>
                        <GridItem m={'auto'} >
                            <Image src={chef3} mb='30px' alt="" />
                            <Heading as='h5' size='sm' style={{ display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '23ch' }}>
                                You're busy, so we're flexible
                            </Heading>
                            <Text p={{ base: '10px 0px', sm: '10px 5px', md: '10px 10px', xl: '10px 50px' }}>Get boxes on your schedule. Skip, pause, or cancel anytime.</Text>

                        </GridItem>
                    </Grid>
                    <br />
                    <br />
                    <Center h='12%' color={'#1A237E'}>
                        <Text>Get started for as little as <b>$7.99 per serving</b> </Text>
                    </Center>
                    <br />
                    <Link to="/pricing">
                    <Button _hover={{ transform: 'scale(1.1)' }} bg='#1A237E' color={'white'} borderRadius='30px 30px 30px 30px' padding='0px 50px' size='lg'>
                        See Plans
                    </Button>
                    </Link>
                    <Box mt="8%">
                        <Heading color={'#1A237E'} fontFamily="Chronicle Deck" >CHOOSE FROM</Heading>
                        <Heading color={'#00a0df'} fontSize={'47px'} fontFamily="Chronicle Deck" >70+ weekly options</Heading>
                        <Grid templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', xl: 'repeat(5, 1fr)', '2xl': 'repeat(5, 1fr)' }} mt={'40px'} gap={6}>
                            {card.map((ele) => <GridItem m={'auto'} key={ele.head} >
                                <Image src={ele.image} mb='30px' alt="" />
                                <Heading as='h6' size='sm' color={'#1A237E'}>
                                    {ele.head}
                                </Heading>
                                <Text>{ele.desc}</Text>
                            </GridItem>
                            )}
                        </Grid>
                    </Box>
                    <Center m='40px 0px' color={'#1A237E'} >
                        <Link to="/products">
                        <Button _hover={{ transform: 'scale(1.1)' }} borderRadius='30px 30px 30px 30px' padding='0px 50px' size='lg' variant='outline' colorScheme='#1A237E'>
                            BROWSE OUR MENU
                        </Button>
                        </Link>
                    </Center>

                </Box>
            </Box>


            <Box position='static' style={{ width: '100%', height: '520px' }} >
                <Image width={'100%'} height={'100%'} filter='grayscale(25%)' src="https://media.blueapron.com/assets/registration/homepage/cooking-pot.webp?height=600&quality=90" alt="" />
                <Box boxShadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' position={'relative'} height={'65%'} width={{ base: '90%', sm: '79%', md: '45%' }} top={'-80%'} left={{ base: '5%', sm: '12%', md: '28%' }} backgroundColor={'white'} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '0px 15px' }} >
                    <Heading as='h3' size='xl' color={'#1A237E'} fontFamily="Chronicle Deck">
                        Elevate your dining experience, delivered hassle-free.
                    </Heading>
                    <Heading as='h4' mt='10px' size='md' color={'#00a0df'} fontFamily="Chronicle Deck">
                        Unwrap happiness, delivered on time.
                    </Heading>
                    <br />
                    <FaGlassCheers color="#1A237E" size={'55px'} />
                </Box>
            </Box>


            <Box position='static' mt='5%' style={{ width: '100%', height: '400px' }} >
                <Box width={{ base: '90%', sm: '70%', md: '50%' }} height={'100%'} m='auto' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} filter='grayscale(35%)' backgroundImage='url("https://media.blueapron.com/assets/registration/homepage/green-field.png?height=400&quality=90")'>
                    <Heading as='h2' size='xl' color={'white'} fontFamily="Chronicle Deck">
                        We’re proud to be a
                    </Heading>
                    <Heading as='h1' mt='10px' size='xl' p={'0px 15px'} color={'#1A237E'} fontFamily="Chronicle Deck">
                        CARBON NEUTRAL COMPANY
                    </Heading>
                    <br />
                    <Link to="/gift">
                    <Button _hover={{ transform: 'scale(1.1)' }} bg='white' color={'#1A237E'} borderRadius='30px 30px 30px 30px' padding='25px 40px' size='sm' fontFamily="Chronicle Deck">
                        LEARN MORE
                    </Button>
                    </Link>
                </Box>
            </Box>


            <Box position='static' m='5%' width={{ base: '100%', sm: '100%', md: '80%' }} style={{ height: '420px' }} >
                <Image width={'100%'} height={'100%'} filter='grayscale(25%)' src="https://media.blueapron.com/assets/registration/homepage/gnocchi-ingredients.webp?height=400&quality=90" alt="" />
                <Box backgroundColor={'white'} boxShadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' position={'relative'} height={'60%'} width={{ base: '90%', sm: '70%', md: '45%' }} top={'-80%'} left={{ base: '7%', sm: '15%', md: '30%' }} style={{ padding: '0ps 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} >

                    <Heading as='h1' mt='10px' size='xl' color={'#1A237E'} fontFamily="Chronicle Deck">
                        Get started now
                    </Heading>

                    <Text fontFamily="Chronicle Deck">for as little as $7.99 per serving</Text>
                    <br />
                    <Link to="/pricing">
                    <Button _hover={{ transform: 'scale(1.1)' }} bg='#1A237E' color={'white'} borderRadius='30px 30px 30px 30px' padding='0px 50px' size='lg' fontFamily="Chronicle Deck">
                        See Plans
                    </Button>
                    </Link>
                </Box>
            </Box>

        </Box>

    </Box>
   
    <Footer/>
    </Box>
}

export default Home