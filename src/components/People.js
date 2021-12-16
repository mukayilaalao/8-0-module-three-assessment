import Person from "./Person";
import React from "react";

class People extends React.Component {
  constructor() {
    super();
    this.state = {
      people: [],
      userInput: "",
      person: {},
    };
  }
  async componentDidMount() {
    const res = await fetch("https://ghibliapi.herokuapp.com/people");
    const data = await data.json();
    this.setState({ people: data });
  }
  personFinder = (name) => {
    return this.state.people.find(
      (person) => person.name.toLowerCase() === name.toLowerCase()
    );
  };
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      person: this.personFinder(this.state.person),
    });
  };
  render() {
    const { userInput, person } = this.state;
    return (
      <section className="people">
        <h2>Search for a Person</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            value={userInput}
            onChange={this.handleChange}
            placeholder="find your person"
          />
          <button type="submit">Submit</button>
        </form>
        <Person person={person} />
      </section>
    );
  }
}

export default People;
