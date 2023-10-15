import style from './style.less';
import { useCallback, useState } from 'preact/hooks';

const Menu = () => {
  const [isVisible, setVisble] = useState(false);
  const toggleVisibility = useCallback(() => {
    document.body.style.overflow = isVisible ? 'visible' : 'hidden';
    setVisble(!isVisible);
  }, [isVisible]);

  const handleClick = event => {
    event.preventDefault();

    const anchorElement = event.target.getAttribute('href');
    const target = document.querySelector(anchorElement);
    const y = target.getBoundingClientRect().top + window.scrollY;

    window.scroll({
      top: y - 30,
      behavior: 'smooth',
    });

    toggleVisibility();
  };

  return (
    <>
      <div className={style.menuTriggerBtn} onClick={toggleVisibility}>
        <span />
        <span />
        <span />
      </div>

      <div className={style.menuOverlay + ' ' + (isVisible ? style.shown : '')}>
        <nav className={style.mainMenu}>
          <ul>
            <li>
              <a href="#hero" onClick={e => handleClick(e)}>
                Home
              </a>
            </li>
            <li>
              <a href="#about_me" onClick={e => handleClick(e)}>
                about me
              </a>
            </li>
            <li>
              <a href="#skills" onClick={e => handleClick(e)}>
                skills
              </a>
            </li>
            <li>
              <a href="#experiences" onClick={e => handleClick(e)}>
                Experiences
              </a>
            </li>
            <li>
              <a href="#contact_me" onClick={e => handleClick(e)}>
                Contact Me
              </a>
            </li>
          </ul>

          <div className={style.closeMenuBtn} onClick={toggleVisibility}>
            <i className="fas fa-times" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Menu;
