import style from './style.scss';
import PieChart from '../pieChart';
import BarChart from '../barChart';
import SectionHeader from '../sectionHeader';
import { useCallback, useContext, useState } from 'preact/hooks';
import axios from 'axios';
import handleViewport from 'react-in-viewport';
import { Text } from 'preact-i18n';
import { Localization } from '../../localization';

const ViewPortSkills = props => {
  const { enterCount, forwardedRef, pieValues, barValues } = props;
  return (
    <section className={style.technicalSkills} id="skills" ref={forwardedRef}>
      <div className={style.container}>
        <SectionHeader darkBg="true">
          <SectionHeader.Title>
            <Text id="skills.title"></Text>
          </SectionHeader.Title>
          <SectionHeader.SubTitle darkBg="true">
            <Text id="skills.subtitle"></Text>
          </SectionHeader.SubTitle>
        </SectionHeader>

        <div className={style.skillsWrapper}>
          {enterCount >= 1 && pieValues ? (
            <>
              {pieValues.map(item => (
                <div key={item.label} className={style.skill}>
                  <PieChart percent={item.value} title={item.label} />
                </div>
              ))}
            </>
          ) : null}
        </div>

        <div className={style.otherSkillsWrapper}>
          <SectionHeader darkBg="true">
            <SectionHeader.Title>
              <Text id="skills.other_skills.title">Other Skills</Text>
            </SectionHeader.Title>
            <SectionHeader.SubTitle darkBg="true">
              <Text id="skills.other_skills.subtitle">Languages, technologies and pratices of my preference.</Text>
            </SectionHeader.SubTitle>
          </SectionHeader>

          <div className={style.otherSkills}>
            {enterCount >= 1 && barValues ? (
              <>
                {barValues.map(item => (
                  <div className={style.skillBar}>
                    <BarChart key={item.label} value={item.value} label={item.label} />
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};
const ViewportBlock = handleViewport(ViewPortSkills, null, {
  disconnectOnLeave: true,
});

const Skills = () => {
  const [pieValues, setPieValues] = useState();
  const [barValues, setBarValues] = useState();
  const language = useContext(Localization);

  const setValues = useCallback(() => {
    axios.get(`../../assets/json/${language.value}/abilities.json`).then(response => setBarValues(response.data));
    axios.get(`../../assets/json/${language.value}/tech-skills.json`).then(response => setPieValues(response.data));
  }, [language.value]);

  return <ViewportBlock key={language.value} pieValues={pieValues} barValues={barValues} onEnterViewport={setValues} />;
};

export default Skills;
