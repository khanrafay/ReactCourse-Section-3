import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserOutput from './Component/UserOutput'
import UserInput from './Component/UserInput';


class App extends Component {
  // state = {
  //   persons: [
  //     { name: "Talha", age: "32" },
  //     { name: "Umair", age: "27" },
  //     { name: "Huzaifa", age: "20" }
  //   ],
  //   otherValue: "Something else"
  // }

  state = {
    username: "Abdul Rafay Khan"
  }

  // handleSwitchName = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: "32" },
  //       { name: "Umair", age: "27" },
  //       { name: "Huzaifa", age: "21" }
  //     ]
  //   })
  // }

  // handleChangeName = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: 'Talha', age: "32" },
  //       { name: event.target.value, age: "27" },
  //       { name: "Huzaifa", age: "21" }
  //     ]
  //   })
  // }

  handleChangeUserName = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'Inherit',
      border: '1px solid',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        {/* <h1>Hello! i am learning react</h1>
        <button style={style} onClick={this.handleSwitchName.bind(this, 'Harris')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={() => this.handleSwitchName('Khizer!')}
          changed={this.handleChangeName}
        >My Hobbies: Swimming</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} /> */}

        <UserOutput
          username={this.state.username}
          changeName={this.handleChangeUserName}
        />

      </div>
    );
  }
}

export default App;
