import React from "react";

import { useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


export function Piechart() {
  const options = {
    title: {
      display: true,
      text: 'Stock data Pie Chart',
    },
    responsive: true,
      maintainAspectRatio: false, 
  };
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
    const label=["Wellness","Signature","Vegetarian","Suppliers","Total Stock"]
    const dataneed=[count1,count2,count3,9,store.product.length]

  const data = {
      labels: label,
      datasets: [
        {
          label: "Products",
          data: dataneed,
          backgroundColor: [
            'rgba(196, 6, 48, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
  return (
    <div style={{padding:'20px',height:"450px",width:"100%",display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
    <Pie options={options} width={'100%'} data={data} />

    </div>
  );
}
