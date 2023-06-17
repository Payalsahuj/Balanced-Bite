import React from "react";
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";



export const options = {
  title: "Product Details Chart",
};

export function Piechart() {
    const store=useSelector(store=> store.adminReducer)
    let count1=0
    let count2=0
    let count3=0
    
    for(let x=0;x<store.product.length;x++){
        
        if(store.product[x].category==="wellness"){
            count1++
        }
        else if(store.product[x].category==="signature"){
            count2++
        }
        else{
            count3++
        }
    }

    const data = [
        ["Stock", "Hours per Day"],
        ["Wellness", count1],
        ["Signature", count2],
        ["Vegetarian", count3],
        ["Suppliers", 9],
        ["Products",store.product.length]
      ];
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
