import React from 'react';
import {connect} from 'react-redux';
import TaskBox from './ListComponents/TaskBox';
import { fetchTasks } from '../store';

class TaskView extends React.Component {
  constructor() {
    super();

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  componentDidMount() {
    this.props.fetchTasks(this.props.userId);
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
          {
            this.props.tasks.length &&
            this.props.tasks.map(task => <TaskBox key={`task${task.id}`} task={task} />)
          }
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

const mapStateToProps = state => ({
  tasks: state.task,
  userId: state.user.id
})

const mapDispatchToProps = dispatch => ({
  fetchTasks: userId => dispatch(fetchTasks(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskView);