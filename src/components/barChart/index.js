import style from "./style";
import { createRef } from "preact";
import { useEffect } from "preact/hooks";

const BarChart = (props) => {
  const { value, label } = props;
  const numberRef = createRef();
  useEffect(() => {
    numberRef.current.style.width = value + "%";
  }, [value]);

  return (
    <div class={style.barGroup + " col-md-6 col-xs-12"} data-max="100">
      <p class={style.barLabel}>{label}</p>
      <div
        ref={numberRef}
        class={style.barGroupBar + " " + style.thick + " " + style.elastic}
        style={{ width: 0 }}
      >
        <div class={style.barTooltip}>
          <span>{value}</span>
          <div class={style.barTooltipTri}></div>
        </div>
        <p class={style.barLabelMin}>0%</p>
        <p class={style.barLabelMax}>100%</p>
      </div>
    </div>
  );
};

export default BarChart;
