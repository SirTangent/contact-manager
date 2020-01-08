import React, { Component } from "react";
import "./App.css";

import Contact from "./components/Contact";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header branding={"Contact Manager"} />
        <Contact
          name={"Timmy Turner"}
          email={"tturner@fmail.wand"}
          phone={"622-543-7789"}
        />
        <Contact
          name={"Denzel Crocker"}
          email={"fairiesarereal@tcn.net"}
          phone={"622-543-6666"}
        />
      </div>
    );
  }
}

export default App;
