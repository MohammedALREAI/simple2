import React from "react";
import { AiFillCar } from "react-icons/ai";
import { IconType } from "react-icons/lib";
import { HR, SpanList } from "./apartment.style";

interface Props {
text:string,
icon:IconType,
value:number
}

export const ListItems = ({ text, icon, value }: Props) => {
    return (
        <div className="fex flex-col ">
        <HR style={{
 borderColor: "rgba(0, 0, 0, 0.2)",
}}/>
        <div className="flex  justify-between items-center">
          <div className="flex py-4 ">
          <li className="flex items-start space-x-5">
                      <span className="h-6 flex items-center sm:h-7" style={{
                          color: "#ba9778",
                      }}>
                        <AiFillCar/>
                      </span>
                      <SpanList>
                          {text}
                      </SpanList>
                    </li>
          </div>
          <div className="mr-2">{value}</div>
        </div>
      </div>
    );
};
