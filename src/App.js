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
              {/* full name */}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="name">
                  Full Name
        </label>
                <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name"
                  name="name"
                />
                {/* password */}
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">
                  Password
        </label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter password"
                  name="password"
                />
              </div>
              {/* Email */}
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">
                  Email
        </label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter email"
                  name="email"
                />

              </div>
              <div>
              <label className="FormField__CheckboxLabel">
                <input className="FormField__Checkbox" type="checkbox"
                  name="hasAgreed" />I agree all statement in <a
                    href="" className="FormField__TermsLink"
                  >term of services</a>
              </label>
              </div>
              <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button> <a href="#"
            className="FormField__Link">I'm already member</a>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
