import style from "./style";
import photo from "../../assets/img/photo.jpg";
import Accordion from "../accordion";

const About = () => {
  return (
    <div class={style.aboutMe + " clearfix section"} id="about_me">
      <div class="container">
        <div class="row">
          <div
            class={style.myPic + " center col-sm-4 col-xs-12"}
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-duration="500"
          >
            <img src={photo} alt="my profile" />
          </div>
          <div
            class={style.introduction + " col-sm-8 col-xs-12"}
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-duration="500"
          >
            <h2 class="main-heading">Marcus Vinicius Ximenes</h2>
            <div class="heading-line"></div>
            <p class={style.introduce}>Developer</p>
            <p class="intro">
              <p>
                Professional software developer with 11+ years experience
                participating in the complete product development lifecycle of
                successfully launched applications of different sizes and
                complexities. Passionate about software architecture, clean
                code, TDD and cloud computing.
              </p>
              <p>
                As a backend developer, technologies most used includes .Net
                Core, Java and Node.js.
              </p>
              <p>
                As frontend developer, most used technologies includes Angular
                4+, React and vanilla Javascript .
              </p>
              <p>
                Some minor experience in mobile development for native Android
                and hybrid development using Ionic.
              </p>
              <p>
                Experience with technical leading, always willing to share
                knowledge and providing help by being technical reference among
                other developers.
              </p>
            </p>
          </div>
        </div>
        <div class="row">
          <div
            class={style.profile + " col-sm-4 col-xs-12"}
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-duration="500"
          >
            <h3 class="main-heading">reach me</h3>
            <div class="heading-line"></div>
            <div class={style.personalWrapper}>
              <span>
                <a
                  class={style.socialLink}
                  href="https://www.linkedin.com/in/marcusvx/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin-in"></i>
                  <span>Linkedin</span>
                </a>
              </span>
              <span>
                <a
                  class={style.socialLink}
                  href="https://stackoverflow.com/users/1720847/marcus-vinicius"
                  target="_blank"
                >
                  <i class="fab fa-stack-overflow"></i>
                  <span>StackOverflow</span>
                </a>
              </span>
              <span>
                <a
                  class={style.socialLink}
                  href="https://github.com/marcusvx"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                  <span>Github</span>
                </a>
              </span>
              <span>
                <a
                  class={style.socialLink}
                  href="https://twitter.com/mavixbr"
                  target="_blank"
                >
                  <i class="fab fa-twitter"></i>
                  <span>Twitter</span>
                </a>
              </span>
            </div>
          </div>

          <div
            class={style.whyMe + " col-sm-8 col-xs-12"}
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-duration="500"
          >
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
