import style from './style.less';
import { useCallback, useState } from 'preact/hooks';
import { createRef } from 'preact';

const AccordionSection = props => {
  const titleRef = createRef();
  const [isActive, setActive] = useState(false);
  const toggleActive = useCallback(() => {
    setActive(!isActive);
    const newHeigth = isActive ? 0 : titleRef.current.scrollHeight;
    titleRef.current.style.maxHeight = newHeigth + 'px';
  }, [isActive]);

  return (
    <div className={style.accItem}>
      <div className={style.accTitle + ' ' + (isActive ? style.active : '')} onClick={toggleActive}>
        <i className="fa fa-plus" /> {props.title}
      </div>
      <div className={style.accContent} ref={titleRef}>
        {props.children}
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className={style.accordion}>
      <AccordionSection title="Who am I?">
        <p>I come from the vibrant city of São Paulo, Brazil, where I was born and raised.</p>
        <p>
          I am a proud father of three wonderful children, a devoted husband, and a dedicated enthusiast of music and
          drumming in my spare time.
        </p>
        <p>
          Beyond my deep-seated passion for programming and technology, I have an insatiable curiosity for the wonders
          of science and the mysteries of the cosmos, especially in the field of astronomy. Each day, I strive to expand
          my knowledge by embracing the opportunity to learn something new.
        </p>
      </AccordionSection>

      <AccordionSection title="What are my hobbies">
        <p>
          During my leisure hours, I indulge in playing video games, with a particular fondness for Nintendo, especially
          the "Legend of Zelda" franchise.
        </p>
        <p>
          Music holds a special place as my second passion. Drumming and savoring the sounds of various genres,
          including progressive rock, hard rock, heavy metal, Brazilian music, jazz, and fusion, are pursuits I
          thoroughly enjoy.
        </p>
      </AccordionSection>

      <AccordionSection title="How can you contact me?">
        <p>
          On this page, links to all my social profiles can be found, providing convenient access for connection through
          any of them.
        </p>
        <p>You can also use the form below to send me an email.</p>
      </AccordionSection>
    </div>
  );
};
export default Accordion;
