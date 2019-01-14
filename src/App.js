import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from
  'react-router-dom';
  import SignUpForm from './pages/Sign-Up'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className='App__Aside'></div>
          <div className='App__Form'>
            <div className="PageSwitcher">
              <a href="#" className="PageSwitcher__Item">Sign In</a>
              <a href="#" className="PageSwitcher__Item PageSwitcher__Item--Active">Sign Up</a>
            </div>
            <div className="FormTitle">
              <a href="/" className="FormTitle__Link">Sign In</a> or <a href="/sign-in"
                className="FormTitle__Link FormTitle__Link--Active">Sign Up</a>
            </div>
<Route exact path="/sign-in" component={SignUpForm}>
         
            </Route>
            <Route path="sign-in">
            <h1>Hello WOrld</h1>
            </Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
