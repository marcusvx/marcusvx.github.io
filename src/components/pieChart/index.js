import { createRef } from "preact";
import { useEffect, useState } from "preact/hooks";
import EasyPieChart from "easy-pie-chart/dist/easypiechart";
import { CountUp } from "countup.js";
import style from "./style";

const PieChart = (props) => {
  const { percent, title } = props;
  const chartRef = createRef();
  const numberRef = createRef();

  useEffect(() => {
    EasyPieChart(chartRef.current, {
      barColor: "#eaeaea",
      trackColor: false,
      scaleColor: false,
      lineWidth: 10,
      lineCap: "round",
      size: 150,
      animate: 1500,
    });

    new CountUp(numberRef.current, percent).start();
  }, [percent, title, chartRef.current, numberRef.current]);

  return (
    <>
      <div class={style.chart} ref={chartRef} data-percent={percent}>
        <span>
          <span ref={numberRef}></span> %
        </span>
      </div>
      <h2>{title}</h2>
    </>
  );
};

export default PieChart;
