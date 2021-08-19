import { useState } from "react";
import { SimpleSection } from "../ApartmentSection/simpleSection";
import { useTransition, animated } from "react-spring";
import { DataStatic } from "../ApartmentSection/staticData";

interface Porps {
    data:Array<DataStatic>

}
export const DataItems = ({ data }:Porps) => {
    const [show, set] = useState(false);
    const transitions = useTransition(show, {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
      reverse: show,
      delay: 50,
      onRest: () => set(true),
    });
    console.log("DataItems", data);
    return transitions(
      (styles, item) => item && <animated.div style={styles} className="  grid grid-cols-1  lg:grid-cols-3 gap-4">
        {data.length && data.map((x, index) => (<SimpleSection {...x} key={index}/>))}

      </animated.div>);
};

interface PropsListTab{
    onClick:(e:any)=>void,
    title:string
    currentTab:number,
    activeTab:number
}
export const ListTab = ({ title, onClick, currentTab, activeTab } : PropsListTab) => {
    return (
        <a
        href={`#link${currentTab}`}
        className={
            `tab mb-4 ${activeTab === currentTab ? "isActive" : ""}`}
        onClick={onClick}
        data-toggle="tab"
        role="tablist"
    >
        <span className="spantitle uppercase flex items-center justify-start pl-2 ">
        {title}
        </span>
    </a>
    );
};
