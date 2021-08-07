import { HR, TitleHead } from "../MatlerSection/MailSection.styles";

interface HeaderTitleProps {
     title: string,
     className?:string
}
export const HeaderTitle = ({ title, className }: HeaderTitleProps) => {
     return (
          <div className={`flex items-center mb-12 pr-8 ${className}`}>
               <><HR /><TitleHead>{title}</TitleHead></>
          </div>
     );
};
