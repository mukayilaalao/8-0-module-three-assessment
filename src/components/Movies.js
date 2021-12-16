import React from "react";

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
    const data = await res.json();
    this.setState({ movies: data });
  }
  getSelectedOption = (str) => {
    const movie = this.state.movies.find(
      (movie) => movie.title.toLowerCase() === str.toLowerCase()
    );
    return !movie ? {} : movie;
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
    const { movie } = this.state;
    return (
      <section className="movies">
        <h2>Select a Movie</h2>
        <select onChange={this.handleChange} value={this.state.selectedOption}>
          <option value=""></option>
          {allMovies}
        </select>
        {!Object.values(movie).length ? (
          ""
        ) : (
          <div>
            <h3>Title: {movie.title}</h3>
            <div>Release Date: {movie.release_date}</div>
            <div>Description: {movie.description}</div>
          </div>
        )}
      </section>
    );
  }
}

export default Movies;
