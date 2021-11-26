import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart({ dataPoints }) {
  console.log(dataPoints);
  const totalMaximum = Math.max(...dataPoints.map(({ value }) => value));
  console.log(totalMaximum);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint, index) => {
        return (
          <ChartBar key={index} dataPoint={dataPoint} maxValue={totalMaximum} />
        );
      })}
    </div>
  );
}

export default Chart;
