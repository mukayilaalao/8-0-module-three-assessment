import React from "react";
import "./Locations.css";

class Locations extends React.Component {
  constructor() {
    super();
    this.state = {
      locations: [],
      show: false,
    };
  }
  async componentDidMount() {
    const res = await fetch("https://ghibliapi.herokuapp.com/locations");
    const data = await res.json();
    this.setState({ locations: data });
  }
  handleClick = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    const { show, locations } = this.state;
    const allLocations = locations.map((location) => (
      <li key={location.id}>
        <div>Name: {location.name}</div>
        <div>Climate: {location.climate}</div>
        <div>Terrain: {location.terrain}</div>
      </li>
    ));

    return (
      <section className="locations">
        <h2>List of Locations</h2>
        <button
          onClick={this.handleClick}
          className={show ? "hide-class" : "show-class"}
        >
          {show ? "Hide Locations" : "Show Locations"}
        </button>
        <ol>{show ? allLocations : ""}</ol>
      </section>
    );
  }
}

export default Locations;
