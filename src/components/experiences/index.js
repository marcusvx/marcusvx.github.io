import style from "./style";
import { useEffect, useState } from "preact/hooks";
import axios from "axios";

const Experiences = () => {
  const [experiences, setExperiences] = useState();

  useEffect(() => {
    axios
      .get("../../assets/json/experiences.json")
      .then((response) => setExperiences(response.data));
  }, []);
  return (
    <div class={style.experiences + " center section"} id="experiences">
      <div class="container">
        <div class="row">
          <div class="col-sm-8 col-sm-offset-2">
            <div
              class="sec-title"
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-duration="500"
            >
              <h2 class="main-heading">work experiences</h2>
              <div class="heading-line"></div>
              <p class="main-para">
                A short summary of my professional experience
              </p>
            </div>
          </div>
        </div>
        <div
          class={style.timeline}
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-duration="500"
        >
          {experiences &&
            experiences.map((item, index) => {
              const side = index % 2 === 0 ? style.left : style.right;
              return (
                <div
                  class={style.timelineBlock + " clearfix"}
                  data-aos="fade-left"
                  data-aos-duration="0.5s"
                  data-aos-offset="200"
                >
                  <div class={style.icon}>
                    <i class="fa fa-briefcase"></i>
                  </div>
                  <div class={style.content + " round-corners " + side}>
                    <h3>{item.company}</h3>
                    <span class={style.duration}>
                      {item.start} : {item.end || "Actual"}
                    </span>
                    <span class={style.jobTitle}>{item.title}</span>
                    {item.description.map((desc) => (
                      <p>{desc}</p>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
