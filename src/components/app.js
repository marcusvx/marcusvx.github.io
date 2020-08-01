import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";

import Home from "../routes/home";
import AOS from "aos";
import "aos/dist/aos.css";

export default class App extends Component {
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
        </Router>
      </div>
    );
  }
}
