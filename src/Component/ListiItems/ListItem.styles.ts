import styled from "styled-components";

interface IProps {
     index: number
}
export const WrapperListItem = styled("div") <IProps>`
background-color: ${(props) => props.index % 2 !== 0 ? "#ba9778" : "#f1f1f1"};
color: ${(props) => props.index % 2 === 0 ? "#ba9778" : "#ffffff"};
width:100%;
max-height:300px;
height:300px;
flex-direction: column;
flex-wrap: wrap;
justify-content: start;
align-items: flex-start;
padding: 0 1.6rem;
margin-top: 1.5rem;
`;
export const ImageWrapListItem = styled("span") <IProps>`
color: ${(props) => props.index % 2 === 0 ? "#ba9778" : "#ffffff"};
display: flex;
    align-content: center;
    justify-content: flex-end;
    margin-top: 1rem;
    margin-right: 1rem;
     cursor: pointer;
     /* margin-bottom: 2rem; */
     &:hover{
          opacity:0.7
     }

`;
export const TitleListItem = styled("h2") <IProps>`
/* color: ${(props) => props.index % 2 !== 0 ? "#ba9778" : "#ffffff"}; */



color: ${(props) => props.index % 2 === 0 ? "#ba9778" : "#ffffff !important"};
text-align: start !important;
font-weight: 700;
margin-bottom: 13px;
font-size: 13px;
transition: all 200ms ease;
font-family: "Oswald, Arial, Helvetica, sans-serif";
font-size: 13.005px;
font-weight: 400;
height: 18px;
line-height: 18.207px;
margin: 0px 0px 13.005px;

`;
export const SubTitleListItem = styled("h2") <IProps>`
color: ${(props) => props.index % 2 !== 0 ? "#ffffff" : "#181818"};
text-align: start !important;
text-decoration: none;
transition: all 200ms ease;
font-weight: 500;
margin-bottom: 1em;
font-size: 25px;
font-family: Vidaloka, Arial, Helvetica, sans-serif;
font-size: 25.005px;
font-weight: 300;
height: 30px;
line-height: 30.006px;
margin-bottom: 12px;

`;
export const DescriptionTitleListItem = styled("h2") <IProps>`
color: ${(props) => props.index % 2 !== 0 ? "#ffffff" : "#181818"};
font-family: "Oswald", Arial, Helvetica, sans - serif;
text-align: start !important;
font-weight: 400;
font-size: 15px;
font-family: "Roboto Condensed", Arial, Helvetica, sans-serif;
font-size: 14px;
font-weight: 400;
height: 70px;
line-height: 23.8px;


@media (max-width: 768px) {
     font-size: 15px;
     font-weight: 400;
     height: 49px;
     line-height: 25.5px;




}

`;

export const SectionAllItems = styled("section")`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-content: flex-start;
align-items: flex-start;

`;

export const HeaderTitle = styled("h2")`
display: block;
color: #181818; 
font-size: 60px;
margin:1rem 0rem;   
opacity: 0.89;
font-weight: 500;
font-family: Vidaloka, Arial, Helvetica, sans-serif;
max-height: 71px;
line-height: 72px;
@media (max-width: 768px) {
     height: 53px;
     line-height: 54px;
margin-bottom: 40px;

}

`;

export const HeaderTitleBuilding = styled(HeaderTitle)`

color: #181818; 
font-family: Vidaloka, Arial, Helvetica, sans-serif;
font-size: 45px;
font-weight: 500;
height: 53px;
line-height: 54px;
margin: 0px;




`;

export const WrapperTextButton = styled("div")`
width: 206px;
height : 60px;
display: flex;
align-items: center;
text-transform: uppercase;
@media (max-width: 768px) {
    margin-bottom: 30px; 


}
`;
