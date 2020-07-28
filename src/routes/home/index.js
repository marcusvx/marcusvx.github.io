import { h } from "preact";
import style from "./style";
import Hero from "../../components/hero";
import About from "../../components/about";

const Home = () => (
  <Fragment>
    <Hero />
    <About />
  </Fragment>
);

export default Home;
