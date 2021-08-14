import React, { useState } from "react";
import { Progressbar } from "../ProgressBar";
import { WrapperImageKnow } from "./Know.styles";
import { Progrss } from "./Progrss";
import { ListItem } from "./ListItem";
import { useTransition, animated } from "react-spring";

interface Props {
m?:string
}

export const KnowSection = (props: Props) => {
    const [show, set] = useState(false);
    const transitions = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      reverse: false,
      delay: 300,
      config: { duration: 300 },
      onRest: () => set(true),
    });
    const [propgress, setPropgress] = useState(false);
    const transitionsProgress = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      reverse: false,
      delay: 400,
      config: { duration: 400 },
      onRest: () => set(true),
    });

// const AmiWrapper = () => {
//     transitions((styles, item) => item &&
//                 <animated.div style={styles}>
//     <div className=" grid grid-cols-1 md:grid-cols-2  justify-between  pt-16 ">
//     <div className="container flex flex-col mt-16 px-12 mx-auto">
//     <h2 className="text">For those who know how to <span style={{ color: "#ba9778" }}>choose</span></h2>
//     <p className="subText">Energy efficiency simply means using less energy to perform the same task – that is, eliminating energy waste. Energy efficiency brings a variety of benefits: reducing greenhouse gas emissions, reducing demand for energy imports.</p>
//     </div>
//     <div className=" flex flex-col px-12 mt-16">
//       {Array(4).fill(0).map(x => (
//           <Progrss textshow="some text" value={30} title="some title"/>
//       ))}

//     </div>
//     </div>
//     <div className="bg-white w-full md:w-10/12 border-t-4 border-black h-80 container  mt-40">
//     <div className =" gap-6  grid grid-cols-2 mb-auto md:grid-cols-4 py-8">
//     {Array(4).fill(0).map((x, index) => (
//         <div className="container mx-auto mb-8 px-4">
//             {transitions(
//     (styles, item) => item && <animated.div style={styles}>
//         <ListItem start={7} scend={2} delay={index} subString="Gallery City Center" description="Shopping Mall" />

//     </animated.div>)}
//     </div>
//     ))}
//     </div>
//     </div>

//                  </animated.div>);
// };

    return (
    <WrapperImageKnow className="mb-40 container mx-auto" >
  <div className=" grid grid-cols-1 md:grid-cols-2  justify-between  pt-16 ">
    <div className="container flex flex-col mt-16 px-12 mx-auto">
    <h2 className="text">For those who know how to <span style={{ color: "#ba9778" }}>choose</span></h2>
    <p className="subText">Energy efficiency simply means using less energy to perform the same task – that is, eliminating energy waste. Energy efficiency brings a variety of benefits: reducing greenhouse gas emissions, reducing demand for energy imports.</p>
    </div>
    <div className=" flex flex-col px-12 mt-16">

      {Array(4).fill(0).map((x, index) => (
          <Progrss index={index} textshow="700m" value={70} title="some title"/>
      ))}

    </div>
    </div>
    <div className="bg-white w-full md:w-10/12 border-t-4 border-black h-80 container  mt-40">
    <div className =" gap-6  grid grid-cols-2 mb-auto md:grid-cols-4 py-8">
    {Array(4).fill(0).map((x, index) => (
        <div className="container mx-auto mb-8 px-4 ">
            {transitions(
    (styles, item) => item && <animated.div style={styles}>
        <ListItem start={7} scend={2} delay={index} subString="Gallery City Center" description="Shopping Mall" />

    </animated.div>)}
    </div>
    ))}
    </div>
    </div>
    </WrapperImageKnow>
    );
};
