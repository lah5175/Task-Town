// This component serves as an overlay so that forms appear
// on top of the UI once the button is pressed

import React from 'react';
import {ADD_DAILY_FORM, UPDATE_DAILY_FORM} from '../FormConstants';
import AddDaily from './AddDaily';
import UpdateDaily from './UpdateDaily';

const FormOverlay = props => {
  const dismissOverlay = event => {
    if (event.target.className === "form-overlay") {
      props.history.push('/tasks')
    }
  }

  switch (props.formType) {
    case ADD_DAILY_FORM:
      return (
        <div className="form-overlay" onClick={dismissOverlay}>
          <h1>Add Task</h1>
          <AddDaily />
        </div>
      );
    case UPDATE_DAILY_FORM:
      return (
        <div className="form-overlay" onClick={dismissOverlay}>
          <UpdateDaily />
        </div>
      );
    default:
      return (<div />);
  }
}

export default FormOverlay;