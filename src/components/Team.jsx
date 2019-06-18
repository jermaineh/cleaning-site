import React, { Component } from "react";

class Team extends Component {
  render() {
    return (
      // Team
      <section className="bg-light page-section" id="team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">
                Our Amazing Team
              </h2>
              <h3 className="section-subheading text-muted">
                Our team consists of individuals that represent the diversity of
                the culture we live in.
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                The number 1 goal of our team is the provide 5 star service and
                exceed customer expectations. Weather we are cleaning one room
                or one building we maintian the same high standards and
                professionalism that is to be expected when you book with us.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
