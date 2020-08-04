import style from "./style";
import bkgImage from "../../assets/img/code-bg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      class={style.hero}
      style={{ backgroundImage: "url(" + bkgImage + ")" }}
    >
      <div class={style.content}>
        <div class={style.container}>
          <h1>I am Marcus</h1>
          <p>And I'm a software developer</p>
          <a class={style.button} href="#about_me">
            Read more
          </a>
          <a class={style.button} href="#contact_me">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
