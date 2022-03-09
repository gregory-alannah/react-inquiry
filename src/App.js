import React from "react";
import BasicInfo from "./components/BasicInfo";
import "./App.css";

// construtor that takes in props and super method with this.state that equals a empty object
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {},
    };
  }
  //setting up array with dummy information for people
  render() {
    const people = [
      "John",
      "Miller",
      "999-999-9999",
      "01/16/88",
      "Lisa",
      "Grey",
      "888-888-8888",
      "05/18/92",
    ];
    // Hard Challenge
    //for each person, it will create another li and it will append it to an array and put it in the list
    const peopleList = people.map((person) => <li key={person}>{person}</li>);
    return (
      <div className="App">
        <BasicInfo />
        <ul>{peopleList}</ul>
      </div>
    );
  }
}

export default App;
