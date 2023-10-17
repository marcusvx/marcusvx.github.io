import style from './style.scss';
import axios from 'axios';
import SectionHeader from '../sectionHeader';
import { useEffect, useMemo, useState } from 'preact/hooks';

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const [firstYear, lastYear] = useMemo(() => {
    const itemCount = experiences?.length;
    const currentyear = new Date().getFullYear().toString();
    if (!itemCount) {
      return ['2008', currentyear];
    }

    const firstExperience = experiences[itemCount - 1];
    const lastExperience = experiences[0];

    const firstYear = firstExperience.start.substring(0, 4);
    const lastYear = (lastExperience?.end || currentyear).substring(0, 4);
    return [firstYear, lastYear];
  }, [experiences]);

  useEffect(() => {
    axios.get('../../assets/json/experiences.json').then(response => setExperiences(response.data));
  }, []);

  return (
    <section className={style.experiences} id="experiences">
      <SectionHeader title="Work Experiences" subTitle="A short summary of my professional experience" />

      <div className={style.timeline}>
        <header className={style.timelineHeader}>
          <span>{lastYear}</span>
        </header>
        {experiences.length &&
          experiences.map((item, index) => {
            return (
              <>
                {index % 2 !== 0 ? (
                  <header className={style.timelineHeader}>
                    <span>{(item.end || item.start).substring(0, 4)}</span>
                  </header>
                ) : null}
                <div key={index} className={style.timelineBlock}>
                  <div className={style.marker}></div>

                  <div className={style.content}>
                    <div className={style.timelineItemHeader}>
                      <h3>{item.company}</h3>

                      <p className={style.duration}>
                        {item.start} - {item.end || 'Actual'}
                      </p>
                      <span className={style.jobTitle}>{item.title}</span>
                    </div>

                    {item.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                </div>
              </>
            );
          })}
        <header className={style.timelineHeader}>
          <span>{firstYear}</span>
        </header>
      </div>
    </section>
  );
}
