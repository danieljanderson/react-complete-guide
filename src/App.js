import React, { Component } from 'react';
import Person from './Person/Person';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>This is really working!</p>
        <Person name="Max" age="28"></Person>
        <Person name="Manu" age="29">
          My Hobbies: Racing
        </Person>
        <Person name="Stephanie" age="26"></Person>
      </div>
    );
  }
}

export default App;
