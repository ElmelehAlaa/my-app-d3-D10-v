import { Anchor, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const MyNavBar = (props) => (
  <>
    <Nav
      className="navbar navbar-expand-lg navbar-dark p-0 position-sticky z-1 top-0"
      style={{ backgroundColor: "#221f1f" }}
    >
      <Anchor className="navbar-brand px-5" href="#">
        <img src="assets/logo.png" alt="logo" style={{ width: "100px", height: "55px" }} />
      </Anchor>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="navbar-nav me-auto d-flex justify-content-between w-25">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/tv-shows">
            TvShows
          </NavLink>
          <NavLink></NavLink>
          <NavLink></NavLink>
        </div>
        <i className="fa fa-search icons text-white mx-2 "></i>
        <div className="text-white mx-2" id="kids">
          KIDS
        </div>
        <i className="fa fa-bell icons text-white mx-2"></i>
        <i className="fa fa-user icons text-white mx-2"></i>
      </div>
    </Nav>
  </>
);
export default MyNavBar;
