import React from 'react';
import {connect} from 'react-redux';
import {addTaskThunk} from '../../store';
import DailyForm from './DailyForm';

class AddDaily extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTask(this.props.userId, this.state);
    this.setState({
      name: '',
      description: ''
    })
  }

  render() {
    return (
      <DailyForm {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    )
  }
}

const mapStateToProps = state => ({
  userId: state.user.id
})

const mapDispatchToProps = dispatch => ({
  addTask: (userId, task) => dispatch(addTaskThunk(userId, task))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddDaily);