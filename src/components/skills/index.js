import style from "./style";
import PieChart from "../pieChart";
import BarChart from "../barChart";
import handleViewport from "react-in-viewport";
import { useState } from "preact/hooks";
import axios from "axios";

const ViewPortSkills = (props) => {
  const { enterCount, forwardedRef, pieValues, barValues } = props;
  return (
    <div
      class={style.technicalSkills + " center section has-pattern"}
      id="skills"
      ref={forwardedRef}
    >
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <div class="sec-title">
              <h2 class="main-heading">technical skills</h2>
              <div class={style.headingLine}></div>
              <p class={style.title}>
                Here you can find a short summary of my techinical skills.
              </p>
            </div>
          </div>
        </div>

        <div class={style.skillsWrapper + " row"}>
          {enterCount >= 1 && pieValues ? (
            <>
              {pieValues.map((item) => (
                <div class={style.skill + " col-md-3 col-sm-6"}>
                  <PieChart percent={item.value} title={item.label} />
                </div>
              ))}
            </>
          ) : null}
        </div>

        <div class={style.otherSkills}>
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
              <h2 class="main-heading">other skills</h2>
              <div class="heading-line"></div>
              <p class={style.title}>
                Languages, technologies and pratices of my preference
              </p>
            </div>
          </div>

          <div class={style.skillsWrapper + " row"}>
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
    </div>
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
