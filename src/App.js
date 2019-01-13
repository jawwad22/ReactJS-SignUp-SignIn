import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='App__Aside'></div>
        <div className='App__Form'>
          <div className="PageSwitcher">
            <a href="#" className="PageSwitcher__Item">Sign In</a>
            <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
          </div>
        <div className="FormTitle">
        <a href="#" className="FormTitle__Link">Sign In</a> or <a href="#"
        className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
        </div>

        <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
        <div className="FormField">
        <label className="FormField__Label" htmlFor="name">
          Full Name
        </label>
        <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name"
        name="name"
        />

        </div>

        </form>

        </div>
        </div>
      </div>
    );
  }
}

export default App;
