import React from "react";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";
import { TitleHead } from "../MatlerSection/MailSection.styles";
import { SliderImage } from "../Slider/SliderImage";
import { TitleHeadAppp } from "./apartment.style";
import { ListItems } from "./ListItems";
import { Button } from "../Button/Button";
import { AiFillCar } from "react-icons/ai";

const style:React.CSSProperties = {
    width: "807px",
    position: "relative",
    zIndex: 999,
    opacity: 1,
    height: "600px",
};

function Penthouse() {
    return (
            <div className="px-12 container mx-auto my-[70px]   bg-[#f1f1f1]  flex flex-col w-full h-full lg:flex-row shadow">
            <div className=" lg:w-2/3 sm:block  md:left-[-10%] md:right-[20%]  mt-8 z-50  md:relative">
                <SliderImage jc="flex-end"/>
        </div>
                <div className="w-1/1 lg:w-1/2 mt-12 ">
                <HeaderTitle title="APARTMENT TYPE" className="text-base"/>
                <TitleHeadAppp>Penthouse</TitleHeadAppp>
                    <div className="flex flex-col  ">
                        {Array(4).fill(0).map(c => (
                            <ListItems icon={AiFillCar} text={"BEDROOM"} value={3}/>
                        ))}
                    </div>
                    <div className="my-12" style={{ width: "202px", height: "53px" }}>
                    <Button text="SCHEDULE A VISIT"/>
                    </div>

            </div>

</div>

    );
}
export default Penthouse;
