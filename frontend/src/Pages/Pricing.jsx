import {
   Box,
   Button,
   Flex,
   Heading,
   Image,
   SimpleGrid,
   Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FcApproval } from "react-icons/fc";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
   deleteAllFromCart,
   getallProducts,
   updateCartPrice,
} from "../Redux/CartReducer/action";
import { useNavigate } from "react-router-dom";

function Pricing() {
   const [cart, setCart] = useState({});
   const [chef, setChef] = useState(false);
   const [wellness, setWellness] = useState(false);
   const [family, setFamily] = useState(false);
   const [fast, setFast] = useState(false);
   const [veggies, setVeggies] = useState(false);

   const [serving, setServing] = useState(2);
   const [week, setWeek] = useState(2);
   const [preference, setPreference] = useState("NOT AVAILABLE");

   const navigate = useNavigate();

   const dispatch = useDispatch();
   const { cartProduct } = useSelector((store) => store.CartReducer);

   useEffect(() => {
      getData();
      // getDataOrder()
      if (chef) {
         console.log("chef", chef);
         setPreference("CHEF FAVORITES");
      } else if (wellness) {
         setPreference("WELLNESS");
      } else if (family) {
         setPreference("FAMILY FRIENDLY");
      } else if (fast) {
         setPreference("FAST & EASY");
      } else if (veggies) {
         setPreference("VEGGIES");
      } else {
         setPreference("NOT AVAILABLE");
      }
   }, [chef, wellness, family, fast, veggies, serving, week, preference]);

   // const getDataOrder = () => {
   //   fetch("https://frail-toad-sunglasses.cyclic.app/order", {
   //     method: "GET",
   //     headers: {
   //       "Content-Type": "application/json",
   //       Authorization: `${localStorage.getItem("token")}`,
   //     },
   //   })
   //     .then((res) => res.json())
   //     .then((res) => {
   //       console.log("order",res)
   //     })
   //     .catch((err) => {
   //       console.log(err);
   //     });
   // };

   const getData = () => {
      fetch("https://frail-toad-sunglasses.cyclic.app/cart", {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
         },
      })
         .then((res) => res.json())
         .then((res) => {
            //console.log("res",res[res.length-1])
            dispatch(getallProducts(res[res.length - 1]));
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const handleDelete = () => {
      fetch("https://frail-toad-sunglasses.cyclic.app/cart/deleteallcart", {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
         },
      })
         .then((res) => res.json())
         .then((res) => {
            //console.log("res",res[res.length-1])
            dispatch(deleteAllFromCart());
            getData();
         })
         .catch((err) => {
            console.log(err);
         });
   };

   const handleDeleteAll = () => {
      let payload = {
         price: (
            week +
            serving +
            (cartProduct ? cartProduct?.price : 0) +
            9.99
         ).toFixed(2),
         highlight: preference,
      };
      let arrProduct = [];
      let AddOrderObj = {
         about_dish: cartProduct?.about_dish,
         calories: cartProduct?.calories,
         category: cartProduct?.category,
         highlight: payload?.highlight,
         image: cartProduct?.image,
         ingredients_image: cartProduct?.ingredients_image,
         name: cartProduct?.name,
         price: payload?.price,
         time: cartProduct?.time,
         title: cartProduct?.title,
         userID: cartProduct?.userID,
         address:{
          name:"Hariom"
         },
         card:{
          cvv:123
         }
      };

      arrProduct.push(AddOrderObj);
      console.log("payload", payload);

      fetch("https://frail-toad-sunglasses.cyclic.app/order/add", {
         method: "POST",
         body: JSON.stringify(arrProduct),
         headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
         },
      })
         .then((res) => res.json())
         .then((res) => {
            console.log(res);
         })
         .catch((err) => {
            console.log(err);
         });

      fetch("https://frail-toad-sunglasses.cyclic.app/cart/deleteallcart", {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("token")}`,
         },
      })
         .then((res) => res.json())
         .then((res) => {
            //console.log("res",res[res.length-1])
            console.log(res);
            dispatch(deleteAllFromCart());
            getData();
         })
         .catch((err) => {
            console.log(err);
         });

      navigate("/payment");
   };

   console.log("prod", cartProduct);

   return (
      <Box backgroundColor={"#f8f9fa"}>
         <Navbar />
         <br />
         <br />
         <br />
         <br />
         <Box
            width={["90%", "90%", "80%", "75%"]}
            margin={"auto"}
            padding={"10px"}
         >
            <Heading color={"#303236"} fontFamily={"serif"}>
               Personalize your meal kit
            </Heading>
            <Text
               fontSize={"xl"}
               fontFamily={"heading"}
               color={"#6A6D75"}
               marginTop={"5px"}
            >
               Get excited—your choice of 70+ weekly meals is just a few steps
               away!
            </Text>
            <br />
            <br />
            {cartProduct && (
               <SimpleGrid
                  columns={[1, 1, 1, 3]}
                  padding={["10px", "15px", "25px", "40px"]}
                  backgroundColor={"#FFFFFF"}
                  spacing={10}
                  boxShadow={
                     "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
                  }
               >
                  <Box>
                     <Image
                        width={"100%"}
                        height={"100%"}
                        src={cartProduct?.image}
                     />
                  </Box>
                  <Box textAlign={"left"}>
                     <Heading
                        fontSize={"2xl"}
                        fontFamily={"heading"}
                        color={"#002684"}
                     >
                        {cartProduct?.name}
                     </Heading>
                     <br />
                     <Text color={"#6A6D75"} fontSize={"lg"}>
                        {cartProduct?.title}
                     </Text>
                     <br />
                     <Flex alignItems={"center"} gap={10}>
                        <Text
                           color={"#6A6D75"}
                           fontSize={"lg"}
                           fontWeight={"bold"}
                        >
                           TIME FOR COOKING
                        </Text>
                        <Text fontSize={"lg"} fontWeight={"bolder"}>
                           {cartProduct?.time} MIN
                        </Text>
                     </Flex>

                     <Flex alignItems={"center"} gap={10}>
                        <Text
                           color={"#6A6D75"}
                           fontSize={"lg"}
                           fontWeight={"bold"}
                        >
                           PRICE'S OF SERVING
                        </Text>
                        <Text fontSize={"lg"} fontWeight={"bolder"}>
                           $ {cartProduct?.price}
                        </Text>
                     </Flex>

                     <Flex alignItems={"center"} gap={10}>
                        <Text
                           color={"#6A6D75"}
                           fontSize={"lg"}
                           fontWeight={"bold"}
                        >
                           CALORIES OF MEAL
                        </Text>
                        <Text fontSize={"lg"} fontWeight={"bolder"}>
                           {cartProduct?.calories}
                        </Text>
                     </Flex>

                     <Flex alignItems={"center"} gap={10}>
                        <Text
                           color={"#6A6D75"}
                           fontSize={"lg"}
                           fontWeight={"bold"}
                        >
                           CATEGORY'S MEAL
                        </Text>
                        <Text fontSize={"lg"} fontWeight={"bolder"}>
                           {cartProduct?.category?.toUpperCase()}
                        </Text>
                     </Flex>

                     <Flex alignItems={"center"} gap={10}>
                        <Text
                           color={"#6A6D75"}
                           fontSize={"lg"}
                           fontWeight={"bold"}
                        >
                           NUTRITION'S MEAL
                        </Text>
                        <Text fontSize={"lg"} fontWeight={"bolder"}>
                           {serving} SERVING
                        </Text>
                     </Flex>
                     <Flex alignItems={"center"} gap={10}>
                        <Text
                           color={"#6A6D75"}
                           fontSize={"lg"}
                           fontWeight={"bold"}
                        >
                           PREFERENCE ARE
                        </Text>
                        <Text fontSize={"lg"} fontWeight={"bolder"}>
                           {preference}
                        </Text>
                     </Flex>
                  </Box>
                  <Box textAlign={"left"}>
                     <Text
                        color={"#6A6D75"}
                        fontSize={"lg"}
                        fontWeight={"bold"}
                        noOfLines={11}
                     >
                        {cartProduct?.about_dish}
                     </Text>
                     <br />
                     <Button
                        colorScheme="orange"
                        variant={"solid"}
                        padding={[
                           "10px 25px",
                           "15px 25px",
                           "20px 30px",
                           "25px 50px",
                        ]}
                        borderRadius={"50px"}
                        onClick={handleDelete}
                     >
                        DELETE
                     </Button>
                  </Box>
               </SimpleGrid>
            )}
            <SimpleGrid
               columns={[1, 1, 1, 2]}
               padding={["10px", "15px", "25px", "40px"]}
               backgroundColor={"#FFFFFF"}
               spacing={5}
               boxShadow={
                  "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset"
               }
            >
               <Box borderRight={["none", "none", "none", "1px solid #6A6D75"]}>
                  <Heading
                     fontSize={"2xl"}
                     fontFamily={"heading"}
                     color={"#303236"}
                  >
                     1. Tell us your preferences
                  </Heading>
                  <Box marginTop={["10px", "10px", "10px", "20px"]}>
                     <Button
                        width={["100%", "100%", "100%", "75%"]}
                        margin={"auto"}
                        paddingTop={"40px"}
                        colorScheme={"#FFFFFF"}
                        variant={"solid"}
                        border={
                           chef == true
                              ? "2px solid #002C9B"
                              : "1px solid #6A6D75"
                        }
                        paddingBottom={"40px"}
                        _hover={{ border: "2px solid #002C9B" }}
                        onClick={() => setChef(!chef)}
                     >
                        <Flex
                           justifyContent={"space-between"}
                           alignItems={"center"}
                           gap={["0px", "5px", "10px", "25px"]}
                        >
                           <Box textAlign={"left"}>
                              <svg height={36} width={46}>
                                 <g fill="none" fillRule="evenodd">
                                    <path
                                       d="M14.967 17.931a14.588 14.588 0 0 0-1.677-2.061c-.613-.631-1.273-1.217-1.91-1.816a29.54 29.54 0 0 1-1.167-1.154c-.225-.245-.84-.283-1.073-.027-.234.257-.3.81-.05 1.072 1.24 1.303 2.672 2.417 3.83 3.802l.238.288c.031.041.177.25.053.069l.11.15c.032.04.059.081.086.12m10.94-.802-.014-.031a4.602 4.602 0 0 1-.112-.239 7.113 7.113 0 0 1-.41-1.573v-.014c-.151-1.228-.082-2.467-.095-3.7 0-.338-.422-.665-.77-.647a.655.655 0 0 0-.642.65c.023 1.611-.108 3.248.294 4.826.062.24.137.476.225.708m10.259 1.546c.023-.036.714-.908.961-1.156.498-.517 1.026-1.01 1.484-1.568.266-.3.492-.633.673-.992a.688.688 0 0 0 .063-.502c-.195-.78-1.158-.59-1.315-.261a3.687 3.687 0 0 1-.225.402l-.121.177a.048.048 0 0 0-.013.023l-.014.018a10.891 10.891 0 0 1-.727.815c-.498.52-1.026 1.01-1.486 1.57a5.304 5.304 0 0 0-.597.859c.417.305.895.516 1.4.617l-.083-.002z"
                                       stroke="#6A6D75"
                                       stroke-width=".515"
                                       fill="#6A6D75"
                                       fill-rule="nonzero"
                                    ></path>
                                    <path
                                       d="M43.34 12.769c-.128-.139-.263-.273-.397-.407a4.451 4.451 0 0 1-.84-1.012c-.357-.704-.242-1.59-.121-2.51l.054-.441c.105-.967-.072-1.744-.525-2.309a2.44 2.44 0 0 0-1.67-.87h-.032l-.449-.015c-.765-.023-1.485-.043-1.997-.413a3.689 3.689 0 0 1-.826-1.05 6.088 6.088 0 0 0-.837-1.134c-.75-.738-1.868-1.135-3.322-1.187-1.857-.069-3.657.333-5.387.72-.537.117-1.089.24-1.632.346-1.762.343-4.343.682-6.428-.38-.182-.094-.36-.194-.557-.307-.635-.364-1.29-.74-2.099-.8a4.91 4.91 0 0 0-1.795.312l-.225.068c-1.614.492-3.3.698-4.983.608-.354-.018-.727-.05-1.108-.084-1.742-.15-3.54-.306-5.096.663a4.532 4.532 0 0 0-2.02 4.47c.107.545.268 1.077.48 1.589.126.336.248.654.333.974.294 1.108.195 2.377.099 3.602-.142 1.816-.288 3.712.776 5.322 1.163 1.759 3.167 2.27 5.122 2.783.319.081.638.163.954.252l.467.131.25-.422c.32-.545 1.227-1.342 3.725-2.043.11-.034.225-.068.344-.098l1.122-.35.415-.083c1.933-.397 4.083-.568 7.183-.568h1.277-.117l-.19-.381-.064.023.057-.037c-.025-.05-.072-.081-.095-.13l.023-.017-.083-.202a6.382 6.382 0 0 1-.182-.554c-.245-.012-.59 0-1.044.013-2.75.014-4.803.173-6.615.511l-2.933.802c-1.73.549-2.95 1.241-3.63 2.059l-.567-.15c-1.785-.454-3.468-.908-4.362-2.248-.819-1.235-.693-2.824-.563-4.504.103-1.334.211-2.724-.141-4.038a11.9 11.9 0 0 0-.373-1.099 7.096 7.096 0 0 1-.41-1.342A3.192 3.192 0 0 1 3.734 3.67c1.199-.747 2.716-.615 4.341-.474.373.032.756.066 1.122.086a15.787 15.787 0 0 0 5.407-.65l.225-.067c.43-.164.886-.252 1.347-.26.514.037 1.02.328 1.557.634.184.107.395.227.609.336 2.437 1.24 5.301.876 7.245.495a65.994 65.994 0 0 0 1.623-.345h.047c1.663-.368 3.385-.747 5.068-.681 1.122.04 1.964.318 2.469.824.25.272.47.572.653.894.295.538.69 1.012 1.165 1.397.828.599 1.78.628 2.694.656.134 0 .271 0 .397.013.305.023.589.165.792.395.225.29.317.747.252 1.362-.016.141-.034.28-.052.418-.141 1.087-.29 2.209.254 3.274a5.45 5.45 0 0 0 1.084 1.343c.119.12.24.241.354.364 1.796 1.93 1.641 4.649.39 5.884-1.25 1.235-3.202 1.187-5.258 1.135a52.89 52.89 0 0 0-1.221-.025c-.393-.706-1.122-1.285-2.265-1.816-.361-.157-1.445-.695-1.484-.631l-.505 1.226.732.277c1.504.565 2.278 1.12 2.516 1.8l.155.436h.45c.5 0 1.02 0 1.525.018h.056c.416 0 .847.025 1.273.025 1.746 0 3.549-.186 4.907-1.521 2.11-2.096 1.522-5.74-.319-7.723z"
                                       stroke="#6A6D75"
                                       stroke-width=".515"
                                       fill="#6A6D75"
                                       fill-rule="nonzero"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                    ></path>
                                    <path
                                       d="M23.355 17.25a3.698 3.698 0 0 1-.115-.384.889.889 0 0 0-.298-.045c.053.188.112.375.181.554l.083.202-.022.018c.022.048.07.08.094.13l-.056.036.063-.023.19.381h.215l-.334-.869z"
                                       fill="#6A6D75"
                                       fill-rule="nonzero"
                                    ></path>
                                    <path
                                       d="M31.334 17.847a33.583 33.583 0 0 0-6.363-.938 18.33 18.33 0 0 1-2.043-.122l.014.04a.889.889 0 0 1 .298.046c.031.13.07.258.115.384l.334.874h-.097l.674.03c2.432.079 4.847.435 7.2 1.062l.716.25.225-.48c.13-.27.114-.2.359-.497 0 0 .067-.14.072-.145-.438-.116-.537-.186-1.504-.504z"
                                       stroke="#6A6D75"
                                       stroke-width=".515"
                                       fill="#6A6D75"
                                       fill-rule="nonzero"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                    ></path>
                                    <path
                                       stroke="#6A6D75"
                                       stroke-width=".515"
                                       fill="#6A6D75"
                                       fill-rule="nonzero"
                                       d="M10.083 31.94h1.315V21.677l-1.315 1.198zm23.242-10.152v10.188h1.315v-8.99z"
                                    ></path>
                                    <path
                                       d="M34.005 31.906v.077c-.08.502-.932 1.276-3.131 1.948-2.26.68-5.275 1.069-8.496 1.069-3.22 0-6.237-.384-8.5-1.065-2.262-.68-3.08-1.473-3.142-1.97v-.055c0-.49.819-1.316 3.142-2.025 2.26-.68 5.275-1.069 8.496-1.069 3.22 0 6.235.38 8.495 1.07 2.312.699 3.136 1.525 3.136 2.02z"
                                       stroke="#6A6D75"
                                       stroke-width="1.771"
                                    ></path>
                                 </g>
                              </svg>
                           </Box>
                           <Box textAlign={"left"}>
                              <Text color={"#303236"} fontSize={"xl"}>
                                 Chef Favorites
                              </Text>
                              <Text color={"#6A6D75"} fontSize={"lg"}>
                                 Our's Test Kitchen's top picks
                              </Text>
                           </Box>
                           {chef == true && (
                              <Box>
                                 <span style={{ fontSize: "35px" }}>
                                    <FcApproval />
                                 </span>
                              </Box>
                           )}
                        </Flex>
                     </Button>
                     <br />
                     <br />
                     <Button
                        width={["100%", "100%", "100%", "75%"]}
                        margin={"auto"}
                        paddingTop={"40px"}
                        colorScheme={"#FFFFFF"}
                        variant={"solid"}
                        border={
                           wellness == true
                              ? "2px solid #002C9B"
                              : "1px solid #6A6D75"
                        }
                        paddingBottom={"40px"}
                        _hover={{ border: "2px solid #002C9B" }}
                        onClick={() => setWellness(!wellness)}
                     >
                        <Flex
                           justifyContent={"space-between"}
                           alignItems={"center"}
                           gap={["0px", "5px", "10px", "25px"]}
                        >
                           <Box textAlign={"left"}>
                              <svg height={38} width={41}>
                                 <g>
                                    <path
                                       d="M20.228 36.977c3.248-3.893 8.38-8.582 11.63-12.48C35.042 20.671 40 16.413 40 11.137c.004-4.671-3.252-8.74-7.882-9.847-4.629-1.108-9.43 1.031-11.623 5.179C18.295 2.33 13.496.2 8.873 1.312 4.25 2.422 1 6.486 1 11.152c0 5.916 5.619 10.282 9.173 14.436.59.688 6.782 7.322 9.34 10.535.235.298.506.69.67.874.166.185-.985-9.765-.022-13.352 0 0-.988-.32-1.292-.445-7.173-2.923-8.782-8.25-9.144-10.506a.155.155 0 0 1 .04-.129.131.131 0 0 1 .07-.047.216.216 0 0 1 .055 0c3.172 0 5.667.74 7.445 2.195.18.145.351.3.514.462.049.044.091.09.136.133.13.137.256.278.378.415 1.167 1.393 1.73 3.063 1.984 4.56.182-2.21.818-4.917 2.6-7.143.153-.193.316-.382.485-.564.057-.06.114-.12.175-.18.21-.219.431-.426.662-.622 2.288-1.961 5.55-3.004 9.702-3.093.025 0 .05.004.074.012a.273.273 0 0 1 .091.06c.045.046.066.11.057.172-.41 2.965-2.366 9.998-11.694 14.038-.423.18-1.95.745-2.404.91"
                                       stroke="#6A6D75"
                                       stroke-width="1.628"
                                       fill="none"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                    ></path>
                                 </g>
                              </svg>
                           </Box>
                           <Box textAlign={"left"}>
                              <Text color={"#303236"} fontSize={"xl"}>
                                 Wellness
                              </Text>
                              <Text color={"#6A6D75"} fontSize={"lg"}>
                                 Nutritionist-approved recipes
                              </Text>
                           </Box>
                           {wellness == true && (
                              <Box>
                                 <span style={{ fontSize: "35px" }}>
                                    <FcApproval />
                                 </span>
                              </Box>
                           )}
                        </Flex>
                     </Button>
                     <br />
                     <br />
                     <Button
                        width={["100%", "100%", "100%", "75%"]}
                        margin={"auto"}
                        paddingTop={"40px"}
                        colorScheme={"#FFFFFF"}
                        variant={"solid"}
                        border={
                           family == true
                              ? "2px solid #002C9B"
                              : "1px solid #6A6D75"
                        }
                        paddingBottom={"40px"}
                        _hover={{ border: "2px solid #002C9B" }}
                        onClick={() => setFamily(!family)}
                     >
                        <Flex
                           justifyContent={"space-between"}
                           alignItems={"center"}
                           gap={["0px", "5px", "10px", "25px"]}
                        >
                           <Box textAlign={"left"}>
                              <svg height={34} width={51}>
                                 <g>
                                    <path
                                       d="M46.827 17.502c-1.278-1.112-2.823-1.943-4.53-2.458 2.48-1.384 4.16-4.001 4.16-6.999C46.458 3.61 42.782 0 38.265 0c-4.518 0-8.194 3.61-8.194 8.045 0 2.993 1.672 5.607 4.148 6.992a14.866 14.866 0 0 0-4.06 1.946 5.764 5.764 0 0 0-4.86-2.642 5.756 5.756 0 0 0-5.084 3.024 12.894 12.894 0 0 0-3.724-1.781c2.628-1.343 4.428-4.04 4.428-7.142 0-4.435-3.677-8.045-8.194-8.045-4.518 0-8.194 3.61-8.194 8.045 0 3.127 1.83 5.843 4.49 7.173C3.99 17.123.31 21.54 0 26.935l2.014-.005c.317-5.504 4.795-9.69 10.415-9.886a10.878 10.878 0 0 1 7.166 2.338 5.87 5.87 0 0 0-.033.596c0 2.492 1.658 4.61 3.944 5.352-4.283.708-7.555 4.325-7.555 8.67h2.017c0-3.76 3.174-6.818 7.075-6.818 3.901 0 7.076 3.059 7.076 6.818h2.017c0-4.232-3.105-7.778-7.228-8.612 2.386-.683 4.135-2.85 4.135-5.41 0-.375-.037-.74-.11-1.096 2-1.517 4.698-2.468 7.129-2.468 2.89 0 5.53.914 7.437 2.571 2.142 1.862 3.365 4.58 3.502 7.98L51 26.95c-.17-3.95-1.61-7.218-4.173-9.448zM6.539 8.44c0-3.345 2.773-6.068 6.18-6.068 3.407 0 6.18 2.723 6.18 6.068 0 3.345-2.773 6.068-6.18 6.068-3.407 0-6.18-2.723-6.18-6.068zm18.754 15.191c-2.054 0-3.724-1.64-3.724-3.656 0-2.017 1.67-3.656 3.724-3.656 2.054 0 3.724 1.64 3.724 3.656 0 2.017-1.67 3.656-3.724 3.656zm6.789-15.586c0-3.345 2.772-6.067 6.18-6.067 3.406 0 6.179 2.722 6.179 6.067 0 3.346-2.773 6.068-6.18 6.068-3.407 0-6.18-2.722-6.18-6.068z"
                                       fill="#6A6D75"
                                    ></path>
                                 </g>
                              </svg>
                           </Box>
                           <Box textAlign={"left"}>
                              <Text color={"#303236"} fontSize={"xl"}>
                                 Family Friendly
                              </Text>
                              <Text color={"#6A6D75"} fontSize={"lg"}>
                                 family-friendly meals loves
                              </Text>
                           </Box>
                           {family == true && (
                              <Box>
                                 <span style={{ fontSize: "35px" }}>
                                    <FcApproval />
                                 </span>
                              </Box>
                           )}
                        </Flex>
                     </Button>
                     <br />
                     <br />
                     <Button
                        width={["100%", "100%", "100%", "75%"]}
                        margin={"auto"}
                        paddingTop={"40px"}
                        colorScheme={"#FFFFFF"}
                        variant={"solid"}
                        border={
                           fast == true
                              ? "2px solid #002C9B"
                              : "1px solid #6A6D75"
                        }
                        paddingBottom={"40px"}
                        _hover={{ border: "2px solid #002C9B" }}
                        onClick={() => setFast(!fast)}
                     >
                        <Flex
                           justifyContent={"space-between"}
                           alignItems={"center"}
                           gap={["0px", "5px", "10px", "25px"]}
                        >
                           <Box textAlign={"left"}>
                              <svg height={38} width={38}>
                                 <g fill="none" fillRule="evenodd">
                                    <path
                                       d="M27.206 12.569a.354.354 0 0 1 .322.522l-2.563 6.481a1.917 1.917 0 0 1-1.622 1.249 1.389 1.389 0 0 1-.804-.198c-.849-.51-.94-1.787-.195-2.645l4.573-5.258a.419.419 0 0 1 .289-.151z"
                                       fill="#6A6D75"
                                       fill-rule="nonzero"
                                    ></path>
                                    <path
                                       d="M36.985 17.793c0-.079 0-.156-.014-.235 0-.16-.02-.32-.034-.48 0-.094-.023-.186-.033-.277a9.503 9.503 0 0 0-.05-.427c-.015-.098-.032-.193-.048-.291-.021-.133-.042-.269-.067-.4-.025-.13-.044-.208-.065-.297-.021-.09-.054-.254-.084-.381-.029-.127-.052-.196-.08-.295a13.37 13.37 0 0 0-.1-.369c-.035-.122-.062-.193-.091-.289a10.13 10.13 0 0 0-.226-.643c-.038-.096-.086-.233-.134-.345l-.119-.281a9.457 9.457 0 0 0-.282-.608c-.046-.091-.107-.208-.163-.324l-.144-.262-.182-.317c-.063-.108-.103-.17-.155-.254l-.194-.305-.17-.246a9.296 9.296 0 0 0-.209-.291 11.34 11.34 0 0 0-.826-1.015l-.198-.209a9.704 9.704 0 0 0-.25-.258l-.21-.208c-.07-.07-.175-.164-.263-.245-.088-.081-.144-.131-.209-.194-.065-.062-.182-.156-.276-.233l-.223-.18-.289-.209c-.077-.056-.155-.114-.232-.168-.077-.055-.209-.14-.3-.208-.093-.07-.16-.107-.241-.157l-.312-.191-.25-.144-.327-.174-.25-.133-.337-.159c-.086-.04-.171-.08-.257-.118a11.183 11.183 0 0 0-.349-.144l-.261-.104c-.12-.046-.24-.087-.362-.129l-.263-.09c-1.566-.511-3.365-.613-5.006-.532a13.446 13.446 0 0 0-3.426.62 14.21 14.21 0 0 0-2.493 1.068 14.803 14.803 0 0 0-3.727 2.912 15.486 15.486 0 0 0-2.027 2.745 15.575 15.575 0 0 0-.91 1.856c-.174.427-.327.863-.461 1.309a14.695 14.695 0 0 0-.627 4.186l-.07 14.995s.022.762.078 1.374c.04.416.627.757 1.116.95a.598.598 0 0 1 .06 0c.07.008.14.012.21.01l24.757-1.312c.108-.006.215-.023.32-.05.308-.084.587-.254.802-.489a1.76 1.76 0 0 0 .47-1.18L37 18.523c0-.245-.004-.486-.015-.73zM23.225 28.98c-5.18.277-9.356-3.82-9.33-9.155.028-5.335 4.246-9.87 9.425-10.148 5.18-.276 9.353 3.82 9.326 9.155-.027 5.335-4.247 9.875-9.422 10.15v-.002z"
                                       stroke="#6A6D75"
                                       stroke-width="1.774"
                                    ></path>
                                    <path
                                       d="m6.917 36.034-4.734-2.496A2.227 2.227 0 0 1 1 31.546l.08-15.064c0-.222 0-.455.02-.711l.013-.158v-.071c0-.158.023-.316.04-.475 0-.08.016-.16.027-.239V14.8c.017-.144.035-.29.058-.433.013-.091.028-.18.042-.272.025-.144.052-.29.082-.433v-.04c.012-.072.027-.143.044-.208.033-.158.07-.314.11-.47l.017-.067c0-.045.023-.091.034-.137.064-.24.127-.455.194-.664l.015-.045c.069-.208.138-.416.209-.606l.056-.143.027-.071c.055-.144.111-.285.17-.416.029-.071.06-.14.09-.208l.014-.032c.059-.13.117-.264.18-.393.037-.08.077-.16.115-.24.064-.13.133-.26.209-.386l.035-.065a4.27 4.27 0 0 1 .096-.179c.078-.143.16-.282.243-.416l.035-.06c.021-.037.042-.075.065-.11.126-.208.247-.396.368-.577l.065-.091c.104-.156.209-.314.328-.468l.094-.123.11-.146.13-.17.08-.096a3.52 3.52 0 0 1 .209-.243l.012-.017c.092-.11.172-.208.253-.298l.23-.251c.077-.084.18-.196.266-.285.085-.09.167-.171.253-.256l.263-.258.244-.236.082-.074.113-.104.062-.052.049-.042.209-.169c.108-.091.209-.18.332-.27l.209-.162c.118-.092.237-.181.357-.269l.057-.04.144-.103c.142-.1.288-.208.435-.296l.05-.031.086-.058.025-.015c.177-.116.365-.229.554-.339l.094-.054.07-.038c.143-.08.287-.162.435-.24l.176-.09.046-.023c.132-.069.265-.133.397-.196l.238-.112.053-.023.092-.044.158-.066.132-.054.228-.096c.134-.054.272-.104.407-.156l.078-.03.182-.066.476-.156.073-.023.132-.042c.236-.07.456-.133.673-.187h.025l.31-.07.208-.048.21-.048.275-.05.226-.04.255-.043c.08-.013.161-.021.242-.032l.251-.03.272-.034A14.362 14.362 0 0 1 16.897 1h.155c.268 0 .502 0 .727.02h.099c.209.013.432.032.648.055l.133.012c.23.027.462.059.694.096l.147.025c.221.038.418.077.627.12l.073.015c.209.048.432.102.67.167l.155.043c.237.067.45.132.65.209l.078.029c.196.066.388.137.58.208l.14.054c.21.083.419.17.607.26l.04.017.073.037h.017c.24.112.455.22.654.325a30.25 30.25 0 0 0-3.244.276l-.142-.04c-.21-.057-.418-.105-.596-.147l-.067-.012a12.19 12.19 0 0 0-.57-.11l-.134-.024c-.21-.03-.418-.06-.627-.083l-.126-.012c-.194-.021-.39-.038-.587-.048h-.09c-.209-.01-.418-.017-.644-.019h-.144c-.257 0-.464 0-.654.017-.23.012-.466.029-.702.052l-.224.029-.25.031-.21.027-.209.036-.242.043-.234.042-.172.037-.23.052a5.38 5.38 0 0 0-.263.06h-.023a13.01 13.01 0 0 0-.612.17l-.094.03-.09.03a10.08 10.08 0 0 0-.435.141l-.142.052-.092.035c-.123.046-.249.092-.37.14l-.192.081-.155.064-.125.052-.128.06-.221.099c-.122.058-.24.116-.36.179l-.209.104c-.13.068-.263.141-.395.208l-.152.087c-.166.096-.335.208-.502.306l-.14.094c-.136.087-.268.176-.4.268l-.106.077-.073.054-.326.241-.188.15-.285.256-.183.156-.103.088-.063.056-.092.087a8.49 8.49 0 0 0-.244.227l-.21.198-.039.04-.226.228a7.705 7.705 0 0 0-.219.235c-.071.08-.159.173-.23.254-.071.081-.146.17-.209.256-.063.085-.146.173-.209.254l-.073.09c-.031.039-.067.084-.1.132l-.122.156c-.025.036-.052.069-.075.104-.104.14-.209.283-.303.417l-.058.085a11.567 11.567 0 0 0-.379.6l-.042.07a12.1 12.1 0 0 0-.221.385l-.075.141-.032.059c-.062.118-.123.235-.182.353-.035.071-.07.144-.104.208-.056.119-.11.237-.163.358l-.013.031a5.463 5.463 0 0 0-.081.183 12.56 12.56 0 0 0-.155.39l-.03.074-.043.115c-.067.179-.127.358-.186.537l-.015.045c-.06.19-.117.385-.177.606 0 .031-.015.06-.023.092l-.021.091c-.038.144-.071.283-.103.416l-.03.158-.016.071a12.848 12.848 0 0 0-.165 1.028v.031c0 .069-.016.137-.023.208-.014.142-.025.285-.035.429v.206c-.013.23-.019.44-.021.64L2.518 31.53a.742.742 0 0 0 .397.674l3.952 2.108.05 1.722z"
                                       stroke="#6A6D75"
                                       stroke-width=".5"
                                       fill="#6A6D75"
                                       fill-rule="nonzero"
                                    ></path>
                                 </g>
                              </svg>
                           </Box>
                           <Box textAlign={"left"}>
                              <Text color={"#303236"} fontSize={"xl"}>
                                 Fast & Easy
                              </Text>
                              <Text color={"#6A6D75"} fontSize={"lg"}>
                                 Time-saving meals Quick Eat
                              </Text>
                           </Box>
                           {fast == true && (
                              <Box>
                                 <span style={{ fontSize: "35px" }}>
                                    <FcApproval />
                                 </span>
                              </Box>
                           )}
                        </Flex>
                     </Button>
                     <br />
                     <br />
                     <Button
                        width={["100%", "100%", "100%", "75%"]}
                        margin={"auto"}
                        paddingTop={"40px"}
                        colorScheme={"#FFFFFF"}
                        variant={"solid"}
                        border={
                           veggies == true
                              ? "2px solid #002C9B"
                              : "1px solid #6A6D75"
                        }
                        paddingBottom={"40px"}
                        _hover={{ border: "2px solid #002C9B" }}
                        onClick={() => setVeggies(!veggies)}
                     >
                        <Flex
                           justifyContent={"space-between"}
                           alignItems={"center"}
                           gap={["0px", "5px", "10px", "25px"]}
                        >
                           <Box textAlign={"left"}>
                              <svg height={44} width={39}>
                                 <g fill="none" fillRule="evenodd">
                                    <path
                                       d="M18.293 24.063a6.457 6.457 0 0 1 1.954-4.649 6.87 6.87 0 0 1 4.77-1.947m2.493-8.305c3.81.063 6.863 3.075 6.863 6.77 0 3.693-3.054 6.705-6.862 6.768m10.117 7.072c.307-.625.372-2.778.372-3.447H1c0 .669.075 2.445.332 3.45M17.874 43h3.235c8.165 0 14.974-5.686 16.543-13.175H1.332C2.902 37.31 9.712 43 17.874 43z"
                                       stroke="#6A6D75"
                                       stroke-width="1.536"
                                    ></path>
                                    <path
                                       d="M25.014 20.865a3.33 3.33 0 0 0-2.315.943 3.134 3.134 0 0 0-.947 2.255h3.258l.004-3.198zm2.535-8.287c1.82 0 3.296 1.43 3.296 3.195s-1.476 3.196-3.296 3.196v-6.391z"
                                       fill="#6A6D75"
                                       fill-rule="nonzero"
                                    ></path>
                                    <path
                                       d="M9.419 20.675h4.808l1.213-7.57a3.383 3.383 0 0 0-.833-2.75 3.61 3.61 0 0 0-2.687-1.193H8.726a3.61 3.61 0 0 0-2.69 1.19 3.383 3.383 0 0 0-.837 2.751l.172 1.623h3.676"
                                       stroke="#6A6D75"
                                       stroke-width="1.536"
                                       stroke-linecap="round"
                                    ></path>
                                    <path
                                       stroke="#6A6D75"
                                       stroke-width="1.536"
                                       stroke-linecap="round"
                                       d="m5.41 15.081 1.461 8.233h7.05l.326-2.618"
                                    ></path>
                                    <path
                                       d="m7.427 7.684 2.225.804c.08.029.17.018.24-.03a.25.25 0 0 0 .111-.21V5.297C9.86 3.97 9.03 2.805 7.802 2.204c-1.214-.588-2.022-.97-2.48-1.176a.343.343 0 0 0-.315.023.321.321 0 0 0-.153.269v2.784c.003 1.597 1.03 3.024 2.573 3.58z"
                                       stroke="#6A6D75"
                                       stroke-width="1.536"
                                    ></path>
                                    <path
                                       d="m11.065 8.492 1.532-.551c1.062-.382 1.767-1.364 1.767-2.463V3.567a.22.22 0 0 0-.108-.185.235.235 0 0 0-.22-.011c-.314.147-.866.408-1.701.813a2.689 2.689 0 0 0-1.513 2.122v2.023c0 .057.03.11.078.143.048.032.11.04.165.02z"
                                       stroke="#6A6D75"
                                       stroke-width="1.116"
                                    ></path>
                                 </g>
                              </svg>
                           </Box>
                           <Box textAlign={"left"}>
                              <Text color={"#303236"} fontSize={"xl"}>
                                 Veggies
                              </Text>
                              <Text color={"#6A6D75"} fontSize={"lg"}>
                                 delicious plan-based meals
                              </Text>
                           </Box>
                           {veggies == true && (
                              <Box>
                                 <span style={{ fontSize: "35px" }}>
                                    <FcApproval />
                                 </span>
                              </Box>
                           )}
                        </Flex>
                     </Button>
                     <br />
                     <br />
                     <Text
                        fontStyle={"italic"}
                        width={["100%", "100%", "100%", "75%"]}
                        margin={"auto"}
                     >
                        Choose as many preferences as you like. They'll help us
                        make recommendations just for you.
                     </Text>
                  </Box>
               </Box>
               <Box>
                  <Heading
                     fontSize={"2xl"}
                     fontFamily={"heading"}
                     color={"#303236"}
                  >
                     2. Select your plan
                  </Heading>
                  <Box
                     marginTop={["10px", "10px", "10px", "20px"]}
                     padding={["5px", "10px", "20px", "30px"]}
                  >
                     <Flex justifyContent={"space-between"}>
                        <Text
                           color={"#303236"}
                           fontSize={"xl"}
                           fontWeight={"bold"}
                        >
                           Number of servings
                        </Text>
                        <Box>
                           <Button
                              padding={"20px 40px"}
                              border={"1px solid #6A6D75"}
                              bgColor={serving == 2 ? "#002684" : "#FFFFFF"}
                              color={serving == 2 ? "#FFFFFF" : "#002684"}
                              variant={"solid"}
                              onClick={() => setServing(2)}
                           >
                              2
                           </Button>
                           <Button
                              padding={"20px 40px"}
                              border={"1px solid #6A6D75"}
                              bgColor={serving == 4 ? "#002684" : "#FFFFFF"}
                              color={serving == 4 ? "#FFFFFF" : "#002684"}
                              variant={"solid"}
                              onClick={() => setServing(4)}
                           >
                              4
                           </Button>
                        </Box>
                     </Flex>
                     <br />
                     <Flex justifyContent={"space-between"}>
                        <Text
                           color={"#303236"}
                           fontSize={"xl"}
                           fontWeight={"bold"}
                        >
                           Meals per week
                        </Text>
                        <Box>
                           <Button
                              padding={"20px 30px"}
                              border={"1px solid #6A6D75"}
                              bgColor={week == 2 ? "#002684" : "#FFFFFF"}
                              color={week == 2 ? "#FFFFFF" : "#002684"}
                              variant={"solid"}
                              onClick={() => setWeek(2)}
                           >
                              2
                           </Button>
                           <Button
                              padding={"20px 30px"}
                              border={"1px solid #6A6D75"}
                              bgColor={week == 3 ? "#002684" : "#FFFFFF"}
                              color={week == 3 ? "#FFFFFF" : "#002684"}
                              variant={"solid"}
                              onClick={() => setWeek(3)}
                           >
                              3
                           </Button>
                           <Button
                              padding={"20px 30px"}
                              border={"1px solid #6A6D75"}
                              bgColor={week == 4 ? "#002684" : "#FFFFFF"}
                              color={week == 4 ? "#FFFFFF" : "#002684"}
                              variant={"solid"}
                              onClick={() => setWeek(4)}
                           >
                              4
                           </Button>
                           <Button
                              padding={"20px 30px"}
                              border={"1px solid #6A6D75"}
                              bgColor={week == 5 ? "#002684" : "#FFFFFF"}
                              color={week == 5 ? "#FFFFFF" : "#002684"}
                              variant={"solid"}
                              onClick={() => setWeek(5)}
                           >
                              5
                           </Button>
                        </Box>
                     </Flex>
                     <br />
                     <br />
                     <Box>
                        <Heading
                           textAlign={"left"}
                           fontSize={"xl"}
                           fontFamily={"heading"}
                        >
                           Order Summary
                        </Heading>
                        <Flex
                           justifyContent={"space-between"}
                           alignItems={"center"}
                        >
                           <Text
                              fontSize={"lg"}
                              fontFamily={"heading"}
                              color={"#6A6D75"}
                              marginTop={"5px"}
                           >
                              Price per serving
                           </Text>
                           <Text
                              fontSize={"lg"}
                              fontFamily={"heading"}
                              fontWeight={"bold"}
                              marginTop={"5px"}
                           >
                              ${" "}
                              {cartProduct
                                 ? (
                                      week +
                                      serving +
                                      cartProduct?.price
                                   ).toFixed(2)
                                 : (week + serving).toFixed(2)}
                           </Text>
                        </Flex>
                        <Flex
                           justifyContent={"space-between"}
                           alignItems={"center"}
                        >
                           <Text
                              fontSize={"lg"}
                              fontFamily={"heading"}
                              color={"#6A6D75"}
                              marginTop={"5px"}
                           >
                              Shipping
                           </Text>
                           <Text
                              fontSize={"lg"}
                              fontFamily={"heading"}
                              fontWeight={"bold"}
                              marginTop={"5px"}
                           >
                              $ 9.99
                           </Text>
                        </Flex>
                        <Flex
                           justifyContent={"space-between"}
                           alignItems={"center"}
                        >
                           <Text
                              fontSize={"lg"}
                              fontFamily={"heading"}
                              marginTop={"15px"}
                              fontWeight={"bold"}
                           >
                              First order subtotal
                           </Text>
                           <Text
                              fontSize={"lg"}
                              fontFamily={"heading"}
                              fontWeight={"bold"}
                              marginTop={"15px"}
                           >
                              ${" "}
                              {(
                                 week +
                                 serving +
                                 (cartProduct ? cartProduct?.price : 0) +
                                 9.99
                              ).toFixed(2)}
                           </Text>
                        </Flex>
                        <br />
                        <br />
                        <br />
                        <Button
                           colorScheme="green"
                           variant={"solid"}
                           padding={[
                              "10px 25px",
                              "15px 25px",
                              "20px 30px",
                              "25px 50px",
                           ]}
                           borderRadius={"50px"}
                           onClick={handleDeleteAll}
                           isDisabled={!cartProduct}
                        >
                           CONTINUE
                        </Button>
                        <br />
                        <br />
                        <Box
                           width={["90%", "80%", "75%", "70%"]}
                           margin={"auto"}
                        >
                           <Text
                              fontSize={"lg"}
                              fontFamily={"heading"}
                              color={"#6A6D75"}
                           >
                              You can update your preferences and skip, pause,
                              or cancel at any time.
                           </Text>
                        </Box>
                     </Box>
                  </Box>
               </Box>
            </SimpleGrid>
            <br />
            <br />
            <Box width={["90%", "90%", "85%", "75%"]} margin={"auto"}>
               <Heading color={"#002684"} fontFamily={"serif"} fontSize={"3xl"}>
                  Choose from 70+ weekly options
               </Heading>
               <Text
                  fontSize={"lg"}
                  fontFamily={"heading"}
                  color={"#6A6D75"}
                  marginTop={"5px"}
               >
                  We have meal kits to fit many different diets and lifestyles.
               </Text>
               <br />
               <br />
               <SimpleGrid columns={[2, 3, 4, 6]}>
                  <Box>
                     <Image src="https://media.blueapron.com/pricing/2/cheffavorites.webp" />
                     <Text
                        fontSize={"lg"}
                        fontFamily={"heading"}
                        color={"#6A6D75"}
                        marginTop={"5px"}
                     >
                        Chef Favorites
                     </Text>
                  </Box>
                  <Box>
                     <Image src="https://media.blueapron.com/pricing/2/wellness.webp" />
                     <Text
                        fontSize={"lg"}
                        fontFamily={"heading"}
                        color={"#6A6D75"}
                        marginTop={"5px"}
                     >
                        Wellness
                     </Text>
                  </Box>
                  <Box>
                     <Image src="https://media.blueapron.com/pricing/2/familyfriendly.webp" />
                     <Text
                        fontSize={"lg"}
                        fontFamily={"heading"}
                        color={"#6A6D75"}
                        marginTop={"5px"}
                     >
                        Family Friendly
                     </Text>
                  </Box>
                  <Box>
                     <Image src="https://media.blueapron.com/pricing/2/fasteasy.webp" />
                     <Text
                        fontSize={"lg"}
                        fontFamily={"heading"}
                        color={"#6A6D75"}
                        marginTop={"5px"}
                     >
                        Fast & Easy
                     </Text>
                  </Box>
                  <Box>
                     <Image src="https://media.blueapron.com/pricing/2/veggies.webp" />
                     <Text
                        fontSize={"lg"}
                        fontFamily={"heading"}
                        color={"#6A6D75"}
                        marginTop={"5px"}
                     >
                        Veggies
                     </Text>
                  </Box>
                  <Box>
                     <Image src="https://media.blueapron.com/pricing/2/seafood.webp" />
                     <Text
                        fontSize={"lg"}
                        fontFamily={"heading"}
                        color={"#6A6D75"}
                        marginTop={"5px"}
                     >
                        Seafood
                     </Text>
                  </Box>
               </SimpleGrid>
            </Box>
         </Box>
         <br />
         <br />
         <Footer />
      </Box>
   );
}
export default Pricing;
