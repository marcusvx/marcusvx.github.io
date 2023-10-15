import style from './style.less';
import axios from 'axios';
import SectionHeader from '../sectionHeader';
import { useEffect, useState } from 'preact/hooks';

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    axios.get('../../assets/json/experiences.json').then(response => setExperiences(response.data));
  }, []);

  return (
    <section className={style.experiences} id="experiences">
      <div className={style.container}>
        <SectionHeader title="Work Experiences" subTitle="A short summary of my professional experience" />

        <div className={style.timeline}>
          {experiences.length &&
            experiences.map((item, index) => {
              return (
                <div key={index} className={style.timelineBlock}>
                  <div className={style.icon}>
                    <i className="fa fa-briefcase" />
                  </div>
                  <div className={style.content}>
                    <h3>{item.company}</h3>
                    <span className={style.duration}>
                      [{item.start} : {item.end || 'Actual'}]
                    </span>
                    <span className={style.jobTitle}>{item.title}</span>
                    {item.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
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
