import { createRef } from "preact";
import { useEffect, useState } from "preact/hooks";
import EasyPieChart from "easy-pie-chart/dist/easypiechart";
import { CountUp } from "countup.js";
import style from "./style";

const PieChart = (props) => {
  const { percent, title } = props;
  const chartRef = createRef();
  const [observer, setObserver] = useState();

  const callback = (entries, observer) => {
    const entry = entries[0] || {};
    const { isIntersecting, intersectionRatio } = entry;
    const isInViewport =
      typeof isIntersecting !== "undefined"
        ? isIntersecting
        : intersectionRatio > 0;

    if (isInViewport) {
      EasyPieChart(entry.target, {
        barColor: "#eaeaea",
        trackColor: false,
        scaleColor: false,
        lineWidth: 10,
        lineCap: "round",
        size: 150,
        animate: 1500,
      });

      const numberRef = entry.target.children[0].children[0];
      new CountUp(numberRef, percent).start();

      observer.unobserve(entry.target);
      observer.disconnect();
    }
  };

  useEffect(() => {
    if (!observer) {
      const obs = new IntersectionObserver(callback, {
        rootMargin: "10px",
        threshold: 0.9,
      });

      setObserver(obs);

      obs.observe(chartRef.current);
    }
  }, [percent, title, chartRef.current]);

  return (
    <>
      <div
        class={style.chart}
        ref={chartRef}
        data-percent={percent}
      >
        <span>
          <span>0</span> %
        </span>
      </div>
      <h2>{title}</h2>
    </>
  );
};

export default PieChart;
