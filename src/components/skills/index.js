import style from "./style";
import PieChart from "../pieChart";
import BarChart from "../barChart";
import SectionHeader from "../sectionHeader";
import handleViewport from "react-in-viewport";
import { useState } from "preact/hooks";
import axios from "axios";
import classNames from "classnames";

const ViewPortSkills = (props) => {
  const { enterCount, forwardedRef, pieValues, barValues } = props;
  return (
    <section class={style.technicalSkills} id="skills" ref={forwardedRef}>
      <div class={style.container}>
        <SectionHeader
          title="Technical Skills"
          subTitle="Here you can find a short summary of my techinical skills."
          darkBg="true"
        />

        <div class={style.skillsWrapper}>
          {enterCount >= 1 && pieValues ? (
            <>
              {pieValues.map((item) => (
                <div class={style.skill}>
                  <PieChart percent={item.value} title={item.label} />
                </div>
              ))}
            </>
          ) : null}
        </div>

        <div class={style.otherSkills}>
          <SectionHeader
            title="Other Skills"
            subTitle="Languages, technologies and pratices of my preference."
            darkBg="true"
          />

          <div class={style.skillsWrapper}>
            {enterCount >= 1 && barValues ? (
              <>
                {barValues.map((item) => (
                  <BarChart value={item.value} label={item.label} />
                ))}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
const ViewportBlock = handleViewport(ViewPortSkills, null, {
  disconnectOnLeave: true,
});

const Skills = () => {
  const [pieValues, setPieValues] = useState();
  const [barValues, setBarValues] = useState();

  const setValues = () => {
    axios
      .get("../../assets/json/abilities.json")
      .then((response) => setBarValues(response.data));

    axios
      .get("../../assets/json/tech-skills.json")
      .then((response) => setPieValues(response.data));
  };

  return (
    <ViewportBlock
      pieValues={pieValues}
      barValues={barValues}
      onEnterViewport={setValues}
    ></ViewportBlock>
  );
};

export default Skills;
