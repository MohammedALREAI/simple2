import React, { useState } from "react";
import { Button } from "../Button/Button";
import { HeaderTitleEverything, ImageDiv } from "./EverySection.style";
import { GrDownload } from "react-icons/gr";
import { Tooltip } from "../Tooltip/tooltip";
import { Dropdown } from "../Dropdown/Dropdown";

function EverySection() {
    const [display, setDisplay] = useState<boolean>(false);
    const position = {
        x: 70,
        y: 20,
    };
    return (
        <div className="container mx-auto  my-20 flex flex-col w-full bg-gray-200">
            <div className="container p-12 mx-auto flex flex-row justify-between items-center ">
                <div>
                <HeaderTitleEverything className="text-xl font-bold"> Everything Within<span className="pl-1" style={{ color: "#ba9778" }}>
                    Reach</span>
                    </HeaderTitleEverything>
                </div>
                <div className="w-44 h-14">
                    <Button text="DOWNLOAD PDF" icon={<GrDownload size="22" style={{
 color: "white",
 fill: "white",
                paddingLeft: "8px",
}}/>} className="w-auto"/>
                </div>
            </div>
            <div className="flex flex-row  p-12 ">
                <ImageDiv className="w-1 md:w-4/6 h-56  md:relative md:right-32" >
                    <Tooltip onClick={() => setDisplay(true)} onMouseEnter={() => setDisplay(true)} onMouseLeave={() => setDisplay(false)} isDisplay ={display} text="SHOPPING MALL" value={20} position={position}/>
                </ImageDiv>
                <div className="w-2/6 -ml-12" style={{ borderTop: "1px solid rgba(0,0,0,.3)" }}>
                    <Dropdown isOpen={display} text="Windows, skylights, vents, and glass portions of doors helps to control solar heat loss and gains runway." title="BUSINESS CENTER" value="01"/>
                </div>
            </div>
        </div>
    );
}
export default EverySection;
