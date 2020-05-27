import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../store';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

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
        <div id="header-content">
          <div id="header-logo">
            <Link to="/home"><h1>Task Town</h1></Link>
            <div id="resources">
              <p>Gold: {this.props.user.gold}</p>
              <p>Wood: {this.props.user.wood}</p>
              <p>Stone: {this.props.user.stone}</p>
            </div>
          </div>
          <div id="header-btns">
            <button type="button" onClick={this.handleLogout}>Log Out</button>
          </div>
        </div>
        <Navbar />
      </header>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);