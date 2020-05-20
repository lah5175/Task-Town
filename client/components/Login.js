import React from 'react';
import {connect} from 'react-redux';
import {login} from '../store';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const {username, password} = this.state;
    this.props.login(username, password);

    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <form id="auth-form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username or Email</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </div>

        <button type="submit">Log In</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  login: (user, password) => dispatch(login(user, password))
})

export default connect(null, mapDispatchToProps)(Login);