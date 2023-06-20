import { Box } from "@chakra-ui/react";
import Chart from "react-google-charts";



function Scatterchart() {
  return (

<Box >
<Chart
  chartType="ScatterChart"
  data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
  width="100%"
  height="400px"
  legendToggle
/></Box>
  );
}

export default Scatterchart;
