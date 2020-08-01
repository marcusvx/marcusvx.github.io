import style from "./style";
import axios from "axios";
import AOS from "aos";
import { Component } from "preact";
import classNames from "classnames";
import SectionHeader from "../sectionHeader";

class Experiences extends Component {
  constructor() {
    super();
    this.state = {
      experiences: [],
    };
  }

  componentDidMount() {
    axios
      .get("../../assets/json/experiences.json")
      .then((response) => this.setState({ experiences: response.data }));
  }

  componentDidUpdate() {
    AOS.refreshHard();
  }

  render() {
    return (
      <section class={style.experiences} id="experiences">
        <div class={style.container}>
          <SectionHeader
            title="Work Experiences"
            subTitle="A short summary of my professional experience"
          />

          <div class={style.timeline}>
            {this.state.experiences.length &&
              this.state.experiences.map((item, index) => {
                return (
                  <div
                    class={style.timelineBlock}
                    data-aos="zoom-in"
                    data-aos-duration="400"
                    data-aos-offset="200"
                  >
                    <div class={style.icon}>
                      <i class="fa fa-briefcase"></i>
                    </div>
                    <div class={style.content}>
                      <h3>{item.company}</h3>
                      <span class={style.duration}>
                        [{item.start} : {item.end || "Actual"}]
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
      </section>
    );
  }
}

export default Experiences;
