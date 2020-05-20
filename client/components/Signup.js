import React from 'react';
import {connect} from 'react-redux';
import {signup} from '../store';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
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
    const {username, email, password} = this.state;
    this.props.signup(username, email, password);

    this.setState({
      username: '',
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <form id="auth-form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        </div>

        <button type="submit">Sign Up</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (username, email, password) => dispatch(signup(username, email, password))
})

export default connect(null, mapDispatchToProps)(Signup);