import style from './style.less';
import photo from '../../assets/img/photo.jpg';
import Accordion from '../accordion';
import SectionHeader from '../sectionHeader';

const About = () => {
    return (
        <section class={style.aboutMe} id="about_me">
            <div class={style.container}>
                <div class={style.row}>
                    <div
                        class={style.myPic}
                        data-aos="fade-in"
                        data-aos-offset="200"
                        data-aos-duration="500"
                    >
                        <img src={photo} alt="my profile"/>
                    </div>
                    <div
                        class={style.introduction}
                        data-aos="fade-in"
                        data-aos-offset="200"
                        data-aos-duration="500"
                    >
                        <SectionHeader title="Marcus Vinicius Ximenes"/>

                        <p>
                            I am a seasoned software developer with over 15 years of experience, well-versed in the
                            entire product development lifecycle, from concept to launch.
                        </p>
                        <p>
                            I am passionate about writing
                            clean code, adhering to SOLID principles, and practicing Test-Driven Development (TDD)
                        </p>
                        <p>
                            My expertise spans a variety of technologies, including .NET Core, Java, Node.js,
                            Typescript, GraphQL, Angular (4+), React, and vanilla JavaScript
                        </p>
                        <p>
                            Additionally, I have experience as a technical leader, guiding architectural decisions,
                            delegating tasks, and
                            fostering knowledge-sharing within development teams.
                        </p>

                    </div>
                </div>
                <div class={style.row}>
                    <div
                        class={style.profile}
                        data-aos="fade-in"
                        data-aos-offset="200"
                        data-aos-duration="500"
                    >
                        <SectionHeader title="Reach Me"/>
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
                        class={style.whyMe + ' col-sm-8 col-xs-12'}
                        data-aos="fade-in"
                        data-aos-offset="200"
                        data-aos-duration="500"
                    >
                        <Accordion/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
