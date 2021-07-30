import React from "react";

import propTypes from "prop-types";

import "./index.scss";

const Star = ({ className, value, height, width, spacing }) => {
  const decimal = Number(value) % 1;

  const star = [];
  let leftPos = 0;

  for (let index = 0; index < 5 && index < value - decimal; index++) {
    leftPos = leftPos + spacing;
    star.push(
      <div
        className="star"
        key={`star-${index}`}
        style={{ left: index * spacing, height, width, marginRight: spacing }}
      ></div>
    );
  }
  if (decimal > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`starWithDecimal`}
        style={{ left: leftPos, height, width: decimal * width - spacing }}
      ></div>
    );
  }

  const starPlaceholder = [];
  for (let index = 0; index < 5; index++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`star-placeholder-${index}`}
        style={{ left: index * spacing, height, width, marginRight: spacing }}
      ></div>
    );
  }
  return (
    <>
      <div className={["stars", className].join(" ")} style={{ height }}>
        {starPlaceholder}
        <div style={{ position: "absolute" }}>{star}</div>
      </div>
    </>
  );
};

export default Star;

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  height: propTypes.number,
  width: propTypes.number,
  spacing: propTypes.number,
};
