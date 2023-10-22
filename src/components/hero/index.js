import style from './style.scss';
import { Text } from 'preact-i18n';
import { TypedText } from '../typedText';

const Hero = () => {
  return (
    <section id="hero" className={style.hero}>
      <div className={style.content}>
        <h1>
          <Text id="hero.title">I am Marcus</Text>
        </h1>
        <TypedText translationId="hero.subtitle"></TypedText>
        <a className={style.button} href="#about_me">
          Read more
        </a>
        <a className={style.button} href="#contact_me">
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
