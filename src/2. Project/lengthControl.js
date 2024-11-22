import React from "react";

const LengthControl = ({ title, value, onIncrement, onDecrement }) => (
  <div className="length-control">
    <div id={`${title.toLowerCase()}-label`}>{title}</div>
    <button className="btn-level" onClick={onDecrement}>
      <i className="fa fa-arrow-down fa-2x" />
    </button>
    <div id={`${title.toLowerCase()}-length`}>{value}</div>
    <button className="btn-level" onClick={onIncrement}>
      <i className="fa fa-arrow-up fa-2x" />
    </button>
  </div>
);

export default LengthControl;
