import React from "react";
import PropTypes from "prop-types";

const shapes = { square: "rounded-none", round: "rounded-[18px]" };
const variants = {
  outline: {
    blue_A700: "border-2 border-blue-A700 border-solid text-blue-A700",
    blue_gray_300:
      "border-2 border-blue_gray-300 border-solid text-blue_gray-300",
  },
  fill: {
    white_A700: "bg-white-A700",
    gray_50: "bg-gray-50 text-black-900_01",
    blue_A700: "bg-blue-A700 text-white-A700",
  },
};
const sizes = { xs: "p-[5px]", sm: "p-2", md: "p-3.5", lg: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "blue_A700",
    "blue_gray_300",
    "white_A700",
    "gray_50",
  ]),
};

export { Button };
