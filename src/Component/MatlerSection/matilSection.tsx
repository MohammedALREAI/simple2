import { useTransition } from "@react-spring/core";
import { useState } from "react";
import { animated } from "react-spring";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";
import { TextLuxury, ButtonDiscover, TextDescription, ImageWrapper } from "./MailSection.styles";
import { VscArrowRight } from "react-icons/vsc";
export const MailSection = () => {
     const [show, set] = useState(false);
     const transitions = useTransition(show, {
       from: { opacity: 0 },
       enter: { opacity: 1 },
       reverse: false,
       delay: 300,
       config: { duration: 300 },
       onRest: () => set(true),
     });
     return (
          <section className="container mx-auto px-[20px]">
{transitions(
        (styles, item) => item &&
               <animated.div style={styles}>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-14 bg-white-200 my-12">
               <div className="flex-col mt-12 w-4/6">
                    <HeaderTitle title={"MATERIALS"} />
                    <TextLuxury className="lg:text-[60px] text-[45px] ">Luxury in every detail</TextLuxury>
                    <TextDescription className="text-[20px]">Interior of volumes, space, air, proportion, with certain light and mood. These interiors are meant to last forever.</TextDescription>
                    <div className="w-[220px] h-[60px] rounded-none">
                    <ButtonDiscover className="">Discover More<span className="ml-[22px]"><VscArrowRight size="32px"/></span></ButtonDiscover>
                    </div>
               </div>
               <div>
                    <ImageWrapper src="https://nestin.bold-themes.com/fancy/wp-content/uploads/sites/3/2020/01/inner_image_01.jpg" alt="your image name" /></div>
          </div>
          </animated.div>)
}
          </section>
     );
};
