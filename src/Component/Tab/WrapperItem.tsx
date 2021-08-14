import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { DataStatic } from "../ApartmentSection/staticData";
import { DataItems } from "./NavItme";

interface Props {
    currentTab:number,
    activeTab:number
    data:Array<DataStatic>
}

export const WrapperItem = ({ currentTab, activeTab, data }: Props) => {
    const [show, set] = useState(false);
    const transitions = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      reverse: false,
      delay: 50,
      config: { duration: 50 },
      onRest: () => set(true),
    });
    console.log("WrapperItem", data);
    return transitions(
        (styles, item) => item &&
        <animated.div style={styles} className={`${activeTab === currentTab ? "block" : "hidden"}`} id={`link${currentTab}`}>
            just for  {currentTab} testing
        <DataItems data={currentTab % 2 === 0 ? data : data.reverse()} />

        </animated.div>,
    );
};
