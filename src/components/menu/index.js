import { h } from "preact";
import style from "./style";
import { useState, useCallback } from "preact/hooks";

const Menu = () => {
  const [isVisible, setVisble] = useState(false);
  const toggleVisibility = useCallback(() => {
    setVisble(!isVisible);
  }, [isVisible]);

  return (
    <>
      <div class={style.menuTriggerBtn} onClick={toggleVisibility}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div class={style.menuOverlay + " " + (isVisible ? style.shown : "")}>
        <nav class={style.mainMenu}>
          <ul>
            <li>
              <a class="scroll-link" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a class="scroll-link" href="#about_me">
                about me
              </a>
            </li>
            <li>
              <a class="scroll-link" href="#skills">
                skills
              </a>
            </li>
            <li>
              <a class="scroll-link" href="#experiences">
                Experiences
              </a>
            </li>
            <li>
              <a class="scroll-link" href="#contact_me">
                Contact Me
              </a>
            </li>
          </ul>

          <div class={style.closeMenuBtn} onClick={toggleVisibility}>
            <i class="fas fa-times"></i>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Menu;
