import { Fragment } from 'preact';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Hero from '../../components/hero';
import About from '../../components/about';
import Skills from '../../components/skills';
import Experiences from '../../components/experiences';
import Quote from '../../components/quote';
import Contact from '../../components/contact';
import { Text } from 'preact-i18n';

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Quote author="Martin Fowler" reference={<Text id="quote.reference"></Text>}>
        <Text id="quote.text">
          Any fool can write code that a computer can understand. Good programmers write code that humans can
          understand.
        </Text>
      </Quote>
      <Contact />
      <Footer />
    </Fragment>
  );
}
