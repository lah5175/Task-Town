import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {UnauthHome, Main} from './components';
import {me} from './store';
import FormOverlay from './components/TaskForms/FormOverlay';
import {ADD_DAILY_FORM} from './components/FormConstants';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData()
  }

  render() {
    if (!this.props.isLoggedIn) {
      return (
        <Route path="/" component={UnauthHome} />
      )
    }
    else {
      return (
        <div id="routes">
          <Route path="/tasks/add" render={routeProps => <FormOverlay {...routeProps} formType={ADD_DAILY_FORM} />} />
          <Route path="/" component={Main} />
        </div>
      )
    }
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
