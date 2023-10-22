import style from './style.scss';
import photo from '../../assets/img/photo.jpg';
import Accordion from '../accordion';
import SectionHeader from '../sectionHeader';
import classNames from 'classnames';
import { Text } from 'preact-i18n';

export default function About() {
  return (
    <section className={style.aboutMe} id="about_me">
      <div className={style.container}>
        <div className={classNames(style.column, style.oneThird)}>
          <div className={style.picture}>
            <img src={photo} alt="A picture of my face" />
          </div>
          <div className={style.profile}>
            <SectionHeader>
              <SectionHeader.Title>
                <Text id="about.links_title"></Text>
              </SectionHeader.Title>
            </SectionHeader>
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
                  <i className="fab fa-x-twitter" />
                  <span>Twitter</span>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className={style.column}>
          <div className={style.introduction}>
            <SectionHeader>
              <SectionHeader.Title>Marcus Vinicius Ximenes</SectionHeader.Title>
            </SectionHeader>
            <p>
              <Text id="about.p1"></Text>
            </p>
            <p>
              <Text id="about.p2"></Text>
            </p>
            <p>
              <Text id="about.p3"></Text>
            </p>
            <p>
              <Text id="about.p4"></Text>
            </p>
          </div>
          <div className={style.whyMe}>
            <Accordion>
              <Accordion.Section title={<Text id="about.personal.item1.title"></Text>}>
                <p>
                  <Text id="about.personal.item1.p1"></Text>
                </p>
                <p>
                  <Text id="about.personal.item1.p2"></Text>
                </p>
                <p>
                  <Text id="about.personal.item1.p3"></Text>
                </p>
              </Accordion.Section>

              <Accordion.Section title={<Text id="about.personal.item2.title"></Text>}>
                <p>
                  <Text id="about.personal.item2.p1"></Text>
                </p>
                <p>
                  <Text id="about.personal.item2.p2"></Text>
                </p>
              </Accordion.Section>

              <Accordion.Section title={<Text id="about.personal.item3.title"></Text>}>
                <p>
                  <Text id="about.personal.item3.p1"></Text>
                </p>
                <p>
                  <Text id="about.personal.item3.p2"></Text>
                </p>
              </Accordion.Section>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
