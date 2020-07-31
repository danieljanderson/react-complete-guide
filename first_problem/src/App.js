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
  render() {
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
            Add a method to manipulate the state (=> an event-handler method)
          </li>
          <li>
            Pass the event-handler method reference to the UserInput component
            and bind it to the input-change event
          </li>
          <li>
            Ensure that the new input entered by the user overwrites the old
            username passed to UserOutput
          </li>
          <li>
            Add two-way-binding to your input (in UserInput) to also display the
            starting username
          </li>
          <li>
            Add styling of your choice to your components/ elements in the
            components - both with inline styles and stylesheets
          </li>
        </ol>
        <UserInput
          info="this username was hard coded"
          userName="nogoodname"
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
      </div>
    );
  }
}

export default App;
