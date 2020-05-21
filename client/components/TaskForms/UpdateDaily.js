import React from 'react';
import {connect} from 'react-redux';
import {updateTaskThunk} from '../../store';
import {DailyForm} from './DailyForm';

class UpdateDaily extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.props.task.name,
      description: this.props.task.description
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateTask({...this.state, id: this.props.task.id});
  }

  render() {
    return (
      <DailyForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    )
  }
}

const mapStateToProps = state => ({
  task: state.task
})

const mapDispatchToProps = dispatch => ({
  updateTask: (userId, task) => dispatch(updateTaskThunk(userId, task))
})

export default connect(mapStateToProps, mapDispatchToProps)(UpdateDaily);