import { h } from "preact";
import style from "./style";
import Menu from "../menu";

const Header = () => (
  <header class={style.mainHeaderWrapper}>
    <div class="container">
      <div class={style.mainHeader}>
        <a href="/" class={style.navbarBrand}>
          <i class="fas fa-terminal"></i>
          marcusvinicius.info
        </a>

        <Menu />
      </div>
    </div>
  </header>
);

export default Header;
