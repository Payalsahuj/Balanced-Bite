import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 300],
  ["India", 600],
  ["Canada", 500],
  ["France", 200],
  ["RU", 100],
];

export function AdminNetwork() {
    // const [data,setdata]=useState([])
    // function getdata(){

    //     axios.get("https://frail-toad-sunglasses.cyclic.app/order",{
    //         headers:{
    //             Authorization:localStorage.getItem("token")
    //         }
    //     })
    //     .then((res)=>{
    //         console.log(res.data)
    //         setdata(res.data)
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }
    // useEffect(()=>{
    //     getdata()
    // },[])


  return (
    <Chart
    chartEvents={[
      {
        eventName: "select",
        callback: ({ chartWrapper }) => {
          const chart = chartWrapper.getChart();
          const selection = chart.getSelection();
          if (selection.length === 0) return;
          const region = data[selection[0].row + 1];
          console.log("Selected : " + region);
        },
      },
    ]}
    chartType="GeoChart"
    width="100%"
    height="400px"
    data={data}
  />
  );
}
