import style from "./style";
import Hero from "../../components/hero";
import About from "../../components/about";
import Skills from "../../components/skills";
import Experiences from "../../components/experiences";

const Home = () => (
  <Fragment>
    <Hero />
    <About />
    <Skills />
    <Experiences />
  </Fragment>
);

export default Home;
