import React, { useState } from "react";
import { SimpleSection } from "../ApartmentSection/simpleSection";
import { Button } from "../Button/Button";
import { HeaderTitle, WrapperTextButton } from "../ListiItems/ListItem.styles";
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
    return (
        <div className="container lg:mx-auto mb-8 mx-12 h-auto ">

            <div className="flex flex-col md:flex-row justify-start items-start  md:justify-between md:items-center">
                <HeaderTitle>Apartment types</HeaderTitle>
                <WrapperTextButton >
                    <Button text="Discover More" />
                </WrapperTextButton>
            </div>
            <div className="w-full h-auto">
                <div>
                    <div className="sm:hidden">
                                <select
                                    id="tabs"
                                    name="tabs"
                                    className=" select form-select block w-full  appearance-none bg-transparent relative z-10"
                                    value={2}
                                >
                                    <option className="text-sm text-gray-600">STUDIO</option>
                                    <option className="text-sm text-gray-600">01 BEDROOM</option>
                                    <option className="text-sm text-gray-600">02 BEDROOM</option>
                                    <option className=" flex items-center justify-center">
                                    Duplex
                                    </option>
                                </select>
                            </div>
                    <div className="w-full h-auto">
                        <WrapperTabs className="mb-16 w-full  md:my-6 flex items-center justify-center bg-white  h-auto">
                            <nav
                                className=" mt-16 gap-x-8 space-y-5 gap-y-8 md:gap-y-2 grid grid-cols-1 md:grid-cols-4 justify-center items-center w-full h-auto"
                                aria-label="Tabs"
                            >

                                <ListTab onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                    title="STUDIO"
                                    activeTab={openTab}
                                    currentTab={1} />

                                <ListTab onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                    title="01 BEDROOM"
                                    activeTab={openTab}
                                    currentTab={2} />
                                <ListTab onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                    title="02 BEDROOM"
                                    activeTab={openTab}
                                    currentTab={3} />

                                <ListTab onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                }}
                                    title="Duplex"
                                    activeTab={openTab}
                                    currentTab={4} />
                            </nav>
                        </WrapperTabs>
                    </div>
                </div>
                <div className=" w-full  relative flex flex-col break-words bg-white h-auto ">
                    {transitions(
                        (styles, item) => item &&
                            <animated.div style={styles} className="container mx-auto mt-8 h-auto">
                                {/* {[1, 2, 3, 4].map((cur, index) => (
                                    <div className={`${openTab === cur ? "block" : "hidden"}`} id={`link${cur}`}>
                                    <WrapperItem index={cur} data={dataTabs} currentTab={cur} activeTab={openTab} />
                                    </div>))} */}
                                <div className={`${openTab === 1 ? "block" : "hidden"}`} id="link1">
                                    1
                                    {/* <WrapperItem index={1} data={dataTabs} currentTab={2} activeTab={openTab} /> */}
                                </div>
                                <div className={`${openTab === 2 ? "block" : "hidden"}`} id="link2">
                                    <WrapperItem index={2} data={dataTabs} currentTab={2} activeTab={openTab} />
                                </div>
                                <div className={`${openTab === 3 ? "block" : "hidden"}`} id="link3">
                                    3
                                    {/* <WrapperItem index={3} data={dataTabs.reverse()} currentTab={3} activeTab={openTab} /> */}
                                </div>
                                <div className={`${openTab === 4 ? "block" : "hidden"} `} id="link4">
                                    <WrapperItem index={4} data={dataTabs.reverse()} currentTab={4} activeTab={openTab} />
                                </div>
                                {/* <WrapperItem data={reverseArr} currentTab={1} key={`index-${1}`} activeTab={openTab} />
                                    <WrapperItem data={dataTabs} currentTab={2} key={`index-${2}`} activeTab={openTab} />
                                    <WrapperItem data={reverseArr} currentTab={3} key={`index-${3}`} activeTab={openTab} />
                                    <WrapperItem data={dataTabs} currentTab={4} key={`index-${4}`} activeTab={openTab} /> */}
                                {/* {[1, 2, 3, 4].map((x, index) => (<WrapperItem index={index} data={dataTabs} currentTab={x} key={`index-${index}`} activeTab={openTab} />))} */}
                            </animated.div>)}
                </div>
            </div>
        </div>

    );
};
