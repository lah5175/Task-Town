import React from 'react';

const DailyForm = props => {
  return (
    <form id="add-daily-form" onSubmit={props.handleSubmit}>
      <label htmlFor="name">Task Name</label>
      <input type="text" name="name" onChange={props.handleChange} value={props.name} />

      <label htmlFor="description">Description</label>
      <textarea name="description" onChange={props.handleChange} value={props.description} />

      <button type="submit">Submit</button>
    </form>
  )
}

export default DailyForm;