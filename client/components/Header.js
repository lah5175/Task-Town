import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../store';

class Header extends React.Component {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    return (
      <header>
        <button type="button" onClick={this.handleLogout}>Log Out</button>
      </header>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(Header);