import React from "react";

import { Button, Img, List, Text } from "components";

const CatalogOneColumnFiftyOne = (props) => {
  return (
    <>
      <div className={props.className}>
        <List
          className="sm:flex-col flex-row md:gap-10 gap-[130px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 mr-[161px] mt-[15px] w-[66%]"
          orientation="horizontal"
        >
          <div className="flex flex-col gap-6 items-center justify-start w-auto">
            <Button
              className="flex h-[65px] items-center justify-center rounded-[32px] w-[65px]"
              color="blue_A700"
              size="lg"
              variant="fill"
            >
              <Img
                className="h-[29px]"
                src="images/img_bxbxsupport.svg"
                alt="bxbxsupport"
              />
            </Button>
            <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
              <Text
                className="text-black-900_01 text-center text-lg w-auto"
                size="txtPoppinsBold18"
              >
                {props?.amazingsavings}
              </Text>
              <Text
                className="leading-[140.00%] max-w-[265px] md:max-w-full text-black-900_99 text-center text-sm"
                size="txtPoppinsRegular14Black90099"
              >
                {props?.offer}
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-auto">
            <Button
              className="flex h-[65px] items-center justify-center rounded-[32px] w-[65px]"
              color="blue_A700"
              size="lg"
              variant="fill"
            >
              <Img
                className="h-[30px]"
                src="images/img_riaccountpincirclefill.svg"
                alt="riaccountpincir"
              />
            </Button>
            <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
              <Text
                className="text-black-900_01 text-center text-lg w-auto"
                size="txtPoppinsBold18"
              >
                {props?.amazingsavings}
              </Text>
              <Text
                className="leading-[140.00%] max-w-[265px] md:max-w-full text-black-900_99 text-center text-sm"
                size="txtPoppinsRegular14Black90099"
              >
                {props?.offer}
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-auto">
            <Button
              className="flex h-[65px] items-center justify-center rounded-[32px] w-[65px]"
              color="blue_A700"
              size="lg"
              variant="fill"
            >
              <Img
                className="h-[26px]"
                src="images/img_entypopricetag.svg"
                alt="entypopricetag"
              />
            </Button>
            <div className="flex flex-col gap-[13px] items-center justify-start w-auto">
              <Text
                className="text-black-900_01 text-center text-lg w-auto"
                size="txtPoppinsBold18"
              >
                {props?.amazingsavings}
              </Text>
              <Text
                className="leading-[140.00%] max-w-[265px] md:max-w-full text-black-900_99 text-center text-sm"
                size="txtPoppinsRegular14Black90099"
              >
                {props?.offer}
              </Text>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

CatalogOneColumnFiftyOne.defaultProps = {
  productsupport: "Amazing Savings",
  duration: "Up to 70% off new Products, you can be sure of the best price.",
  personalaccountOne: "Amazing Savings",
  withbigdiscountOne:
    "Up to 70% off new Products, you can be sure of the best price.",
  amazingsavings: "Amazing Savings",
  offer: "Up to 70% off new Products, you can be sure of the best price.",
};

export default CatalogOneColumnFiftyOne;
