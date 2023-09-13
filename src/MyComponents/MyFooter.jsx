import { Anchor, Col, Row } from "react-bootstrap";

const MyFooter = (props) => (
  <>
    <div className="bg-dark container">
      <div className="row text-center mt-5">
        <div className="col-6 offset-3">
          <div className="row">
            <div className="col col-12 text-left mb-2 text-light">
              <i className="fa fa-facebook footer-icon"></i>
              <i className="fa fa-instagram footer-icon"></i>
              <i className="fa fa-twitter footer-icon"></i>
              <i className="fa fa-youtube footer-icon"></i>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4  ">
            <Col>
              <Row>
                <div className="col col-12 footer-links">
                  <p>
                    <Anchor href="#" alt="footer link " className="text-decoration-none text-white">
                      Audio and Subtitles
                    </Anchor>
                  </p>
                  <p>
                    <Anchor href="#" alt="footer link" className="text-decoration-none text-white">
                      Media Center
                    </Anchor>
                  </p>
                  <p>
                    <Anchor href="#" alt="footer link" className="text-decoration-none text-white">
                      Privacy
                    </Anchor>
                  </p>
                  <p>
                    <Anchor href="#" alt="footer link" className="text-decoration-none text-white">
                      Contact us
                    </Anchor>
                  </p>
                </div>
              </Row>
            </Col>
            <Col>
              <Row>
                <div className="col col-12 footer-links">
                  <p>
                    <Anchor href="#" alt="footer link" className="text-decoration-none text-white">
                      Audio Description
                    </Anchor>
                  </p>
                  <p>
                    <Anchor href="#" alt="footer link" className="text-decoration-none text-white">
                      Investor Relations
                    </Anchor>
                  </p>
                  <p>
                    <Anchor href="#" alt="footer link" className="text-decoration-none text-white">
                      Legal Notices
                    </Anchor>
                  </p>
                </div>
              </Row>
            </Col>
            <Col>
              <Row>
                <div className="col col-12 footer-links">
                  <p>
                    <Anchor href="#" alt="footer link" className="text-decoration-none text-white">
                      Help Center
                    </Anchor>
                  </p>
                  <p>
                    <Anchor href="#" alt="footer link" className="text-decoration-none text-white">
                      Jobs
                    </Anchor>
                  </p>
                  <p>
                    <Anchor href="#" alt="footer link" className="text-decoration-none text-white">
                      Cookie Preferences
                    </Anchor>
                  </p>
                </div>
              </Row>
            </Col>
            <Col>
              <Row>
                <div className="col col-12 footer-links">
                  <p>
                    <Anchor href="#" alt="footer link" className="text-decoration-none text-white">
                      Gift Cards
                    </Anchor>
                  </p>
                  <p>
                    <Anchor href="#" alt="footer link" className="text-decoration-none text-white">
                      Terms of Use
                    </Anchor>
                  </p>
                  <p>
                    <Anchor href="#" alt="footer link" className="text-decoration-none text-white">
                      Corporate Information
                    </Anchor>
                  </p>
                </div>
              </Row>
            </Col>
          </div>
          <Row>
            <div className="col col-12 text-left mb-2 ">
              <button type="button" className="btn btn-sm footer-button rounded-0 mt-3 text-white">
                Service Code
              </button>
            </div>
          </Row>
          <Row>
            <div className="col col-12 text-left mb-2 mt-2 copyright text-white">© 1997-2022 Netflix, Inc.</div>
          </Row>
        </div>
      </div>
    </div>
  </>
);

export default MyFooter;
