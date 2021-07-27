import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const Button = (props) => {
  const className = [props.className];
  props.isPrimary && className.push("btn-primary");
  props.isLarge && className.push("btn-lg");
  props.isSmall && className.push("btn-sm");
  props.isBlock && className.push("btn-block");
  props.hasShadow && className.push("btn-shadow");

  const onClick = () => {
    props.onClick && props.onClick();
  };

  if (props.isDisabled || props.isLoading) {
    props.isDisabled && className.push("disabled");
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          <>
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
          </>
        ) : (
          props.children
        )}
      </span>
    );
  }

  if (props.type === "link") {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
          target={props.target === "_blank" ? "_blank" : undefined}
        >
          {props.children}
        </a>
      );
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  isExternal: propTypes.bool,
  hasShadow: propTypes.bool,
};
