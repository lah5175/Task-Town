import React from 'react';
import {connect} from 'react-redux';
import { updateTaskThunk } from '../../store';

class TaskBox extends React.Component {
  constructor() {
    super();

    this.updateCompletion = this.updateCompletion.bind(this);
  }

  updateCompletion() {
    const updatedTask = {...this.props.task};
    updatedTask.complete = !updatedTask.complete;
    this.props.updateTask(updatedTask);
  }

  render() {
    const task = this.props.task;

    return (
      <div className="task-box">
        <p>{task.name}</p>
        <input type="checkbox" defaultChecked={task.complete} onClick={this.updateCompletion} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateTask: task => dispatch(updateTaskThunk(task))
})

export default connect(null, mapDispatchToProps)(TaskBox);