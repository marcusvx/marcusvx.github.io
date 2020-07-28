import { h } from "preact";
import style from "./style";

const Hero = () => (
  <div
    id="hero"
    class={style.hero + " full-size-hero has-overlay has-bg"}
    data-bg-url="/img/code-bg.jpg"
  >
    <div class={style.content + " center"}>
      <div class="container">
        <h1>I am Marcus</h1>
        <p>And I'm a software developer</p>
        <a class="main-btn white-btn" href="#about_me">
          Read more
        </a>
        <a class="main-btn white-btn" href="#contact_me">
          Contact Me
        </a>
      </div>
    </div>
  </div>
);

export default Hero;
