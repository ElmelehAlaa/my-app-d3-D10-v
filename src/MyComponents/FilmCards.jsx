import { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class FilmCards extends Component {
  state = {
    comments: [],
  };

  render() {
    return (
      <Row className=" mb-4 gy-4 text-center  ">
        <h4 className="text-white  fs-1 text-start pb-3">{this.props.title} </h4>
        {this.props.films.map((film) => (
          <Col xs="12" sm="6" md="4" lg="3" xxl="2" className="mb-4 px-1  " key={film.imdbID}>
            <Card title={film.Title} img={film.Poster} style={{ width: "100%", height: "100%", margin: "auto" }}>
              <Card.Img variant="top" src={film.Poster} style={{ objectFit: "contain" }} />
              <Link to={"/tv-shows/" + film.imdbID}>
                <button className="bg-dark text-white">info</button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}

export default FilmCards;
