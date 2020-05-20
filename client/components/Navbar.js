import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = props => {
  return (
    <nav>
      <NavLink to="/home">Town</NavLink>
      <NavLink to="/tasks">Tasks</NavLink>
      <NavLink to="/rewards">Rewards</NavLink>
      <NavLink to="/market">Market</NavLink>
      <NavLink to="/social">Social</NavLink>
      <NavLink to="/help">About</NavLink>
    </nav>
  )
}

export default Navbar;