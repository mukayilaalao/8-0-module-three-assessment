import React from "react";

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
      <div>
        <div>Name: {location.name}</div>
        <div>Climate: {location.climate}</div>
        <div>Terrain: {location.terrain}</div>
      </div>
    ));

    return (
      <section>
        <button onClick={this.handleClick}>
          {show ? "Hide Locations" : "Show Locations"}
        </button>
        {show ? allLocations : ""}
      </section>
    );
  }
}

export default Locations;
