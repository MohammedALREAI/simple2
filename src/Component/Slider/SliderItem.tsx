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
    <SubRow className="flex  w-1/3">
      <div className="flex items-start">
      <HR className="pr-4"/>
    <div className="flex flex-col">
      <SliderTitle className="uppercase text-white font-bold mb-4">{location}</SliderTitle>
      <SliderSubTitle className="  text-white">{description.split(" ")[0]}</SliderSubTitle>
      <SliderSubTitle className="  text-white">{description.split(" ").slice(1).join(" ") }</SliderSubTitle>
      <DiscoverMore/>
      {/* <DisscoverMore className="text-white text-left mt-6 flex h-12 spanitem">Discover More
       <span className=" ml-2 text-bold  w-24 h-24 text-xl text-white cursor-pointer hover:hidden">&#10141;</span>
 </DisscoverMore> */}
    </div>
</div>
  </SubRow>
  <div className="relative left-0 justify-center  mt-16 z-50 hidden md:flex">
<BoxBolit className="bg-gray-900 z-50">
<SpanBox className="flex justify-end items-">BOLLING A VISIT</SpanBox>
</BoxBolit>
</div>  </SubWrapper>

</SliderItemWrapper>
);
