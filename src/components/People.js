import React from "react";
import "./People.css";

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
    const data = await res.json();
    this.setState({ people: data });
  }
  personFinder = (name) => {
    const person = this.state.people.find(
      (person) => person.name.toLowerCase() === name.toLowerCase()
    );
    return !person ? {} : person;
  };
  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      person: this.personFinder(this.state.userInput),
      userInput: "",
    });
  };
  render() {
    const { userInput, person } = this.state;
    return (
      <section className="people">
        <h2>Search for a Person</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={userInput}
            onChange={this.handleChange}
            placeholder="find your person"
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          {!Object.values(person).length ? (
            "Not Found"
          ) : (
            <div>
              <div>Name: {person.name}</div>
              <div>Age: {person.age}</div>
              <div>Gender: {person.gender}</div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default People;
