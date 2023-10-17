import style from './style.scss';
import bkgImage from '../../assets/img/code-bg.jpg';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="hero" className={style.hero} style={{ backgroundImage: 'url(' + bkgImage + ')' }}>
      <div className={style.content}>
        <div className={style.container}>
          <h1>I am Marcus</h1>
          <div>
            <Typewriter
              onInit={typewriter => {
                typewriter.typeString('And I am a software developer!').pauseFor(2500).start();
              }}
            />
          </div>
          <a className={style.button} href="#about_me">
            Read more
          </a>
          <a className={style.button} href="#contact_me">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
