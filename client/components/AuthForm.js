import React from 'react';

const AuthForm = props => {
  return (
    <form id="auth-form" onSubmit={props.handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={props.username} onChange={props.handleChange} />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" value={props.email} onChange={props.handleChange} />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={props.password} onChange={props.handleChange} />
      </div>

      <button type="submit">{props.submitType}</button>
    </form>
  )
}

export default AuthForm;