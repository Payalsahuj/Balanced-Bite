import {
  Box,
  Button,
  Flex,
  Heading,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Signature from "../Components/Signature";
import Vegetarian from "../Components/Vegetarian";
import Wellness from "../Components/Wellness";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Products() {
  const month = new Date().toDateString();

  return (
    <Box>
      <Navbar/>
      <br />
      <Box>
        <Heading
          marginTop={"80px"}
          color={"#002C9B"}
          fontWeight={"bold"}
          fontSize={"62px"}
          fontFamily={"serif"}
          font
        >
          Explore our Menus
        </Heading>
      </Box>
      <br />
      <Box color={"#002C9B"}>
        <Tabs isLazy>
          <Box width={["90%", "90%", "90%", "60%"]} margin={"auto"}>
            <TabList>
              <SimpleGrid columns={[3, 3, 3, 5]}>
                <Box>
                  <Tab
                    fontSize={["14px", "16px", "22px", "18px"]}
                    fontWeight={"bold"}
                    fontFamily={"sans-serif"}
                  >
                    2 SERVING Signature
                  </Tab>
                </Box>
                <Box>
                  <Tab
                    fontSize={["14px", "16px", "22px", "18px"]}
                    fontWeight={"bold"}
                    fontFamily={"sans-serif"}
                  >
                    2 SERVING Vegetarian
                  </Tab>
                </Box>
                <Box>
                  <Tab
                    fontSize={["14px", "16px", "22px", "18px"]}
                    fontWeight={"bold"}
                    fontFamily={"sans-serif"}
                  >
                    2 SERVING Wellness
                  </Tab>
                </Box>
                <Box>
                  <Tab
                    fontSize={["14px", "16px", "22px", "18px"]}
                    fontWeight={"bold"}
                    fontFamily={"sans-serif"}
                  >
                    4 SERVING Signature for Four
                  </Tab>
                </Box>
                <Box>
                  <Tab
                    fontSize={["14px", "16px", "22px", "18px"]}
                    fontWeight={"bold"}
                    fontFamily={"sans-serif"}
                  >
                    WEEKLY OPTIONS Add-Ons
                  </Tab>
                </Box>
              </SimpleGrid>
            </TabList>
            <br />
            <Box
              fontSize={["20px", "20px", "25px", "18px"]}
              width={["90%", "90%", "90%", "64%"]}
              margin={"auto"}
              fontFamily={"sans-serif"}
            >
              Choose from an ever-changing mix of meat, fish, WW Recommended and
              health-conscious offerings.
            </Box>
            <br />
          </Box>
          <br />
          <Box width={["90%", "90%", "90%", "70%"]} margin={"auto"}>
            <Box>
              <Flex justifyContent={"space-between"} alignItems={"center"}>
                <Heading size={"md"}>{month}</Heading>
                <Button
                  bgColor={"#002C9B"}
                  colorScheme={"white"}
                  variant={"solid"}
                  borderRadius={"50px"}
                  padding={"5px 30px"}
                >
                  GET COOKIN
                </Button>
              </Flex>
            </Box>
            <br />
            <hr />
            <br />
            <TabPanels>
              {/* initially mounted */}
              <TabPanel>
                <Signature />
              </TabPanel>
              {/* initially not mounted */}
              <TabPanel>
                <Vegetarian />
              </TabPanel>
              <TabPanel>
                <Wellness />
              </TabPanel>
              <TabPanel>
                <Signature />
              </TabPanel>
              <TabPanel>
                <Vegetarian />
              </TabPanel>
            </TabPanels>
          </Box>
        </Tabs>
      </Box>
      <br />
      <br />
      <Footer/>
    </Box>
  );
}
export default Products;
