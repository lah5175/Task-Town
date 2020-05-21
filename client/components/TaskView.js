import React from 'react';
import {connect} from 'react-router-dom';

class TaskView extends React.Component {
  constructor() {
    super();

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask() {
    this.props.history.push('/tasks/add');
  }

  render() {
    return (
      <div id="task-container">
        <div className="task-list">
          <div className="task-header">
            <h1>Tasks</h1>
            <button type="button" className="add-task-btn noselect" onClick={this.handleAddTask}>+</button>
          </div>
        </div>
        <div className="task-list">
          <div className="task-header">
            <h1>Repeatables</h1>
            <button type="button" className="add-task-btn noselect">+</button>
          </div>
        </div>
        <div className="task-list">
          <div className="task-header">
            <h1>To Dos</h1>
            <button type="button" className="add-task-btn noselect">+</button>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskView;