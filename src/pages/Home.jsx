import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import CatalogOneColumn from "components/CatalogOneColumn";
import CatalogOneColumnFiftyOne from "components/CatalogOneColumnFiftyOne";
import CatalogOneColumnFiftyThree from "components/CatalogOneColumnFiftyThree";
import CatalogOneRowcustomPcs24 from "components/CatalogOneRowcustomPcs24";
import CatalogOneRowgroup142 from "components/CatalogOneRowgroup142";

const Home = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="h-60 sm:h-[137px] md:h-[770px] md:px-5 relative w-full">
            <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[73%]">
              <Img
                className="h-[104px] md:h-auto object-cover w-full"
                src="images/img_image26.png"
                alt="imageTwentySix"
              />
            </div>
            <header className="absolute flex flex-col inset-x-[0] items-center justify-center mx-auto top-[0] w-full">
              <div className="bg-black-900 flex flex-1 md:flex-col flex-row md:gap-5 items-start justify-start p-[9px] w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[249px] md:mt-0 mt-[3px] w-[11%] md:w-full">
                  <div className="flex flex-row gap-1.5 items-start justify-between w-full">
                    <Text
                      className="text-white-A700 text-xs"
                      size="txtPoppinsSemiBold12"
                    >
                      Mon-Thu: 9:00 AM - 5:30 PM
                    </Text>
                    <Img
                      className="h-3.5 mt-0.5"
                      src="images/img_frame97.svg"
                      alt="frameNinetySeven"
                    />
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-end justify-start md:ml-[0] ml-[292px] md:mt-0 mt-1 w-[23%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Text
                      className="text-center text-white-A700 text-xs"
                      size="txtPoppinsSemiBold12"
                    >
                      Visit our showroom in 1234 Street Adress City Address,
                      1234 Contact Us
                    </Text>
                  </div>
                  <Line className="bg-white-A700 h-0.5 w-[16%]" />
                </div>
                <Text
                  className="md:ml-[0] ml-[284px] md:mt-0 mt-[5px] text-center text-white-A700 text-xs"
                  size="txtPoppinsSemiBold12"
                >
                  Call Us: (00) 1234 5678
                </Text>
                <Img
                  className="h-5 ml-3.5 md:ml-[0] md:mt-0 mt-1 w-5"
                  src="images/img_antdesignfacebookfilled.svg"
                  alt="antdesignfacebo"
                />
                <Img
                  className="h-5 ml-2 md:ml-[0] md:mt-0 mt-1 w-5"
                  src="images/img_antdesigninstagramfilled.svg"
                  alt="antdesigninstag"
                />
              </div>
              <div className="bg-white-A700 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-start p-[11px] w-full">
                <Img
                  className="h-[69px] md:ml-[0] ml-[244px]"
                  src="images/img_logo.svg"
                  alt="logo"
                />
                <Text
                  className="md:ml-[0] ml-[34px] text-black-900_01 text-center text-sm"
                  size="txtPoppinsSemiBold14"
                >
                  Laptops
                </Text>
                <Text
                  className="ml-7 md:ml-[0] text-black-900_01 text-center text-sm"
                  size="txtPoppinsSemiBold14"
                >
                  Desktop PCs
                </Text>
                <Text
                  className="md:ml-[0] ml-[25px] text-black-900_01 text-center text-sm"
                  size="txtPoppinsSemiBold14"
                >
                  Networking Devices
                </Text>
                <Text
                  className="md:ml-[0] ml-[25px] text-black-900_01 text-center text-sm"
                  size="txtPoppinsSemiBold14"
                >
                  Printers & Scanners
                </Text>
                <Text
                  className="md:ml-[0] ml-[25px] text-black-900_01 text-center text-sm"
                  size="txtPoppinsSemiBold14"
                >
                  <>PC Parts</>
                </Text>
                <Text
                  className="ml-7 md:ml-[0] text-black-900_01 text-center text-sm"
                  size="txtPoppinsSemiBold14"
                >
                  All Other Products
                </Text>
                <Text
                  className="md:ml-[0] ml-[25px] text-black-900_01 text-center text-sm"
                  size="txtPoppinsSemiBold14"
                >
                  Repairs
                </Text>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[121px] md:ml-[0] ml-[25px] text-center text-sm"
                  shape="round"
                  color="blue_A700"
                  size="sm"
                  variant="outline"
                >
                  Our Deals
                </Button>
                <Img
                  className="h-[19px] md:ml-[0] ml-[173px] w-[19px]"
                  src="images/img_search.svg"
                  alt="search"
                />
                <div className="md:h-[25px] h-[31px] md:ml-[0] ml-[25px] relative w-[2%] md:w-full">
                  <div className="absolute md:h-[25px] h-[31px] inset-[0] justify-center m-auto w-full">
                    <Img
                      className="absolute bottom-[0] h-[25px] left-[0] w-[25px]"
                      src="images/img_jamshoppingcart.svg"
                      alt="jamshoppingcart"
                    />
                    <div className="absolute bg-blue-A700 h-4 right-[0] rounded-[50%] top-[0] w-4"></div>
                  </div>
                  <Text
                    className="absolute right-[12%] text-[10px] text-center text-white-A700 top-[0]"
                    size="txtPoppinsBold10"
                  >
                    2
                  </Text>
                </div>
                <Img
                  className="h-9 md:h-auto ml-7 md:ml-[0] rounded-[50%] w-9"
                  src="images/img_ellipse8.png"
                  alt="ellipseEight"
                />
              </div>
              <Line className="bg-blue_gray-100 h-px w-full" />
            </header>
          </div>
          <Text
            className="mt-5 text-center text-gray-500 text-xs"
            size="txtPoppinsLight12"
          >
            <span className="text-black-900_01 font-poppins font-normal">
              Home{" "}
            </span>
            <span className="text-blue-A700 font-poppins font-normal">›</span>
            <span className="text-black-900_01 font-poppins font-normal">
              {" "}
              Laptops{" "}
            </span>
            <span className="text-blue-A700 font-poppins font-normal">›</span>
            <span className="text-black-900_01 font-poppins font-normal">
              {" "}
            </span>
            <span className="text-black-900_01 font-poppins font-normal">
              {" "}
              Everyday Use Notebooks{" "}
            </span>
            <span className="text-blue-A700 font-poppins font-normal">›</span>
            <span className="text-black-900_01 font-poppins font-normal">
              {" "}
              MSI Prestige Series{" "}
            </span>
            <span className="text-blue-A700 font-poppins font-normal">›</span>
            <span className="text-gray-500 font-poppins font-normal"> </span>
            <span className="text-blue_gray-300 font-poppins font-normal">
              MSI WS Series
            </span>
          </Text>
          <Text
            className="mt-[17px] md:text-3xl sm:text-[28px] text-[32px] text-black-900_01 text-center"
            size="txtPoppinsSemiBold32"
          >
            MSI PS Series (20)
          </Text>
          <div className="flex md:flex-col flex-row gap-[7px] items-center justify-center max-w-[1406px] mt-[19px] mx-auto md:px-5 w-full">
            <Button
              className="!text-black-900_01 cursor-pointer font-semibold leading-[normal] min-w-[234px] text-center text-sm"
              shape="square"
              color="white_A700"
              size="md"
              variant="fill"
            >
              ‹ Back
            </Button>
            <CatalogOneRowgroup142 className="flex md:flex-1 md:flex-col flex-row md:gap-10 items-center justify-between w-[83%] md:w-full" />
          </div>
          <div className="flex md:flex-col flex-row gap-1.5 items-start justify-center max-w-[1407px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[7px] items-center justify-start w-[17%] md:w-full">
              <div className="flex md:h-[673px] h-[699px] justify-end relative w-full">
                <Img
                  className="h-4 mb-[46px] ml-auto mr-4 mt-auto w-4"
                  src="images/img_frame97_black_900_01.svg"
                  alt="frame100"
                />
                <div className="absolute bg-gray-50 flex flex-col gap-3.5 h-full inset-[0] items-center justify-start m-auto w-auto">
                  <div className="bg-gray-50 flex flex-col gap-[9px] items-center justify-start p-3 w-full">
                    <Text
                      className="text-base text-black-900_01 text-center"
                      size="txtPoppinsBold16"
                    >
                      Filters
                    </Text>
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] mb-1 min-w-[200px] text-center text-sm"
                      shape="round"
                      color="blue_gray_300"
                      size="sm"
                      variant="outline"
                    >
                      Clear Filter
                    </Button>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[86%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-row items-center justify-evenly w-full">
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtPoppinsSemiBold14"
                          >
                            Category
                          </Text>
                          <Text
                            className="leading-[210.00%] text-[13px] text-black-900_01"
                            size="txtPoppinsRegular13"
                          >
                            <>
                              CUSTOM PCS
                              <br />
                              MSI ALL-IN-ONE PCS
                              <br />
                              HP/COMPAQ PCS
                            </>
                          </Text>
                        </div>
                        <div className="md:h-[101px] h-[114px] relative w-[22%]">
                          <Text
                            className="absolute bottom-[0] inset-x-[0] leading-[210.00%] mx-auto text-[13px] text-black-900_01 text-right"
                            size="txtPoppinsRegular13"
                          >
                            <>
                              15
                              <br />
                              45
                              <br />1
                            </>
                          </Text>
                          <Img
                            className="absolute h-3.5 right-[0] top-[0]"
                            src="images/img_frame97_black_900_01_14x16.svg"
                            alt="frameNinetySeven_Three"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-3.5 w-full">
                      <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtPoppinsSemiBold14"
                          >
                            Price
                          </Text>
                          <Img
                            className="h-4 mt-[3px] w-4"
                            src="images/img_frame97_black_900_01_14x16.svg"
                            alt="frameNinetyEight"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <Text
                            className="leading-[210.00%] text-[13px] text-black-900_01"
                            size="txtPoppinsRegular13"
                          >
                            <>
                              $0.00 - $1,000.00
                              <br />
                              $1,000.00 - $2,000.00
                              <br />
                              $2,000.00 - $3,000.00
                              <br />
                              $3,000.00 - $4,000.00
                              <br />
                              $4,000.00 - $5,000.00
                              <br />
                              $5,000.00 - $6,000.00
                              <br />
                              $6,000.00 - $7,000.00
                              <br />
                              $7,000.00 And Above
                            </>
                          </Text>
                          <Text
                            className="leading-[210.00%] text-[13px] text-black-900_01 text-right"
                            size="txtPoppinsRegular13"
                          >
                            <>
                              19
                              <br />
                              21
                              <br />9<br />6<br />3<br />1<br />1<br />1
                            </>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[33px] w-full">
                      <div className="flex flex-col gap-3 items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtPoppinsSemiBold14"
                          >
                            Color
                          </Text>
                          <Img
                            className="h-4 mt-[3px] w-4"
                            src="images/img_frame97_black_900_01_14x16.svg"
                            alt="frameNinetyNine"
                          />
                        </div>
                        <div className="flex flex-row gap-[7px] items-center justify-start w-[29%] md:w-full">
                          <div className="bg-black-900_01 h-[23px] my-0.5 rounded-[11px] w-[23px]"></div>
                          <div className="flex flex-col h-[27px] items-center justify-start outline outline-[2px] outline-blue-A700 p-0.5 rounded-[13px] w-[27px]">
                            <div className="bg-red-A700 h-[23px] rounded-[11px] w-[23px]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[29px] w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-start justify-between w-full">
                          <Text
                            className="text-black-900_01 text-sm"
                            size="txtPoppinsSemiBold14"
                          >
                            Filter Name
                          </Text>
                          <Img
                            className="h-4 mt-[3px] w-4"
                            src="images/img_frame97_black_900_01.svg"
                            alt="frameNinetyNine_One"
                          />
                        </div>
                        <Button
                          className="cursor-pointer font-semibold leading-[normal] min-w-[200px] text-center text-sm"
                          shape="round"
                          color="blue_A700"
                          size="sm"
                          variant="fill"
                        >
                          Apply Filters (2)
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[234px]">
                <div className="bg-gray-50 flex flex-col gap-2 items-center justify-start p-[13px] w-full">
                  <Text
                    className="text-base text-black-900_01 text-center"
                    size="txtPoppinsBold16"
                  >
                    Brands
                  </Text>
                  <Button
                    className="cursor-pointer font-semibold leading-[normal] mb-[3px] min-w-[200px] text-center text-sm"
                    shape="round"
                    color="blue_gray_300"
                    size="sm"
                    variant="outline"
                  >
                    All Brands
                  </Button>
                </div>
                <div className="h-[225px] md:h-[75px] relative w-full">
                  <div className="flex flex-col m-auto w-full">
                    <div className="h-[150px] md:h-[75px] mx-auto w-full">
                      <div className="flex flex-col m-auto w-full">
                        <div className="flex mx-auto w-full">
                          <div className="bg-white-A700 border border-gray-50 border-solid flex flex-col items-center justify-start my-auto md:px-10 sm:px-5 px-[55px] py-[15px] w-[117px]">
                            <Img
                              className="h-[45px] md:h-auto object-cover w-[88px] sm:w-full"
                              src="images/img_image33.png"
                              alt="imageThirtyThree"
                            />
                          </div>
                          <div className="bg-white-A700 border border-gray-50 border-solid flex flex-col items-center justify-start ml-[-1px] my-auto md:px-10 sm:px-5 px-[55px] py-[15px] w-[117px] z-[1]">
                            <Img
                              className="h-[45px] md:h-auto object-cover w-[88px] sm:w-full"
                              src="images/img_image33_45x88.png"
                              alt="imageThirtyThree_One"
                            />
                          </div>
                        </div>
                        <div className="bg-white-A700 border border-gray-50 border-solid flex flex-col items-center justify-start mt-[-0.97px] md:px-10 sm:px-5 px-[55px] py-[15px] w-[117px] z-[1]">
                          <Img
                            className="h-[45px] md:h-auto object-cover w-[88px] sm:w-full"
                            src="images/img_image33_1.png"
                            alt="imageThirtyThree_Two"
                          />
                        </div>
                      </div>
                      <div className="absolute bg-white-A700 border border-gray-50 border-solid bottom-[0] flex flex-col items-center justify-start md:px-10 sm:px-5 px-[55px] py-[15px] right-[0] w-[117px]">
                        <Img
                          className="h-[45px] md:h-auto object-cover w-[88px] sm:w-full"
                          src="images/img_image33_2.png"
                          alt="imageThirtyThree_Three"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 border border-gray-50 border-solid flex flex-col items-center justify-start mt-[-0.97px] md:px-10 sm:px-5 px-[55px] py-[15px] w-[117px] z-[1]">
                      <Img
                        className="h-[45px] md:h-auto object-cover w-[88px] sm:w-full"
                        src="images/img_image33_3.png"
                        alt="imageThirtyThree_Four"
                      />
                    </div>
                  </div>
                  <div className="absolute bg-white-A700 border border-gray-50 border-solid bottom-[0] flex flex-col items-center justify-start md:px-10 sm:px-5 px-[55px] py-[15px] right-[0] w-[117px]">
                    <Img
                      className="h-[45px] md:h-auto object-cover w-[88px] sm:w-full"
                      src="images/img_image33_4.png"
                      alt="imageThirtyThree_Five"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 flex flex-col gap-[19px] items-center justify-start p-3.5 w-full">
                <Text
                  className="text-base text-black-900_01 text-center"
                  size="txtPoppinsBold16"
                >
                  Compare Products
                </Text>
                <Text
                  className="mb-[13px] text-[13px] text-black-900_01 text-center"
                  size="txtPoppinsRegular13"
                >
                  You have no items to compare.
                </Text>
              </div>
              <div className="bg-gray-50 flex flex-col gap-[11px] items-center justify-start p-3.5 w-full">
                <Text
                  className="text-base text-black-900_01 text-center"
                  size="txtPoppinsBold16"
                >
                  My Wish List
                </Text>
                <Text
                  className="leading-[130.00%] mb-1.5 text-[13px] text-black-900_01 text-center w-[99%] sm:w-full"
                  size="txtPoppinsRegular13"
                >
                  You have no items in your wish list.
                </Text>
              </div>
              <Img
                className="h-[370px] md:h-auto object-cover w-full"
                src="images/img_image49.png"
                alt="imageFortyNine"
              />
            </div>
            <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[5px] w-[83%] md:w-full">
              <CatalogOneRowcustomPcs24 className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-[42%] md:w-full" />
              <div className="h-[1381px] md:h-[1386px] sm:h-[1766px] mt-[5px] relative w-full">
                <div className="h-[1381px] sm:h-[1761px] m-auto w-full">
                  <div className="flex m-auto w-full">
                    <div className="h-[1381px] sm:h-[1761px] my-auto w-[81%] md:w-full">
                      <div className="h-[1381px] sm:h-[1761px] m-auto w-full">
                        <div className="flex m-auto w-full">
                          <div className="h-[1381px] sm:h-[1761px] my-auto w-[76%] md:w-full">
                            <div className="h-[1381px] sm:h-[1761px] m-auto w-full">
                              <div className="h-[1381px] sm:h-[1761px] m-auto w-full">
                                <div className="h-[1381px] sm:h-[1761px] m-auto w-full">
                                  <div className="h-[1381px] sm:h-[1761px] m-auto w-full">
                                    <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                                        <div className="md:h-[1377px] h-[1381px] relative w-[34%] sm:w-full">
                                          <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                                            <List
                                              className="flex flex-col gap-[689px] items-center w-full"
                                              orientation="vertical"
                                            >
                                              <CatalogOneColumn
                                                className="flex flex-col items-center justify-start my-0 w-[234px]"
                                                productprice={
                                                  <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                                                    <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                                      <>
                                                        $499.00
                                                        <br />
                                                      </>
                                                    </span>
                                                    <span className="text-black-900_01 font-poppins text-left">
                                                      $499.00
                                                    </span>
                                                  </Text>
                                                }
                                              />
                                              <CatalogOneColumn
                                                className="flex flex-col items-center justify-start my-0 w-[234px]"
                                                productprice={
                                                  <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                                                    <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                                      <>
                                                        $499.00
                                                        <br />
                                                      </>
                                                    </span>
                                                    <span className="text-black-900_01 font-poppins text-left">
                                                      $499.00
                                                    </span>
                                                  </Text>
                                                }
                                              />
                                            </List>
                                          </div>
                                          <CatalogOneColumn
                                            className="absolute bottom-1/4 flex flex-col inset-x-[0] items-center justify-start mx-auto w-[234px]"
                                            productprice={
                                              <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                                                <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                                  <>
                                                    $499.00
                                                    <br />
                                                  </>
                                                </span>
                                                <span className="text-black-900_01 font-poppins text-left">
                                                  $499.00
                                                </span>
                                              </Text>
                                            }
                                          />
                                        </div>
                                        <CatalogOneColumn
                                          className="flex flex-col items-center justify-start sm:mt-0 mt-[345px] w-[234px]"
                                          productprice={
                                            <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                                              <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                                <>
                                                  $499.00
                                                  <br />
                                                </>
                                              </span>
                                              <span className="text-black-900_01 font-poppins text-left">
                                                $499.00
                                              </span>
                                            </Text>
                                          }
                                          productimage="images/img_image29_150x150.png"
                                        />
                                      </div>
                                    </div>
                                    <CatalogOneColumn
                                      className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-[234px]"
                                      productprice={
                                        <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                                          <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                            <>
                                              $499.00
                                              <br />
                                            </>
                                          </span>
                                          <span className="text-black-900_01 font-poppins text-left">
                                            $499.00
                                          </span>
                                        </Text>
                                      }
                                      productimage="./public/images/img_image29_1.png"
                                    />
                                    <CatalogOneColumn
                                      className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-[234px]"
                                      productprice={
                                        <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                                          <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                            <>
                                              $499.00
                                              <br />
                                            </>
                                          </span>
                                          <span className="text-black-900_01 font-poppins text-left">
                                            $499.00
                                          </span>
                                        </Text>
                                      }
                                      productimage="images/img_image29_1.png"
                                    />
                                  </div>
                                  <CatalogOneColumn
                                    className="absolute bottom-1/4 flex flex-col inset-x-[0] items-center justify-start mx-auto w-[234px]"
                                    productprice={
                                      <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                                        <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                          <>
                                            $499.00
                                            <br />
                                          </>
                                        </span>
                                        <span className="text-black-900_01 font-poppins text-left">
                                          $499.00
                                        </span>
                                      </Text>
                                    }
                                    productimage="images/img_image29_2.png"
                                  />
                                </div>
                                <CatalogOneColumn
                                  className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-1/4 w-[234px]"
                                  productprice={
                                    <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                                      <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                        <>
                                          $499.00
                                          <br />
                                        </>
                                      </span>
                                      <span className="text-black-900_01 font-poppins text-left">
                                        $499.00
                                      </span>
                                    </Text>
                                  }
                                  productimage="images/img_image29_3.png"
                                />
                              </div>
                              <CatalogOneColumn
                                className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[234px]"
                                productprice={
                                  <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                                    <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                      <>
                                        $499.00
                                        <br />
                                      </>
                                    </span>
                                    <span className="text-black-900_01 font-poppins text-left">
                                      $499.00
                                    </span>
                                  </Text>
                                }
                                productimage="images/img_image29_4.png"
                              />
                              <CatalogOneColumn
                                className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] w-[234px]"
                                productprice={
                                  <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                                    <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                      <>
                                        $499.00
                                        <br />
                                      </>
                                    </span>
                                    <span className="text-black-900_01 font-poppins text-left">
                                      $499.00
                                    </span>
                                  </Text>
                                }
                                productimage="images/img_image29_4.png"
                              />
                            </div>
                            <CatalogOneColumn
                              className="absolute bottom-1/4 flex flex-col items-center justify-start right-[0] w-[234px]"
                              productprice={
                                <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                                  <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                    <>
                                      $499.00
                                      <br />
                                    </>
                                  </span>
                                  <span className="text-black-900_01 font-poppins text-left">
                                    $499.00
                                  </span>
                                </Text>
                              }
                              productimage="images/img_image29_5.png"
                            />
                          </div>
                          <CatalogOneColumn
                            className="flex flex-col items-center justify-start ml-[undefinedpx] mt-[345px] w-[234px] z-[1]"
                            productprice={
                              <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                                <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                  <>
                                    $499.00
                                    <br />
                                  </>
                                </span>
                                <span className="text-black-900_01 font-poppins text-left">
                                  $499.00
                                </span>
                              </Text>
                            }
                            productimage="images/img_image29_6.png"
                          />
                          <CatalogOneColumn
                            className="flex flex-col items-center justify-start ml-[-1px] w-[234px] z-[1]"
                            productprice={
                              <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                                <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                  <>
                                    $499.00
                                    <br />
                                  </>
                                </span>
                                <span className="text-black-900_01 font-poppins text-left">
                                  $499.00
                                </span>
                              </Text>
                            }
                            productimage="images/img_image29_7.png"
                          />
                          <CatalogOneColumn
                            className="flex flex-col items-center justify-start ml-[-1px] mt-auto w-[234px] z-[1]"
                            productprice={
                              <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                                <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                  <>
                                    $499.00
                                    <br />
                                  </>
                                </span>
                                <span className="text-black-900_01 font-poppins text-left">
                                  $499.00
                                </span>
                              </Text>
                            }
                            productimage="images/img_image29_7.png"
                          />
                        </div>
                        <CatalogOneColumn
                          className="absolute bottom-1/4 flex flex-col items-center justify-start right-[0] w-[234px]"
                          productprice={
                            <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                              <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                                <>
                                  $499.00
                                  <br />
                                </>
                              </span>
                              <span className="text-black-900_01 font-poppins text-left">
                                $499.00
                              </span>
                            </Text>
                          }
                          productimage="./assets/images/img_image29_1.png"
                        />
                      </div>
                      <CatalogOneColumn
                        className="absolute flex flex-col items-center justify-start right-[0] top-1/4 w-[234px]"
                        productprice={
                          <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                            <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                              <>
                                $499.00
                                <br />
                              </>
                            </span>
                            <span className="text-black-900_01 font-poppins text-left">
                              $499.00
                            </span>
                          </Text>
                        }
                        productimage="images/img_image29_150x150.png"
                      />
                    </div>
                    <CatalogOneColumn
                      className="flex flex-col items-center justify-start ml-[-1px] w-[234px] z-[1]"
                      productprice={
                        <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                          <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                            <>
                              $499.00
                              <br />
                            </>
                          </span>
                          <span className="text-black-900_01 font-poppins text-left">
                            $499.00
                          </span>
                        </Text>
                      }
                      productimage="images/img_image29_6.png"
                    />
                    <CatalogOneColumn
                      className="flex flex-col items-center justify-start ml-[-1px] mt-auto w-[234px] z-[1]"
                      productprice={
                        <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                          <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                            <>
                              $499.00
                              <br />
                            </>
                          </span>
                          <span className="text-black-900_01 font-poppins text-left">
                            $499.00
                          </span>
                        </Text>
                      }
                      productimage="images/img_image29_6.png"
                    />
                  </div>
                  <CatalogOneColumn
                    className="absolute bottom-1/4 flex flex-col items-center justify-start right-[0] w-[234px]"
                    productprice={
                      <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                        <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                          <>
                            $499.00
                            <br />
                          </>
                        </span>
                        <span className="text-black-900_01 font-poppins text-left">
                          $499.00
                        </span>
                      </Text>
                    }
                    productimage="images/img_image29_4.png"
                  />
                </div>
                <CatalogOneColumn
                  className="absolute flex flex-col items-center justify-start right-[0] top-1/4 w-[234px]"
                  productprice={
                    <Text className="font-semibold leading-[140.00%] text-black-900_01 text-lg">
                      <span className="text-gray-700 font-poppins text-left text-sm font-normal line-through">
                        <>
                          $499.00
                          <br />
                        </>
                      </span>
                      <span className="text-black-900_01 font-poppins text-left">
                        $499.00
                      </span>
                    </Text>
                  }
                  productimage="images/img_image29_8.png"
                />
              </div>
              <div className="flex flex-row items-start justify-center md:ml-[0] ml-[425px] mt-[25px] w-[28%] md:w-full">
                <Button
                  className="cursor-pointer font-semibold h-[37px] leading-[normal] rotate-[-180deg] text-center text-lg w-[38px]"
                  shape="round"
                  color="blue_gray_300"
                  size="xs"
                  variant="outline"
                >
                  ›
                </Button>
                <Button
                  className="cursor-pointer font-semibold h-9 leading-[normal] ml-3 text-[13px] text-center w-[37px]"
                  shape="round"
                  color="blue_gray_300"
                  size="sm"
                  variant="outline"
                >
                  1
                </Button>
                <Button
                  className="cursor-pointer font-semibold h-[37px] leading-[normal] ml-2.5 text-[13px] text-center w-[38px]"
                  shape="round"
                  color="gray_50"
                  size="sm"
                  variant="fill"
                >
                  2
                </Button>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[40px] ml-3 text-[13px] text-center"
                  shape="round"
                  color="blue_gray_300"
                  size="sm"
                  variant="outline"
                >
                  3
                </Button>
                <Text
                  className="ml-3 mt-3 text-blue_gray-300 text-center text-sm"
                  size="txtPoppinsRegular14"
                >
                  ...
                </Text>
                <Button
                  className="cursor-pointer font-semibold leading-[normal] min-w-[46px] ml-3 text-[13px] text-center"
                  shape="round"
                  color="blue_gray_300"
                  size="sm"
                  variant="outline"
                >
                  15
                </Button>
                <Button
                  className="cursor-pointer font-semibold h-[37px] leading-[normal] ml-3 text-center text-lg w-[38px]"
                  shape="round"
                  color="blue_gray_300"
                  size="xs"
                  variant="outline"
                >
                  ›
                </Button>
              </div>
              <Text
                className="bg-clip-text bg-gradient  md:ml-[0] ml-[18px] mt-[67px] text-transparent text-xs"
                size="txtPoppinsRegular12"
              >
                <>
                  MSI has unveiled the Prestige Series line of business-class
                  and gaming notebooks. Tuned for color accuracy, the Prestige
                  Series also leverages True Color Technology, which allows
                  users to adjust the display profile to best fit their
                  computing needs.
                  <br />
                  <br />
                  There are six different screen profiles, which are tuned for
                  gaming, reducing eye fatigue, sRGB color accuracy, increasing
                  clarity for words and lines, reducing harmful blue light, and
                  optimizing contrast for watching movies.
                  <br />
                  Given the various display profiles and discrete graphics chip,
                  the Prestige Series notebooks can be used for various design
                  work as well as for office tasks given that the screen can be
                  adjusted for better clarity, color accuracy, or for eye strain
                  reduction. Users working with video or 3D rendering will
                  appreciate the &quot;movie mode&quot; for which contrast is
                  increased.
                  <br />
                  <br />
                  Home users or students can benefit from the
                  &quot;anti-blue&quot; and the &quot;office mode&quot; options,
                  both of which are designed to reduce eye strain. This is
                  helpful when working on the computer for extended periods of
                  time. Additionally, in their down time, students can also use
                  the &quot;gamer mode&quot; to increase the screen brightness.
                </>
              </Text>
              <Button
                className="cursor-pointer font-semibold leading-[normal] min-w-[88px] md:ml-[0] ml-[539px] mt-[25px] text-center text-sm"
                shape="round"
                color="blue_gray_300"
                size="sm"
                variant="outline"
              >
                More
              </Button>
            </div>
          </div>
          <div className="flex sm:h-[1261px] md:h-[2006px] h-[520px] justify-end mt-[308px] md:px-5 relative w-full">
            <CatalogOneColumnFiftyOne className="bg-gray-50 flex flex-col h-full items-end justify-end mb-[81px] ml-auto mt-auto p-[45px] md:px-10 sm:px-5 w-[89%]" />
            <CatalogOneColumnFiftyThree
              className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full"
              descriptionTwo={
                <Text className="font-light leading-[132.50%] md:mt-0 mt-1 text-sm text-white-A700">
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
              }
              descriptionThree={
                <Text className="font-light leading-[135.00%] md:mt-0 mt-1 text-sm text-white-A700">
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
              }
              descriptionFour={
                <Text className="font-light leading-[132.50%] text-sm text-white-A700">
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
              }
              descriptionFive={
                <Text className="font-light leading-[132.50%] text-sm text-white-A700">
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
              }
              descriptionSix={
                <Text className="font-light leading-[132.50%] text-sm text-white-A700">
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
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
