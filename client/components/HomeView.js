import React from 'react';
import TownContainer from './TownContainer';
import TownSidebar from './TownSidebar';

const HomeView = props => {
  return (
    <div id="main-container">
      <TownContainer />
      <TownSidebar />
    </div>
  )
}

export default HomeView;