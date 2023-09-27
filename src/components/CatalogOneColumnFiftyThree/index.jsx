import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const CatalogOneColumnFiftyThree = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-black-900_02 flex flex-col items-center justify-end p-[17px] w-full">
          <div className="flex flex-col items-start justify-start mt-[30px] w-3/4 md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700"
                    size="txtPoppinsMedium38"
                  >
                    {props?.signuptoournewsOne}
                  </Text>
                  <Text
                    className="ml-0.5 md:ml-[0] text-base text-center text-white-A700"
                    size="txtPoppinsLight16"
                  >
                    {props?.bethefirstto}
                  </Text>
                </div>
                <Input
                  name="groupOne"
                  placeholder="Your Email"
                  className="!placeholder:text-white-A700 !text-white-A700 font-light font-poppins p-0 text-center text-sm w-full"
                  wrapClassName="border-2 border-solid border-white-A700 md:flex-1 mb-1.5 md:ml-[0] ml-[333px] md:mt-0 mt-6 w-[28%] md:w-full"
                  shape="round"
                  color="black_900_01"
                  size="xs"
                  variant="fill"
                ></Input>
                <Button
                  className="cursor-pointer font-poppins font-semibold leading-[normal] mb-1.5 min-w-[151px] md:ml-[0] ml-[23px] md:mt-0 mt-6 rounded-[25px] text-center text-sm"
                  color="blue_A700"
                  size="md"
                  variant="fill"
                >
                  {props?.subscribe}
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[78px] items-start justify-start ml-0.5 md:ml-[0] mt-[39px] w-[96%] md:w-full">
              {props?.descriptionTwo}
              {props?.descriptionThree}
              {props?.descriptionFour}
              {props?.descriptionFive}
              {props?.descriptionSix}
            </div>
            <Line className="bg-white-A700_6c h-px ml-0.5 md:ml-[0] mt-9 w-full" />
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[17px] w-full">
              <Img
                className="h-[22px] w-[22px]"
                src="images/img_antdesignfacebookfilled.svg"
                alt="antdesignfacebo_One"
              />
              <Img
                className="h-[22px] md:ml-[0] ml-[11px] w-[22px]"
                src="images/img_antdesigninstagramfilled.svg"
                alt="antdesigninstag_One"
              />
              <Img
                className="h-[21px] md:ml-[0] ml-[539px]"
                src="images/img_group103.svg"
                alt="group103"
              />
              <Text
                className="md:ml-[0] ml-[407px] md:mt-0 mt-[3px] text-right text-white-A700_90 text-xs"
                size="txtPoppinsMedium12"
              >
                {props?.copyright2020}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CatalogOneColumnFiftyThree.defaultProps = {
  signuptoournewsOne: "Sign Up To Our Newsletter.",
  bethefirstto: "Be the first to hear about the latest offers.",
  subscribe: "Subscribe",
  descriptionTwo: (
    <Text
      className="leading-[132.50%] md:mt-0 mt-1 text-sm text-white-A700 w-[13%] sm:w-full"
      size="txtPoppinsLight14"
    >
      <span className="text-white-A700_7f font-poppins text-left font-bold">
        <>
          Information
          <br />
        </>
      </span>
      <span className="text-white-A700 font-poppins text-left font-bold">
        <>
          <br />
        </>
      </span>
      <span className="text-white-A700 font-poppins text-left text-[13px] font-normal">
        <>
          About Us
          <br />
          About Zip
          <br />
          Privacy Policy
          <br />
          Search
          <br />
          Terms
          <br />
          Orders and Returns
          <br />
          Contact Us
          <br />
          Advanced Search
          <br />
          Newsletter Subscription
        </>
      </span>
    </Text>
  ),
  descriptionThree: (
    <Text
      className="leading-[135.00%] md:mt-0 mt-1 text-sm text-white-A700 w-[18%] sm:w-full"
      size="txtPoppinsLight14"
    >
      <span className="text-white-A700_7f font-poppins text-left font-bold">
        <>
          PC Parts
          <br />
          <br />
        </>
      </span>
      <span className="text-white-A700 font-poppins text-left text-[13px] font-normal">
        <>
          CPUS
          <br />
          Add On Cards
          <br />
          Hard Drives (Internal)
          <br />
          Graphic Cards
          <br />
          Keyboards / Mice
          <br />
          Cases / Power Supplies / Cooling
          <br />
          RAM (Memory)
          <br />
          Software
          <br />
          Speakers / Headsets
          <br />
          Motherboards
        </>
      </span>
    </Text>
  ),
  descriptionFour: (
    <Text
      className="leading-[132.50%] text-sm text-white-A700 w-[11%] sm:w-full"
      size="txtPoppinsLight14"
    >
      <span className="text-white-A700_7f font-poppins text-left font-bold">
        <>
          Desktop PCs
          <br />
        </>
      </span>
      <span className="text-white-A700 font-poppins text-left font-bold">
        <>
          <br />
        </>
      </span>
      <span className="text-white-A700 font-poppins text-left text-[13px] font-normal">
        <>
          Custom PCs
          <br />
          Servers
          <br />
          MSI All-In-One PCs
          <br />
          HP/Compaq PCs
          <br />
          ASUS PCs
          <br />
          Tecs PCs
        </>
      </span>
    </Text>
  ),
  descriptionFive: (
    <Text
      className="leading-[132.50%] text-sm text-white-A700 w-[15%] sm:w-full"
      size="txtPoppinsLight14"
    >
      <span className="text-white-A700_7f font-poppins text-left font-bold">
        <>
          Laptops
          <br />
        </>
      </span>
      <span className="text-white-A700 font-poppins text-left font-bold">
        <>
          <br />
        </>
      </span>
      <span className="text-white-A700 font-poppins text-left text-[13px] font-normal">
        <>
          Evryday Use Notebooks
          <br />
          MSI Workstation Series
          <br />
          MSI Prestige Series
          <br />
          Tablets and Pads
          <br />
          Netbooks
          <br />
          Infinity Gaming Notebooks
        </>
      </span>
    </Text>
  ),
  descriptionSix: (
    <Text
      className="leading-[132.50%] text-sm text-white-A700 w-[23%] sm:w-full"
      size="txtPoppinsLight14"
    >
      <span className="text-white-A700_7f font-poppins text-left font-bold">
        <>
          Address
          <br />
        </>
      </span>
      <span className="text-white-A700 font-poppins text-left font-bold">
        <>
          <br />
        </>
      </span>
      <span className="text-white-A700 font-poppins text-left text-[13px] font-normal">
        <>
          Address: 1234 Street Adress City Address, 1234
          <br />
          Phones:{" "}
        </>
      </span>
      <span className="text-light_blue-500 font-poppins text-left text-[13px] font-normal">
        <>
          (00) 1234 5678
          <br />
        </>
      </span>
      <span className="text-white-A700 font-poppins text-left text-[13px] font-normal">
        <>
          We are open: Monday-Thursday: 9:00 AM - 5:30 PM
          <br />
          Friday: 9:00 AM - 6:00 PM
          <br />
          Saturday: 11:00 AM - 5:00 PM
          <br />
          E-mail:{" "}
        </>
      </span>
      <span className="text-light_blue-500 font-poppins text-left text-[13px] font-normal">
        shop@email.com
      </span>
    </Text>
  ),
  copyright2020: "Copyright © 2020 Shop Pty. Ltd.",
};

export default CatalogOneColumnFiftyThree;
