import React, { Component } from "react";

class Services extends Component {
  render() {
    return (
      // Services
      <section className="page-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">services</h2>
              <h3 className="section-subheading text-muted">
                We provide an array of standard and additional cleaning services
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-home fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">Home Cleaning</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-users fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">Maid Service</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-paint-roller fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">Window Washing</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-hotel fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">Commercial Cleanings</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-box-open fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">Move-in/Move-out Cleaning</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-4x">
                <i className="fas fa-circle fa-stack-2x text-primary" />
                <i className="fas fa-scroll fa-stack-1x fa-inverse" />
              </span>
              <h4 className="service-heading">Carpet Cleaning</h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
