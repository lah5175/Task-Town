import React from 'react';
import {connect} from 'react-router-dom';

class TaskView extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="task-container">
        <div className="task-list">
          <h1>Tasks</h1> 
        </div>
        <div className="task-list">
          <h1>Repeatables</h1>
        </div>
        <div className="task-list">
          <h1>To Dos</h1>
        </div>
      </div>
    )
  }
}

export default TaskView;