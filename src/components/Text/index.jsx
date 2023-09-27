import React from "react";

const sizeClasses = {
  txtPoppinsBold16: "font-bold font-poppins",
  txtPoppinsLight14: "font-light font-poppins",
  txtPoppinsLight12: "font-light font-poppins",
  txtPoppinsBold18: "font-bold font-poppins",
  txtPoppinsLight16: "font-light font-poppins",
  txtPoppinsRegular12Bluegray300: "font-normal font-poppins",
  txtPoppinsRegular14Black90099: "font-normal font-poppins",
  txtPoppinsBold10: "font-bold font-poppins",
  txtPoppinsRegular14: "font-normal font-poppins",
  txtPoppinsSemiBold13: "font-poppins font-semibold",
  txtPoppinsRegular10: "font-normal font-poppins",
  txtPoppinsSemiBold14: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsRegular13: "font-normal font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtPoppinsSemiBold32: "font-poppins font-semibold",
  txtPoppinsRegular13Bluegray300: "font-normal font-poppins",
  txtPoppinsSemiBold12: "font-poppins font-semibold",
  txtPoppinsSemiBold18: "font-poppins font-semibold",
  txtPoppinsMedium38: "font-medium font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
