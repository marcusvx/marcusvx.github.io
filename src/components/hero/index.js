import style from "./style";

const Hero = () => (
  <section id="hero" class={style.hero}>
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

export default Hero;
