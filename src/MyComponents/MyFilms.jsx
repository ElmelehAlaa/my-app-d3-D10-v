import { Component } from "react";

import FilmCards from "./FilmCards";
import Loading from "./Loading";
import Error from "./Error";
import { Container } from "react-bootstrap";

class MyFilms extends Component {
  state = {
    films: [],
    isLoading: true,
    isError: false,
  };
  FetchFilms = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=d520c310&s=" + this.props.movieTitle);
      if (response.ok) {
        const data = await response.json();
        this.setState({ films: data });
      } else {
        console.log("error");
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    console.log("DidMount");
    this.FetchFilms();
  };
  render() {
    return (
      <Container>
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        {this.state.films.Search && <FilmCards films={this.state.films.Search} title={this.props.title} />}
      </Container>
    );
  }
}
export default MyFilms;
