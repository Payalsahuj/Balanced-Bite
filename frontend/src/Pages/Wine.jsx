import React from "react";
import Favorites from "../images/Favorites.webp";
import truck from "../images/truck.png";
import glass from "../images/glass.png";
import grapes from "../images/grapes.png";
import dinnerTime from "../images/dinnerTime.webp";
import beef from "../images/CALABRIAN_BEEF.webp";
import monthly from "../images/monthly-delivery-desktop.webp";
import process from "../images/process.png";
import park from "../images/pork_chorizo.webp";
import grenache from "../images/grenache.webp";
import hoisin from "../images/HOISIN-GLAZED_PORK_CHOPS.webp";
import sheet from "../images/SHEET_PAN_PORK.webp";
import raise from "../images/raise-a-glass-footer-desktop.webp";
import styles from '../Allcss/wine.module.css'
const Wine = () => {
   return (
      <div className={styles.main}>
         <h1>Wine Shop</h1>
        
         <div>
            <img src={dinnerTime} alt="wine" />
            <div
            className={styles.overlay}
               style={{
                  // position: "absolute",
                  // top: "50%",
                  // left: "70%",
                  // textAlign: "center",
                  // transform: "translate(-50%, -50%)",
                  
               }}
            >
               <p
                  style={{
                     color: "#002684",
                     fontWeight: 900,
                     fontFamily: "Chronicle Deck",
                     fontSize: "2.8em",
                  }}
               >
                  Discover <br /> Dinnertime Pairings
               </p>
               <p
                  style={{
                     color: "#00a0df",
                     fontWeight: 500,
                     fontSize: "1.5em",
                     lineHeight: 1.35,
                  }}
               >
                  (and get all the juicy details)
               </p>
               <button
                  
               >
                  GET STARTED
               </button>
            </div>
         </div>
         <div
            style={{ textAlign: "center", margin: "20px", padding: "5px 50px" }}
         >
            <h1>How It Works</h1>
            <div className={styles.flex} >
               <div className={styles.fleximg}>
                  <img src={grapes} alt="grapes" /> <h3>INCREDIBLE WINES</h3>
                  <p>
                     Get exclusive access to delicious wines from renowned
                     winemakers.
                  </p>
               </div>
               <div className={styles.fleximg}>
                  <img src={truck} alt="truck" /> <h3>MONTHLY DELIVERY</h3>
                  <p>
                     Select the wines you love. No commitment. Skipping or
                     canceling is easy.
                  </p>
               </div>
               <div className={styles.fleximg}>
                  <img src={glass} alt="glass" /> <h3>SIZED FOR TWO</h3>
                  <p>
                     Enjoy pairing-sized wines (500ml), perfect for two to
                     share, or upgrade to standard-sized bottles (750ml).
                  </p>
               </div>
            </div>
         </div>
         <div>
            <img  src={monthly} alt="wine" />
            <div
            className={styles.monthly}
         
            >
               <p
                  style={{
                     fontWeight: 900,
                     fontFamily: "Chronicle Deck",
                     fontSize: "2.8em",
                  }}
               >
                  Inside Your Monthly Delivery
               </p>
               <div
                  style={{
                     width: "90%",
                     textAlign: "left",
                     fontWeight: "bold",
                  }}
               >
                  <ul>
                     <li>
                        6 x 500 mL wines or upgrade to standard-sized 750 mL
                        bottles!
                     </li>
                     <br />
                     <li>
                        Select all reds, all whites, or mix and match your
                        favorites!
                     </li>
                     <br />
                     <li>
                        We'll include tasting notes, pairing tips, plus stories
                        behind the wines.
                     </li>
                  </ul>
               </div>
               <p
                  style={{
                     color: "#00a0df",
                     fontWeight: 500,
                     fontSize: "1.5em",
                     lineHeight: "0",
                  }}
               >
                  Starting at $11 per bottle
               </p>
               <p>
                  $75.99/month, incl. shipping* <br />
                  <span>*tax applied at checkout</span>
               </p>
               <button
                 
               >
                  GET STARTED
               </button>
            </div>
         </div>
         <div
            style={{
               textAlign: "center",
               margin: "20px auto",
               maxWidth: "800px",
            }}
         >
            <h2>From Our Vineyard to Your Doorstep</h2>
            <p>
               By cutting out the middleman, we’re able to offer you
               high-quality wines at great prices.
            </p>
            <img style={{ width: "100%" }} src={process} alt="Making Process" />
         </div>
       
         <div>
            <img width={"100%"} src={Favorites} alt="Discover your favorites" />
            <div
               style={{
                  position: "absolute",
                  //   top: "50%",
                  left: "35%",
                  right: "35%",
                  //   fontWeight:"1.5rem",
                  color: "white",
                  //   width:"20px",
                  textAlign: "left",
                  transform: "translate(-30%, -290%)",
                  // padding: "10px",
               }}
            >
               <h2>Discover Your Favorites</h2>
               <p>
                  Don’t know your Pinot Noir from your Pinotage? Our wines come
                  with tasting notes, flavor profiles, and the story behind the
                  bottle to give you the confidence to select the right wine for
                  any occasion – and inspire a lifelong love of wine.
               </p>
            </div>
         </div>
         <div>
            <div style={{ textAlign: "center", width: "30%", margin: "auto" }}>
               <h1>Elevate Every Meal With The Perfect Pairing</h1>
               <p>
                  Our wines are specially chosen to complement your Blue Apron
                  recipes, so all you have to do is uncork, pour and enjoy.
               </p>
            </div>
            <div style={{ display: "flex",padding:"45px" }}>
               <div>
                  <div>
                     <img
                        width={"50%"}
                        src={beef}
                        alt="CALABRIAN BEEF & GNOCCHI"
                     />
                     <h2>CALABRIAN BEEF & GNOCCHI</h2>
                     <p>
                        Complement the richness of this hearty beef & gnocchi
                        dish with a warming, spicy grenache.
                     </p>
                  </div>
                  <div>
                     <img
                        width={"50%"}
                        src={park}
                        alt="PORK CHORIZO, POTATO & FIG BAKE"
                     />
                     <h2>PORK CHORIZO, POTATO & FIG BAKE</h2>
                     <p>
                        Complement the peppery flavors of the chorizo with the
                        notes of baking spices in this wine.
                     </p>
                  </div>
               </div>
               <div style={{margin:"auto"}}>
                  <img  src={grenache} alt="grenache" />
               </div>
               <div>
                  <div>
                     <img width={"50%"} src={hoisin} alt="" />
                     <h2>HOISIN-GLAZED PORK CHOPS</h2>
                     <p>
                        Amplify the umami-rich sweetness of the soy glaze with a
                        fruit-forward red.
                     </p>
                  </div>
                  <div>
                     <img
                        width={"50%"}
                        src={sheet}
                        alt="SHEET PAN PORK & SOUR CHERRY SAUCE"
                     />
                     <h2>SHEET PAN PORK & SOUR CHERRY SAUCE</h2>
                     <p>
                        Notes of stone fruit in this grenache bring out the
                        cherry flavors in this sauce.
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div>
            <img width={"100%"} src={raise} alt="raise a glass" />
            <div   style={{
                  position: "absolute",
                  //   top: "50%",
                  borderRadius: "20px",
                  left: "70%",
                  textAlign: "center",
                  transform: "translate(-120%, -200%)",
                  // backgroundColor: "rgb(236, 240, 241)",
                  padding: " 10px 40px",
                  color:"white"
               }}>
               <h1>Let's Raise A Glasss</h1>
               <button>Try Our Wine</button>
            </div>
         </div>
      </div>
   );
};

export default Wine;
