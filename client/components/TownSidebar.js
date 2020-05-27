import React from 'react';
import {connect} from 'react-redux';

class TownSidebar extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="town-sidebar">
        <h2>Structures</h2>
        <div id="town-buildings"></div>
      </div>
    )
  }
}

export default TownSidebar;