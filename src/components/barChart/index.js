import style from './style.scss';
import { createRef } from 'preact';
import { useEffect } from 'preact/hooks';

const BarChart = props => {
  const { value, label } = props;
  const numberRef = createRef();
  useEffect(() => {
    numberRef.current.style.width = value + '%';
  }, [value]);

  return (
    <div className={style.barGroup} data-max="100">
      <p className={style.barLabel}>{label}</p>
      <div
        ref={numberRef}
        className={style.barGroupBar + ' ' + style.thick + ' ' + style.elastic}
        style={{ width: 0 }}
      />
    </div>
  );
};

export default BarChart;
