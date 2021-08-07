
import { AiOutlineCar } from "react-icons/ai";
import { ListItem } from "./listItem";
import { HeaderTitle, SectionAllItems } from "./ListItem.styles";

export const AllListItems = () => {
     return (
          <SectionAllItems className="container mx-auto">
               <HeaderTitle className=" headerTitle text-3xl font-weight">Building Amenities</HeaderTitle>

               <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 w-full h-full gap-5">
                    {Array(8).fill(0).map((i, index) => (
                         <ListItem delay={index + 100} index={index}
                              subTitle={"Parking Space"}
                              description={"Windows, skylights, vents, and glass portions of doors helps."}
                              title={"AMENITIES"} icon={< AiOutlineCar size={70} />} />))}
               </div>
          </SectionAllItems>
     );
};
