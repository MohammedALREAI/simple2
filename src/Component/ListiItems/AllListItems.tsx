
import { AiOutlineCar } from "react-icons/ai";
import { ListItem } from "./listItem";
import { HeaderTitleBuilding, SectionAllItems } from "./ListItem.styles";

export const AllListItems = () => {
     return (
          <SectionAllItems className="container mx-auto  px-[40px] ">
               <HeaderTitleBuilding>Building Amenities</HeaderTitleBuilding>
               <div className="grid w-full h-full grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-8 gap-y-[25px] ">
                    {Array(8).fill(0).map((i, index) => (
                         <ListItem delay={index + 100} index={index}
                              subTitle={"Parking Space"}
                              description={"Windows, skylights, vents, and glass portions of doors helps."}
                              title={"AMENITIES"} icon={< AiOutlineCar className="my-[1.8rem] w-[2.5rem] h-[2.5rem]" />} />))}
               </div>
          </SectionAllItems>
     );
};
