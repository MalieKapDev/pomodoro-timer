import React from "react";
import PropTypes from "prop-types";

const LengthControl = ({ title, value, onIncrement, onDecrement }) => {
  const lowerCaseTitle = title.toLowerCase();

  return (
    <div className="row">
      <button
        className="col btn-level"
        id={`${lowerCaseTitle}-decrement`}
        onClick={onDecrement}
        aria-label={`Decrease ${title} Length`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-arrow-down-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
        </svg>
      </button>
      <div
        className="col length-control-heading mt-3 mb-3"
        id={`${lowerCaseTitle}-label`}
      >
        {title} Length
        <div
          className="length-control-heading mt-3"
          id={`${lowerCaseTitle}-length`}
          role="status"
        >
          {value}
        </div>
      </div>

      <button
        className="col btn-level"
        id={`${lowerCaseTitle}-increment`}
        onClick={onIncrement}
        aria-label={`Increase ${title} Length`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-arrow-up-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
        </svg>
      </button>
    </div>
  );
};

LengthControl.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};

export default LengthControl;
