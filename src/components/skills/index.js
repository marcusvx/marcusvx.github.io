import style from "./style";
import PieChart from "../pieChart";
import BarChart from "../barChart";
import handleViewport from "react-in-viewport";

const ViewPortSkills = (props) => {
  const { inViewport, forwardedRef } = props;
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
          <div class={style.skill + " col-md-3 col-sm-6"}>
            <PieChart percent={95} title="C#/.Net" />
          </div>
          <div class={style.skill + " col-md-3 col-sm-6"}>
            <PieChart percent={90} title="Javascript" />
          </div>
          <div class={style.skill + " col-md-3 col-sm-6"}>
            <PieChart percent={80} title="Java" />
          </div>
          <div class={style.skill + " col-md-3 col-sm-6"}>
            <PieChart percent={92} title="SQL" />
          </div>
        </div>

        <div class={style.otherKkills}>
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
            <BarChart value={85} label="SOLID Principle" />
            <BarChart value={80} label="Domain Driven Design" />
            <BarChart value={75} label="Kotlin" />
            <BarChart value={65} label="TDD" />
            <BarChart value={70} label="React" />
            <BarChart value={80} label="Agile Principles" />
            <BarChart value={55} label="CI/CD" />
            <BarChart value={90} label="Angular" />
          </div>
        </div>
      </div>
    </div>
  );
};
const ViewportBlock = handleViewport(ViewPortSkills /** options: {}, config: {} **/);

const Skills = () => {
  return (
    <ViewportBlock
      onEnterViewport={() => console.log("enter")}
      onLeaveViewport={() => console.log("leave")}
    ></ViewportBlock>
  );
};

export default Skills;
