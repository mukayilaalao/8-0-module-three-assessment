import React from "react";
import Movie from "./Movie";

class Movies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedOption: "",
      movie: {},
    };
  }
  async componentDidMount() {
    const res = await fetch("https://ghibliapi.herokuapp.com/films");
    const data = await data.json();
    this.setState({ movies: data });
  }
  getSelectedOption = (str) => {
    return this.state.movies.find((movie) => movie.title === str);
  };
  handleChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
      movie: this.getSelectedOption(e.target.value),
    });
  };
  render() {
    const allMovies = this.state.movies.map((movie) => (
      <option key={movie.id} value={movie.title.toLowerCase()}>
        {movie.title}
      </option>
    ));
    return (
      <section className="movies">
        <h2>Select a Movie</h2>
        <select onChange={this.handleChange} value={this.state.selectedOption}>
          <option value=""></option>
        </select>
        <Movie movie={this.state.movie} />
      </section>
    );
  }
}

export default Movies;
