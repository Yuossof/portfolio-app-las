import React from "react";
import "./rateme.css";
const Rateme = () => {
  return (
    <div className="contOfRate" id="rt">
      <div className="d">
        <div>
          <span className="rateText">Rate Me</span>
        </div>
        <div className="rating">
          <input
            type="radio"
            id="star-1"
            name="star-radio"
            defaultValue="star-1"
          />
          <label htmlFor="star-1">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                pathLength={360}
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
              />
            </svg>
          </label>
          <input
            type="radio"
            id="star-2"
            name="star-radio"
            defaultValue="star-1"
          />
          <label htmlFor="star-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                pathLength={360}
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
              />
            </svg>
          </label>
          <input
            type="radio"
            id="star-3"
            name="star-radio"
            defaultValue="star-1"
          />
          <label htmlFor="star-3">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                pathLength={360}
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
              />
            </svg>
          </label>
          <input
            type="radio"
            id="star-4"
            name="star-radio"
            defaultValue="star-1"
          />
          <label htmlFor="star-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                pathLength={360}
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
              />
            </svg>
          </label>
          <input
            type="radio"
            id="star-5"
            name="star-radio"
            defaultValue="star-1"
          />
          <label htmlFor="star-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                pathLength={360}
                d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
              />
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Rateme;
