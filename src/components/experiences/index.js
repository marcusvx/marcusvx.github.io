import style from './style.scss';
import axios from 'axios';
import SectionHeader from '../sectionHeader';
import { useContext, useEffect, useMemo, useState } from 'preact/hooks';
import { Localization } from '../../localization';
import * as dayjs from 'dayjs';
import { Text } from 'preact-i18n';
import { Fragment } from 'preact';

const formatJobDate = date => {
  return dayjs(date).format('MMM YYYY');
};

export default function Experiences() {
  const [experiences, setExperiences] = useState([]);
  const language = useContext(Localization);
  const [firstYear, lastYear] = useMemo(() => {
    const itemCount = experiences?.length;
    const currentYear = new Date().getFullYear().toString();
    if (!itemCount) {
      return ['2008', currentYear];
    }

    const firstExperience = experiences[itemCount - 1];
    const lastExperience = experiences[0];

    const firstYear = new Date(firstExperience.start).getFullYear().toString();
    const lastYear = new Date(lastExperience?.end || currentYear).getFullYear().toString();
    return [firstYear, lastYear];
  }, [experiences]);

  useEffect(() => {
    axios.get(`../../assets/json/${language.value}/experiences.json`).then(response => setExperiences(response.data));
  }, [language.value]);

  return (
    <section className={style.experiences} id="experiences">
      <SectionHeader>
        <SectionHeader.Title>
          <Text id="experiences.title">Work Experiences</Text>
        </SectionHeader.Title>
        <SectionHeader.SubTitle>
          <Text id="experiences.subtitle">A short summary of my professional experience</Text>
        </SectionHeader.SubTitle>
      </SectionHeader>

      <div className={style.timeline}>
        <header className={style.timelineHeader}>
          <span>{lastYear}</span>
        </header>
        {experiences.length &&
          experiences.map((item, index) => {
            const { end, start, company, title, description } = item;
            return (
              <Fragment key={`${company}-${title}`}>
                {index % 2 !== 0 ? (
                  <header className={style.timelineHeader}>
                    <span>{new Date(end || start).getFullYear().toString()}</span>
                  </header>
                ) : null}
                <div key={index} className={style.timelineBlock}>
                  <div className={style.marker} />

                  <div className={style.content}>
                    <div className={style.timelineItemHeader}>
                      <h3>{company}</h3>

                      <p className={style.duration}>
                        {formatJobDate(start)} -{' '}
                        {end ? formatJobDate(end) : <Text id="experiences.current">Current</Text>}
                      </p>
                      <span>{title}</span>
                    </div>

                    {description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                </div>
              </Fragment>
            );
          })}
        <header className={style.timelineHeader}>
          <span>{firstYear}</span>
        </header>
      </div>
    </section>
  );
}
