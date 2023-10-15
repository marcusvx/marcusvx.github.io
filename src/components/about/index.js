import style from './style.less';
import photo from '../../assets/img/photo.jpg';
import Accordion from '../accordion';
import SectionHeader from '../sectionHeader';

export default function About() {
  return (
    <section className={style.aboutMe} id="about_me">
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.myPic}>
            <img src={photo} alt="my profile" />
          </div>
          <div className={style.introduction}>
            <SectionHeader title="Marcus Vinicius Ximenes" />

            <p>
              I am a seasoned software developer with over 15 years of experience, well-versed in the entire product
              development lifecycle, from concept to launch.
            </p>
            <p>
              I am passionate about writing clean code, adhering to SOLID principles, and practicing Test-Driven
              Development (TDD)
            </p>
            <p>
              My expertise spans a variety of technologies, including .NET Core, Java, Node.js, Typescript, GraphQL,
              Angular (4+), React, and vanilla JavaScript
            </p>
            <p>
              Additionally, I have experience as a technical leader, guiding architectural decisions, delegating tasks,
              and fostering knowledge-sharing within development teams.
            </p>
          </div>
        </div>
        <div className={style.row}>
          <div className={style.profile}>
            <SectionHeader title="Reach Me" />
            <div className={style.personalWrapper}>
              <span>
                <a
                  className={style.socialLink}
                  href="https://www.linkedin.com/in/marcusvx/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-linkedin-in" />
                  <span>Linkedin</span>
                </a>
              </span>
              <span>
                <a
                  className={style.socialLink}
                  href="https://stackoverflow.com/users/1720847/marcus-vinicius"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-stack-overflow" />
                  <span>StackOverflow</span>
                </a>
              </span>
              <span>
                <a className={style.socialLink} href="https://github.com/marcusvx" target="_blank" rel="noreferrer">
                  <i className="fab fa-github" />
                  <span>Github</span>
                </a>
              </span>
              <span>
                <a className={style.socialLink} href="https://twitter.com/mavixbr" target="_blank" rel="noreferrer">
                  <i className="fab fa-twitter" />
                  <span>Twitter</span>
                </a>
              </span>
            </div>
          </div>

          <div className={style.whyMe + ' col-sm-8 col-xs-12'}>
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
}
