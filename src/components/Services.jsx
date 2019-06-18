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
                The Quick Clean team specializes in residential and commercial
                cleaning. Serving the Greater Atlanta area since 2017. From
                cleaning up a new construction property getting ready to hit the
                market, to a single family that needs laundry washed and folded.
                We do it all.
              </h3>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <a
                className="btn"
                href="https://10to8.com/book/wtmljfpykktmlbnigz/"
                id="TTE-201128c4-c229-487d-ae9b-49080b970763"
                target="_blank"
              >
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-home fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Home Cleaning</h4>
              </a>
            </div>
            <div className="col-md-4">
              <a
                className="btn"
                href="https://10to8.com/book/wtmljfpykktmlbnigz/"
                id="TTE-201128c4-c229-487d-ae9b-49080b970763"
                target="_blank"
              >
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-users fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Maid Service</h4>
              </a>
            </div>
            <div className="col-md-4">
              <a
                className="btn"
                href="https://10to8.com/book/wtmljfpykktmlbnigz/"
                id="TTE-201128c4-c229-487d-ae9b-49080b970763"
                target="_blank"
              >
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-paint-roller fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Window Washing</h4>
              </a>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-md-4">
              <a
                className="btn"
                href="https://10to8.com/book/wtmljfpykktmlbnigz/"
                id="TTE-201128c4-c229-487d-ae9b-49080b970763"
                target="_blank"
              >
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-hotel fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Commercial Cleanings</h4>
              </a>
            </div>
            <div className="col-md-4">
              <a
                className="btn"
                href="https://10to8.com/book/wtmljfpykktmlbnigz/"
                id="TTE-201128c4-c229-487d-ae9b-49080b970763"
                target="_blank"
              >
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-box-open fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Move-in/Move-out Cleaning</h4>
              </a>
            </div>
            <div className="col-md-4">
              <a
                className="btn"
                href="https://10to8.com/book/wtmljfpykktmlbnigz/"
                id="TTE-201128c4-c229-487d-ae9b-49080b970763"
                target="_blank"
              >
                {" "}
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-scroll fa-stack-1x fa-inverse" />
                </span>
                <h4 className="service-heading">Carpet Cleaning</h4>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
