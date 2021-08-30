import { SliderItemWrapper, HR, SliderSubTitle, SliderTitle, SpanBox, BoxBolit, SubRow, SubWrapper } from "./Slider.style";
import { DiscoverMore } from "../DiscoverMoreButtonHero/DiscoverMore";
 export interface PropsSliderItem {
    location: string;
    description: string;
    image: string;
}

export const SliderItem = ({ description, image, location }: PropsSliderItem) => (
<SliderItemWrapper imag={image} className="z-10  flex flex-col justify-end" >
  <SubWrapper className=" z-50 flex justify-between  pl-20 ">
    <SubRow className="flex  w-1/2">
      <div className="flex items-start">
      <HR className="pr-4"/>
    <div className="flex flex-col">
      <SliderTitle className="text-[16.5px] lg:text-[20.1px] mb-[35px] text-white font-[500] ">{location}</SliderTitle>
      <SliderSubTitle className="text-white text-[80px]">{description.split(" ")[0]}</SliderSubTitle>
      <SliderSubTitle className="  text-white">{description.split(" ").slice(1).join(" ") }</SliderSubTitle>
      <DiscoverMore/>
    </div>
</div>
  </SubRow>
 </SubWrapper>

</SliderItemWrapper>
);
