import { Box,Image } from "@chakra-ui/react"
import image from "../Image/Food_Meal_Dish_and_Fork_5K_Wallpaper.jpg"
import "../CSS/Home.css"
function Home(){
    return <Box className="maincontainer" >
        <Box style={{ position: 'sticky', top: 0, zIndex: 1, border:'2px solid yellow',height:'97vh' }} ><Image src={image} height={'100%'} width={'100%'} alt=""/></Box>
        
        <Box  style={{ position: 'sticky', top: 0, zIndex: 2,border:'2px solid blue' ,backgroundColor:'white',display:'flex',justifyContent:'center',alignItems:'center',}}>
            <Box position='static' style={{border:'2px solid red',width:'90%'}}>
            
            </Box>

        </Box>

    </Box>
}

export default Home