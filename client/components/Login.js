import React from 'react';
import AuthForm from './AuthForm';

class Login extends React.Component {
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
    this.setState({
      username: '',
      email: '',
      password: ''
    })
  }

  render() {
    return (
      <AuthForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} {...this.state} />
    )
  }
}

export default Login;