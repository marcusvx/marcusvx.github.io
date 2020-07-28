import style from "./style";
import { useState, useCallback } from "preact/hooks";
import { createRef } from "preact";

const AccordionSection = (props) => {
  const titleRef = createRef();
  const [isActive, setActive] = useState(false);
  const toggleActive = useCallback(() => {
    setActive(!isActive);
    const newHeigth = isActive ? 0 : titleRef.current.scrollHeight;
    titleRef.current.style.maxHeight = newHeigth + "px";
  }, [isActive]);

  return (
    <div class={style.accItem}>
      <div
        class={style.accTitle + " " + (isActive ? style.active : "")}
        onClick={toggleActive}
      >
        <i class="fa fa-plus"></i> {props.title}
      </div>
      <div class={style.accContent} ref={titleRef}>
        {props.children}
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div class={style.accordion}>
      <AccordionSection title="Who am I?">
        <p>Born and raised in São Paulo City, Brazil.</p>
        <p>Father of 3 kids, husband and hobbyist drummer.</p>
        <p>
          Beside my passion for programming and technology, I love to learn
          about science and astronomy. I try to learn a new thing everyday ...
        </p>
      </AccordionSection>

      <AccordionSection title="How can you contact me?">
        <p>
          In this page you can find links for all my social profiles, you can
          reach throung any of them.
        </p>
        <p>You can also use the form below to send me an email.</p>
      </AccordionSection>

      <AccordionSection title="What are my hobbies">
        <p>
          In my spare time I like to play videogames with a special preference
          for Nintendo (specially the "Legend of Zelda" franchise).
        </p>
        <p>
          Music is my second passion: I like to play drums and enjoy listening
          music (mostly progressive rock, hard rock, heavy metal, brazilian
          music, jazz and fusion)
        </p>
      </AccordionSection>
    </div>
  );
};
export default Accordion;
