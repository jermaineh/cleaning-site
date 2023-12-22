import React from "react";

export default function Footer() {
  return (
    // Footer
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4">
            <span className="copyright">Copyright &copy; Quick Clean 2019</span>
          </div>
          <div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a
                  href="https://www.instagram.com/quickcleanatl/"
                  target="blank"
                >
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.facebook.com/quickcleanatl" target="blank">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/company/quick-clean-atl"
                  target="blank"
                >
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <button>Privacy Policy</button>
              </li>
              <li className="list-inline-item">
                <button>Terms of Use</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
