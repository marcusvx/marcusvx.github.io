import style from "./style";
import Hero from "../../components/hero";
import About from "../../components/about";
import Skills from "../../components/skills";
import Experiences from "../../components/experiences";
import Quote from "../../components/quote";

const Home = () => (
  <Fragment>
    <Hero />
    <About />
    <Skills />
    <Experiences />
    <Quote
      message="Any fool can write code that a
            computer can understand. Good programmers write code that humans can
            understand."
      author="Martin Fowler"
    />
  </Fragment>
);

export default Home;
