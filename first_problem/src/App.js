import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = { userInput: [{ userName: 'nogoodName87' }] };
  setUsername(newUsername) {
    this.setState({
      userName: newUsername,
    });
  }
  changeUsernameHandler = () => {
    this.setState({
      userInput: [{ userName: 'nogoodName8' }],
    });
  };
  addUsernameHandler = (event) => {
    this.setState({
      userInput: [{ userName: event.target.value }],
    });
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };
    return (
      <div className="App">
        <ol>
          <li> DONE Create TWO new components: UserInput and UserOutput</li>
          <li>
            DONE UserInput should hold an input element, UserOutput two
            paragraphs
          </li>
          <li>
            DONE Output multiple UserOutput components in the App component (any
            paragraph texts of your choice)
          </li>
          <li>
            DONE Pass a username (of your choice) to UserOutput via props and
            display it there
          </li>
          <li>
            DONE Add state to the App component (=> the username) and pass the
            username to the UserOutput component
          </li>
          <li>
            DONE Add a method to manipulate the state (=> an event-handler
            method)
          </li>
          <li>
            DONE Pass the event-handler method reference to the UserInput
            component and bind it to the input-change event
          </li>
          <li>
            DONE Ensure that the new input entered by the user overwrites the
            old username passed to UserOutput
          </li>
          <li>
            DONE Add two-way-binding to your input (in UserInput) to also
            display the starting username
          </li>
          <li>
            DONE Add styling of your choice to your components/ elements in the
            components - both with inline styles and stylesheets
          </li>
        </ol>
        <UserInput
          info="this username was hard coded"
          userName="nogoodname"
          changed={this.addUsernameHandler}
        ></UserInput>
        <UserOutput
          paragraph="this is a test and only a test"
          paragraph2="I am using the person project as a reference to this"
          userName={this.state.userInput[0].userName}
        ></UserOutput>
        <UserOutput
          paragraph="this is so cool that I am able to do this"
          paragraph2="I wish I knew the whole syntex by heart but I dont"
        ></UserOutput>
        <button style={style} onClick={this.changeUsernameHandler}>
          change Username
        </button>
      </div>
    );
  }
}

export default App;
