import React, { Component } from "react";

class PortfolioGrid extends Component {
  render() {
    return (
      // Portfolio Grid
      <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">portfolio</h2>
              <h3 className="section-subheading text-muted">
                Being green and clean is not just an aspiration but an action.
                <br />
                <br />
                --Christine Pelosi--
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal1"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="img/portfolio/09-full.jpg"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Living areas</h4>
                <p className="text-muted">Fully organized</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal2"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="img/portfolio/08-full.jpg"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Kitchens/dinning areas</h4>
                <p className="text-muted">Picture perfect</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal3"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="img/portfolio/07-full.jpg"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Appliances</h4>
                <p className="text-muted">Always left spotless</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal4"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="img/portfolio/13-full.jpg"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Laundry</h4>
                <p className="text-muted">Priced per load</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal5"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="img/portfolio/11-full.jpg"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>FLooring</h4>
                <p className="text-muted">cleaned to shine</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 portfolio-item">
              <a
                className="portfolio-link"
                data-toggle="modal"
                href="#portfolioModal6"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="img/portfolio/12-full.jpg"
                  alt=""
                />
              </a>
              <div className="portfolio-caption">
                <h4>Base Boards</h4>
                <p className="text-muted">We dont miss the small things</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PortfolioGrid;
