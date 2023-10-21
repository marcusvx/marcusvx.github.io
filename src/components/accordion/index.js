import style from './style.scss';
import { createRef } from 'preact';

const Accordion = ({ children }) => {
  return <div className={style.accordion}>{children}</div>;
};

Accordion.Section = ({ title, children }) => {
  const itemRef = createRef();

  const toggleActive = () => {
    document.querySelectorAll(`.${style['accordion-item']}`).forEach(element => {
      if (element !== itemRef.current) {
        element.children[0].classList.remove(`${style['active']}`);
        element.children[1].style.maxHeight = 0;
      }
    });

    const title = itemRef.current.children[0];
    const content = itemRef.current.children[1];
    content.style.maxHeight = title.classList.toggle(style.active) ? `${content.scrollHeight}px` : '0';
  };

  return (
    <div className={style['accordion-item']} ref={itemRef}>
      <div className={style['accordion-title']} onClick={toggleActive}>
        <i className="fa fa-plus" /> {title}
      </div>
      <div className={style['accordion-content']}>{children}</div>
    </div>
  );
};

export default Accordion;
