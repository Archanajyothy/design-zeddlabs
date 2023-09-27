import React from "react";

import { Button, Img } from "components";

const CatalogOneRowcustomPcs24 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[173px] rounded-sm"
          rightIcon={
            <Img
              className="h-5 mb-px ml-[5px]"
              src="images/img_close.svg"
              alt="close"
            />
          }
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="!text-black-900_01 font-poppins font-semibold text-[13px] text-left">
            {props?.custompcs24}
          </div>
        </Button>
        <Button
          className="border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[204px] ml-1.5 sm:ml-[0] rounded-sm"
          rightIcon={
            <Img
              className="h-5 mb-px ml-[7px]"
              src="images/img_close.svg"
              alt="close"
            />
          }
          color="white_A700"
          size="sm"
          variant="fill"
        >
          <div className="!text-black-900_01 font-poppins font-semibold text-[13px] text-left">
            {props?.hpcompaqpcs24}
          </div>
        </Button>
        <Button
          className="!text-black-900_01 border border-blue_gray-100 border-solid cursor-pointer font-poppins font-semibold min-w-[91px] ml-2 sm:ml-[0] rounded-sm text-[13px] text-center"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          {props?.clearalltext}
        </Button>
      </div>
    </>
  );
};

CatalogOneRowcustomPcs24.defaultProps = {
  custompcs24: "CUSTOM PCS (24)",
  hpcompaqpcs24: "HP/COMPAQ PCS (24)",
  clearalltext: "Clear All",
};

export default CatalogOneRowcustomPcs24;
