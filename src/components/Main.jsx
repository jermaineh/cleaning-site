import React, { Component } from "react";

class Main extends Component {
  render() {
    // Header
    return (
      <header className="masthead">
        <div className="container">
          <div className="intro-text">
            <div className="intro-lead-in">
              “A clean environment elevates a clear mind.”- QC
            </div>
            <div className="intro-heading text-uppercase">
              It's Nice To Meet You
            </div>
            <a
              className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
              href="#services"
            >
              Book Now
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Main;
