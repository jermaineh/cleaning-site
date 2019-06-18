import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      //about section
      <section className="page-section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Testimonials</h2>
              <h3 className="section-subheading text-muted">
                When your environment is clean you feel happy, motivated and
                healthy.
                <br />
                <br />
                -- Lailah Akita--
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>2017</h4>
                      <h4 className="subheading">S. ROBESON</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        KESHIA THANK YOU SO MUCH! YOUR TEAM DID AN AMAZING JOB
                        IN MY HOME. SOON AS I WALKED IN I WAS HIT WITH A SMELL
                        OF FRESHNESS. IT WAS SO CLEAN I BARELY RECOGNIZED IT
                        BEING MY HOME. IS THERE OPEN AVAILABILITY IN 2 WEEKS?
                        ALSO MY MOTHER-IN-LAW WOULD LIKE TO BOOK QUICK CLEAN AS
                        WELL TO CLEAN HER HOME. SHE WAS VERY IMPRESSED.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>March 2018</h4>
                      <h4 className="subheading">L.RUBINO</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        YOUR DRIVE AND DETERMINATION IS LIFE! NOT JUST THOSE 2
                        KEY COMPONENTS ARE MAKING YOU SUCCESSFUL. BEING THE BEST
                        AT WHAT YOU DO IS PUSHING YOU STRAIGHT TO THE TOP. I'D
                        BE HONORED TO PASS YOUR BUSINESS INFORMATION OVER TO NOT
                        JUST OTHER COMMUNITIES WITHIN OUR COMPANY, BUT ALSO TO
                        OTHER PROPERTY MANAGEMENT COMPANIES THAT NEED A SOLID
                        CLEANING SERVICE.
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>June 2019</h4>
                      <h4 className="subheading">B. SHURPING</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        QUICK CLEAN AND KESHIA ARE SIMPLY AMAZING! MY HOME NOT
                        ONLY LOOKED GREAT, IT SMELLED SO GOOD. KESHIA AND HER
                        STAFF HAVE AN EYE FOR DETAIL AND DO NOT MISS A BEAT.
                        THEY ALSO ARE GREAT WITH WORKING AROUND ANIMALS. YOU
                        WILL NOT BE DISAPPOINTED WITH THE SERVICE AND ATTENTION
                        TO DETAIL.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img
                      className="rounded-circle img-fluid"
                      src="img/about/4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>January 2019</h4>
                      <h4 className="subheading">D. ABESI</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">
                        KESHIA AND HER STAFF'S CLEANING SERVICE IS A TOP NOTCH,
                        5 STAR SERVICE. I AM NEW TO THE AREA AND HAVE ALREADY
                        RECOMMENDED QUICK CLEAN'S SERVICES TO A THE FEW PEOPLE I
                        KNOW. THEY'RE RELIABLE, THOROUGH, FAST, CONSCIENTIOUS,
                        AND THEY'RE SO PLEASANT. QUICK CLEAN IS THE ONLY
                        CLEANING SERVICE I WILL CALL WHEN I NEED HELP AROUND THE
                        HOUSE.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>
                      Be Part
                      <br />
                      Of Our
                      <br />
                      Story!
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
