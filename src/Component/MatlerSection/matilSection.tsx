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
          <section className="container mx-auto">
{transitions(
        (styles, item) => item &&
               <animated.div style={styles}>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-14 bg-white-200 my-12">
               <div className="flex-col mt-12 w-4/6">
                    <HeaderTitle title={"MATERIALS"} />
                    <TextLuxury>Luxury in every detail</TextLuxury>
                    <TextDescription>Interior of volumes, space, air, proportion, with certain light and mood. These interiors are meant to last forever.</TextDescription>
                    <div className="w-1/1" >
                    <ButtonDiscover>Discover More<span className="ml-4 text-3xl"><VscArrowRight size="32px"/></span></ButtonDiscover>
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
