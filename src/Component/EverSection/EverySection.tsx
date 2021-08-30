/* eslint-disable no-octal */
import React, { useState } from "react";
import { Button } from "../Button/Button";
import { HeaderTitleEverything, ImageDiv, WrapperButtonEverySection } from "./EverySection.style";
import { GrDownload } from "react-icons/gr";
import { Tooltip } from "../Tooltip/tooltip";
import { Dropdown } from "../Dropdown/Dropdown";
import { SpanItem } from "../Dropdown/dropdown.style";
import { Circle } from "./Circle";

export interface IContext{
    display:boolean,
    handleChange:(display:boolean)=>void
}

export const OpenContext = React.createContext<IContext>({
    display: false,
    handleChange: (display) => ``,
});

function EverySection() {
    const [display, setDisplay] = useState<boolean>(false);
    const handleChange = (display:boolean) => {
        setDisplay(!display);
       };
    const [one, setOne] = useState(true);
    const [tow, setTow] = useState(false);
    const position = {
        x: 70,
        y: 20,
    };
    return (
        <OpenContext.Provider value={{ display, handleChange }}>
        <div className="container mx-auto mt-[40px]  flex flex-col w-full bg-[#E5E7EB]">
            <div className="p-[30px] flex flex-col  lg:flex-row  lg:justify-between lg:items-center ">
                <div className="">
                    <HeaderTitleEverything> Everything Within<span className="pl-1" style={{ color: "#ba9778" }}>
                        Reach</span>
                    </HeaderTitleEverything>
                </div>
                <div className="w-[183px] h-[60px]  bg-black md:m-0 mt-4 ">
                    <Button className="w-full h-full bg-black"text="DOWNLOAD PDF" icon={<GrDownload size="22" style={{
                        color: "white",
                        fill: "white",
                        marginLeft: "10px",
                        marginBottom: "10px",
                        height: "17px",

                    }} />}/>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col p-12 ">
                <ImageDiv className="w-full lg:w-4/6  md:relative ">
                    <Circle text="SHOPPING MALL" value={"01"} x={30} y={40} />
                </ImageDiv>
                <div className="md:ml-[-40px]  w-full lg:w-2/6" style={{ borderTop: "1px solid rgba(0,0,0,.3)" }}>
                    <Dropdown text="Windows, skylights, vents, and glass portions of doors helps to control solar heat loss and gains runway." title="BUSINESS CENTER" value="01" />
                </div>
            </div>
        </div>
        </OpenContext.Provider>
    );
}
export default EverySection;
