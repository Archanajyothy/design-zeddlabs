import React from "react";

import { Img, Text } from "components";

const CatalogOneRowgroup142 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="bg-white-A700 h-[50px] justify-center max-w-[677px] md:max-w-full pl-1 sm:pr-5 pr-[35px] py-3.5 text-[13px] text-blue_gray-300 w-full"
          size="txtPoppinsRegular13Bluegray300"
        >
          {props?.itemstext}
        </Text>
        <div className="border-2 border-blue_gray-100 border-solid flex flex-row gap-[15px] items-center justify-end p-3 rounded-sm">
          <Text
            className="text-[13px] text-black-900_01 text-center"
            size="txtPoppinsSemiBold13"
          >
            {props?.sortbytext}
          </Text>
          <Img
            className="h-4 w-[15px]"
            src="images/img_frame97_black_900_01.svg"
            alt="frameNinetySeven_One"
          />
        </div>
        <div className="border-2 border-blue_gray-100 border-solid flex flex-row gap-[7px] items-center justify-end p-[13px] rounded-sm">
          <Text
            className="text-[13px] text-black-900_01 text-center"
            size="txtPoppinsSemiBold13"
          >
            {props?.showtext}
          </Text>
          <Img
            className="h-4 w-4"
            src="images/img_frame97_black_900_01.svg"
            alt="frameNinetySeven_Two"
          />
        </div>
        <Img
          className="h-[50px]"
          src="images/img_group143.svg"
          alt="group143"
        />
      </div>
    </>
  );
};

CatalogOneRowgroup142.defaultProps = {
  itemstext: "Items 1-35 of 61",
  sortbytext: "Sort By: Position",
  showtext: "Show: 35 per page",
};

export default CatalogOneRowgroup142;
