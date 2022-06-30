import React from 'react'

function Input(props) {
  return (
      <div className="form-group mb-3">
          <label htmlFor={props.label_id}>{props.label}</label>
          <input
              id={props.label_id}
              className="form-control"
              type={props.type}
              {...props}
          />
      </div>
  );
}

export default Input