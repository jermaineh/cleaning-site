import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Services from "./components/Services";
import About from "./components/About";
import PortfolioGrid from "./components/PortfolioGrid";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <Services />
      <PortfolioGrid />
      <About />
      <Team />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
