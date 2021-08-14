import React, { useState } from "react";
import { SimpleSection } from "../ApartmentSection/simpleSection";
import { Button } from "../Button/Button";
import { HeaderTitle } from "../ListiItems/ListItem.styles";
import { DisscoverMore } from "../Slider/Slider.style";
import { DataItems, ListTab } from "./NavItme";
import { WrapperTabs } from "./Tabs.styles";
import { useTransition, animated } from "react-spring";

import { WrapperItem } from "./WrapperItem";
import { dataTabs, reverseArr } from "../ApartmentSection/staticData";
interface Props {
    color: string;
}

export const Tabs = () => {
    const [openTab, setOpenTab] = React.useState<number>(1);
    const [show, set] = useState(false);
    const transitions = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      reverse: false,
      delay: 50,
      config: { duration: 50 },
      onRest: () => set(true),
    });

    console.log("mu data is", reverseArr);

    return (
        <div className=" mb-8">

                    <div className="flex flex-col md:flex-row  md:justify-between md:items-center">
                        <HeaderTitle className="text-left text-lg md:text-xl  md:mb-4" >Apartment types</HeaderTitle>
                        <div className=" h-20 w-80 uppercase">
                        <Button text="Discover More"/>
                        </div>
                    </div>
                    <div className="w-full">
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
                                        className=" container mx-12  gap-x-8 md md:mx-auto grid grid-cols-1 md:grid-cols-4 items-center w-full h-24"
                                        aria-label="Tabs"
                            >

                                        <ListTab onClick={(e) => {
                                            e.preventDefault();
                                            setOpenTab(1);
                                        } }
                                        title="STUDIO"
                                        activeTab={openTab}
                                        currentTab={1} />

                                        <ListTab onClick={(e) => {
                                            e.preventDefault();
                                            setOpenTab(2);
                                        } }
                                        title="01 BEDROOM"
                                        activeTab={openTab}
                                        currentTab={2} />
                                            <ListTab onClick={(e) => {
                                            e.preventDefault();
                                            setOpenTab(3);
                                        } }
                                        title="02 BEDROOM"
                                        activeTab={openTab}
                                        currentTab={3} />

                                        <ListTab onClick={(e) => {
                                            e.preventDefault();
                                            setOpenTab(4);
                                        } }
                                        title="Duplex"
                                        activeTab={openTab}
                                        currentTab={4} />
                                    </nav>
                                </WrapperTabs>
                            </div>
                        </div>
                        <div className=" w-full -mt-24 relative flex flex-col break-words bg-white h-full ">
                            {transitions(
              (styles, item) => item &&
                                <animated.div className="tab-content tab-space container mx-auto mt-8">
                                    {/* <WrapperItem data={reverseArr} currentTab={1} key={`index-${1}`} activeTab={openTab} />
                                    <WrapperItem data={dataTabs} currentTab={2} key={`index-${2}`} activeTab={openTab} />
                                    <WrapperItem data={reverseArr} currentTab={3} key={`index-${3}`} activeTab={openTab} />
                                    <WrapperItem data={dataTabs} currentTab={4} key={`index-${4}`} activeTab={openTab} /> */}
                                {[1, 2, 3, 4].map((x, index) => (<WrapperItem data={dataTabs.reverse()} currentTab={x} key={`index-${index}`} activeTab={openTab} />))}
                            </animated.div>)}
                        </div>
                    </div>
                </div>

    );
};
