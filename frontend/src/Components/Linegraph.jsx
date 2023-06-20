
import { Chart } from "react-google-charts";

export const data = [
  ["x", "wellness","signature", "vegetarian"],
  [0, 0, 0, 0],
  [1, 10, 5, 7],
  [2, 23, 15,12],
  [3, 17, 9,7],
  [4, 18, 10,7],
  [5, 9, 5,9],
  [6, 11, 3,15],
  [7, 27, 19,18],
];

export const options = {
  hAxis: {
    title: "Time",
  },
  vAxis: {
    title: "Popularity",
  },
  series: {
    1: { curveType: "function" },
  }
};


export function Linechart() {
  
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
      style={{borderRadius:'7px'}}
    />
  );
}
