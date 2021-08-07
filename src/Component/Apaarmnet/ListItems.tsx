import React from "react";
import { AiFillCar } from "react-icons/ai";
import { IconType } from "react-icons/lib";
import { HR } from "./apartment.style";

interface Props {
text:string,
icon:IconType,
value:number
}

export const ListItems = ({ text, icon, value }: Props) => {
    return (
        <div className="fex flex-col text-black  w-7/9">
        <HR/>
        <div className="flex  justify-between items-center">
          <div className="flex py-2">
          <li className="flex items-start">
                      <span className="h-6 flex items-center sm:h-7" style={{
                          color: "#ba9778",
                      }}>
                        <AiFillCar/>
                      </span>
                      <p className="ml-4 tex-lg font-semibold">
                          {text}
                      </p>
                    </li>
          </div>
          <div className="mr-2">{value}</div>
        </div>
      </div>
    );
};
