import React from "react";

import { Img, Text } from "components";

const CatalogOneColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white-A700 flex flex-col items-start justify-start sm:px-5 px-[25px] w-auto md:w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-end p-1 w-[39%] md:w-full">
            <div className="flex flex-row gap-[5px] items-center justify-start w-[86%] md:w-full">
              <div className="bg-green-400 flex flex-col h-2.5 items-center justify-end my-0.5 p-[3px] rounded-[50%] w-2.5">
                <Img
                  className="h-[3px] w-1"
                  src="images/img_vector11.svg"
                  alt="vectorEleven"
                />
              </div>
              <Text
                className="text-[10px] text-center text-green-400"
                size="txtPoppinsRegular10"
              >
                {props?.instock}
              </Text>
            </div>
          </div>
          <Img
            className="h-[150px] md:h-auto object-cover w-full"
            alt="imageTwentyNine"
            src="props?.productimage"
          />
          <div className="flex flex-row gap-[9px] items-start justify-start py-[3px] w-[83%] md:w-full">
            <div className="flex flex-row items-center justify-evenly mt-1.5 w-[49%]">
              <div className="flex flex-col h-[13px] items-center justify-start w-[13px]">
                <Img
                  className="h-[13px] rounded-bl-[1px] rounded-br-[1px] w-[13px]"
                  src="images/img_star1_3.svg"
                  alt="starOne_Four"
                />
              </div>
              <div className="flex flex-col h-[13px] items-center justify-start w-[13px]">
                <Img
                  className="h-[13px] rounded-bl-[1px] rounded-br-[1px] w-[13px]"
                  src="images/img_star1_3.svg"
                  alt="starOne_Four"
                />
              </div>
              <div className="flex flex-col h-[13px] items-center justify-start w-[13px]">
                <Img
                  className="h-[13px] rounded-bl-[1px] rounded-br-[1px] w-[13px]"
                  src="images/img_star1_3.svg"
                  alt="starOne_Four"
                />
              </div>
              <div className="flex flex-col h-[13px] items-center justify-start w-[13px]">
                <Img
                  className="h-[13px] rounded-bl-[1px] rounded-br-[1px] w-[13px]"
                  src="images/img_star1_3.svg"
                  alt="starOne_Four"
                />
              </div>
              <div className="flex flex-col h-[13px] items-center justify-start w-[13px]">
                <Img
                  className="h-[13px] rounded-bl-[1px] rounded-br-[1px] w-[13px]"
                  src="images/img_star1_3.svg"
                  alt="starOne_Four"
                />
              </div>
            </div>
            <Text
              className="mt-[3px] text-blue_gray-300 text-center text-xs"
              size="txtPoppinsRegular12Bluegray300"
            >
              {props?.reviewscount}
            </Text>
          </div>
          <Text
            className="max-w-[185px] md:max-w-full text-[13px] text-black-900_01"
            size="txtPoppinsRegular13"
          >
            {props?.productdescription}
          </Text>
          {props?.productprice}
        </div>
      </div>
    </>
  );
};

CatalogOneColumn.defaultProps = {
  instock: "in stock",
  productimage: "images/img_image29.png",
  reviewscount: "Reviews (4)",
  productdescription:
    "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
  productprice: (
    <Text
      className="leading-[140.00%] max-w-[184px] md:max-w-full text-black-900_01 text-lg"
      size="txtPoppinsSemiBold18"
    >
      <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
        <>
          $499.00
          <br />
        </>
      </span>
      <span className="text-black-900_01 font-poppins text-left font-semibold">
        $499.00
      </span>
    </Text>
  ),
};

export default CatalogOneColumn;
