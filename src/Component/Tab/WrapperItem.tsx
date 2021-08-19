import { useState } from "react";
import { useTransition, animated } from "react-spring";
import { DataStatic } from "../ApartmentSection/staticData";
import { DataItems } from "./NavItme";

interface Props {
    currentTab:number,
    activeTab:number
    data:Array<DataStatic>,
    index:number
}
export const WrapperItem = ({ currentTab, activeTab, data, index }: Props) => {
    const [show, set] = useState(false);
    const transitions = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      reverse: false,
      delay: 50 + index * 100,
      config: { duration: 50 + index * 100 },
      onRest: () => set(true),
    });
    const newdata = activeTab === 1 || activeTab === 3 ? data.reverse() : data;
    return transitions(
        (styles, item) => item &&
        <animated.div style={styles}>
            just for  {currentTab} testing
<DataItems data={newdata} />
        </animated.div>,
    );
};
