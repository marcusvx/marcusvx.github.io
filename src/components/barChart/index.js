import style from './style.less';
import { createRef } from 'preact';
import { useEffect } from 'preact/hooks';

const BarChart = (props) => {
    const { value, label } = props;
    const numberRef = createRef();
    useEffect(() => {
        numberRef.current.style.width = value + '%';
    }, [value]);

    return (
        <div class={style.barGroup} data-max="100">
            <p class={style.barLabel}>{label}</p>
            <div
                ref={numberRef}
                class={style.barGroupBar + ' ' + style.thick + ' ' + style.elastic}
                style={{ width: 0 }}
            >
            </div>
        </div>
    );
};

export default BarChart;
