import { WrapperListItem, ImageWrapListItem, DescriptionTitleListItem, SubTitleListItem, TitleListItem } from "./ListItem.styles";
import { ReactNode, useState } from "react";
import { useTransition, animated } from "react-spring";

interface ListItemProps {
     index: number
     icon: ReactNode,
     title: string,
     subTitle: string
     description: string,
     delay:number

}
export const ListItem = ({ index, icon, subTitle, title, description, delay }: ListItemProps) => {
     const [show, set] = useState(false);
     const transitions = useTransition(show, {
       from: { opacity: 0 },
       enter: { opacity: 1 },
       reverse: false,
       delay: 300 + index * 150,
       config: { duration: 300 },
       onRest: () => set(true),
     });
     return transitions(
          (styles, item) => item &&
          <animated.div style={styles}>
          <WrapperListItem className="flex-col container mx-auto" index={index}>
               <ImageWrapListItem className="mb-12" index={index}>{icon}</ImageWrapListItem>
               <TitleListItem className="font-bold" index={index}>{title}</TitleListItem>
               <SubTitleListItem className="subtitle" index={index}>{subTitle}</SubTitleListItem>
               <DescriptionTitleListItem index={index}>{description}</DescriptionTitleListItem>
          </WrapperListItem>
          </animated.div>,

     );
};
