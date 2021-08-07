import { HeaderTitle } from "../HeaderTitle/HeaderTitle";
import { TextLuxury, ButtonDiscover, TextDescription, ImageWrapper } from "./MailSection.styles";

export const MailSection = () => {
     return (
          <div className="container mx-auto w-full h-full grid grid-cols-1 md:grid-cols-2 gap-14 bg-white-200 mt-12">
               <div className="flex-col mt-12 w-4/6">
                    <HeaderTitle title={"MATERIALS"} />
                    <TextLuxury>Luxury in every detail</TextLuxury>
                    <TextDescription>Interior of volumes, space, air, proportion, with certain light and mood. These interiors are meant to last forever.</TextDescription>
                    <ButtonDiscover className="button-discover hover:animate-pulse ">Discover More<span className="ml-4">&#10141;</span></ButtonDiscover>
               </div>
               <div><ImageWrapper src="https://nestin.bold-themes.com/fancy/wp-content/uploads/sites/3/2020/01/inner_image_01.jpg" alt="your image name" /></div>
          </div>

     );
};
