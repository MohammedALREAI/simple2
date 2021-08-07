import React, { useState } from "react";
import { SimpleSection } from "../ApartmentSection/simpleSection";
import { Button } from "../Button/Button";
import { HeaderTitle } from "../ListiItems/ListItem.styles";
import { DisscoverMore } from "../Slider/Slider.style";
import { WrapperTabs } from "./Tabs.styles";
interface Props {
    color: string;
}

export const Tabs = () => {
    const [openTab, setOpenTab] = React.useState<number>(1);

    return (
        <div className=" mb-28">
            <div className=" my-28">
                <div className="my-32">
                    <div className="flex flex-col md:flex-row  md:justify-between md:items-center">
                        <HeaderTitle className="text-left text-lg md:text-xl  md:mb-4" >Apartment types</HeaderTitle>
                        <div className=" h-20 w-80 uppercase">
                        <Button text="Discover More"/>
                        </div>
                    </div>
                    <div className="w-full my-auto  ">
                        <div>
                            <div className="sm:hidden">
                                <select
                                    id="tabs"
                                    name="tabs"
                                    className=" select form-select block w-full  appearance-none bg-transparent relative z-10"
                                    value={2}
                                >
                                    <option className="text-sm text-gray-600">STUDIO</option>
                                    <option className="text-sm text-gray-600"></option>
                                    <option className="text-sm text-gray-600">Articles</option>
                                    <option className=" flex items-center justify-center">
                                        Full Stack
                                    </option>
                                </select>
                            </div>
                            <div className="hidden sm:block w-full">
                                <WrapperTabs className="w-full my-24 flex items-center justify-center bg-white">
                                    <nav
                                        className=" container mx-12 gap-x-24 md md:mx-auto grid grid-cols-1 md:grid-cols-4 items-center w-full h-24"
                                        aria-label="Tabs"
                                    >
                                        <a
                                            className={`tab mb-4 ${
                                                openTab === 0 ? "isActive" : ""
                                            }`}
                                            href="#link1"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(0);
                                            }}
                                            data-toggle="tab"
                                            role="tablist"
                                        >
                                            <span className="spantitle uppercase flex items-center justify-start pl-2 ">
                                            STUDIO
                                            </span>
                                        </a>
                                        <a
                                            className={`tab mb-4 ${
                                                openTab === 1 ? "isActive" : ""
                                            }`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(1);
                                            }}
                                            data-toggle="tab"
                                            href="#link2"
                                            role="tablist"
                                        >
                                            <span className="spantitle uppercase flex items-center justify-start pl-2 ">
                                            01 BEDROOM
                                            </span>
                                        </a>
                                        <a
                                            href="#link3"
                                            className={`tab mb-4 ${
                                                openTab === 2 ? "isActive" : ""
                                            }`}
                                            aria-current="page"
                                        >
                                            <span className="spantitle uppercase  flex items-center justify-start pl-2 ">
                                            02 BEDROOM
                                            </span>
                                        </a>
                                        <a
                                            href="#link4"
                                            className={
                                                `tab mb-4 ${openTab === 3 ? "isActive" : ""}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpenTab(2);
                                            }}
                                            data-toggle="tab"
                                            role="tablist"
                                        >
                                            <span className="spantitle uppercase flex items-center justify-start pl-2 ">
                                            Duplex
                                            </span>
                                        </a>
                                    </nav>
                                </WrapperTabs>
                            </div>
                        </div>
                        <div className=" w-full my-18 relative flex flex-col break-words bg-white h-full  shadow-lg">
                            <div className="">
                                <div className="tab-content tab-space container mx-auto">
                                    <div className={`${openTab === 1 ? "block" : "hidden"}`} id="link1">
                                                  <div className=" container mx-auto px-12 my-8 grid grid-cols-1  md:grid-cols-3 gap-4">
                                              {Array(3).fill(0).map((x, index) => (
                                                <SimpleSection key={index}/>

                                              ),
                                              )}

                                                  </div>
                                        </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                    <div className=" mt-4 gap-y-6 md:gap-y-12 grid grid-cols-3 gap-4">
                                              {Array(3).fill(0).map((x, index) => (
                                                <SimpleSection key={index}/>

                                              ),
                                              )}

                                                  </div>
                                    </div>
                                    <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                                    <div className=" mt-4 grid grid-cols-3 gap-4">
                                              {Array(3).fill(0).map((x, index) => (
                                                <SimpleSection key={index}/>

                                              ),
                                              )}

                                                  </div>
                                    </div>

                                    <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                                    <div className=" mt-4 grid grid-cols-3 gap-4">
                                              {Array(3).fill(0).map((x, index) => (
                                                <SimpleSection key={index}/>

                                              ),
                                              )}

                                                  </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
