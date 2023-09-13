import { Anchor } from "react-bootstrap";
import MyFilms from "./MyFilms";

const MyHome = (props) => (
  <div className="bg-dark">
    <div className="container-fluid p-0">
      <div className="d-flex justify-content-between" style={{ paddingTop: "20px", paddingInline: "10px" }}>
        <div className="d-flex">
          <h2 className="mb-4 text-white mx-4">TV Shows</h2>
          <div className="dropdown ml-4 mt-1">
            <button
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ backgroundColor: "#221f1f" }}
            >
              Genres &nbsp;
            </button>
            <div className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
              <Anchor className="dropdown-item text-white bg-dark" href="#">
                Comedy
              </Anchor>
              <Anchor className="dropdown-item text-white bg-dark" href="#">
                Drama
              </Anchor>
              <Anchor className="dropdown-item text-white bg-dark" href="#">
                Thriller
              </Anchor>
            </div>
          </div>
        </div>
        <div>
          <i className="fa fa-th-large icons me-2 fs-4 text-white"></i>
          <i className="fa fa-th icons me-2 fs-4 text-white"></i>
        </div>
      </div>

      <MyFilms movieTitle="lord%20of%20the%20rings" title="Lord Of The Rings" />
      <MyFilms movieTitle="avengers" title="Avengers" />
    </div>
  </div>
);
export default MyHome;
