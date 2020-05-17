import React from 'react';
import Signup from './Signup';
import Login from './Login';

class UnauthHome extends React.Component {
  constructor() {
    super();
    this.state = {
      signup: false
    }

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({
      signup: event.target.name === "signup"
    })
  }

  render() {
    return (
      <div id="unauth-home">
        <div id="unauth-home-left"></div>
        <div id="unauth-home-right">
          <h1>Welcome to Task Town!</h1>
          <h2>Build your own virtual town by completing real-life goals!</h2>
          <h2>For more information, check out the Virtual Tour!</h2>
  
          <div id="unauth-home-auth">
            <div id="unauth-home-btns">
              <button type="button" className={this.state.signup ? '' : 'selected'} name="login" onClick={this.handleToggle}>Log In</button>
              <button type="button" className={this.state.signup ? 'selected' : ''} name="signup" onClick={this.handleToggle}>Sign Up</button>
            </div>
            {
              this.state.signup
              ? <Signup />
              : <Login />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default UnauthHome;