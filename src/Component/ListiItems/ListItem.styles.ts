import styled from "styled-components";

interface IProps {
     index: number
}
export const WrapperListItem = styled("div") <IProps>`
background-color: ${(props) => props.index % 2 !== 0 ? "#ba9778" : "#f1f1f1"};
color: ${(props) => props.index % 2 === 0 ? "#ba9778" : "#ffffff"};
width:100%;
height:380px;
flex-direction: column;
flex-wrap: wrap;
justify-content: start;
align-items: flex-start;
padding: 0 1.6rem;
margin-top: 4rem;


`;
export const ImageWrapListItem = styled("span") <IProps>`
color: ${(props) => props.index % 2 === 0 ? "#ba9778" : "#ffffff"};
display: flex;
    align-content: center;
    justify-content: flex-end;
    margin-top: 1rem;
    margin-right: 1rem;
     cursor: pointer;
     margin-bottom: :2rem;
     &:hover{
          opacity:0.7
     }

`;
export const TitleListItem = styled("h2") <IProps>`
/* color: ${(props) => props.index % 2 !== 0 ? "#ba9778" : "#ffffff"}; */
color: ${(props) => props.index % 2 === 0 ? "#ba9778" : "#ffffff !important"};
text-align: start !important;
font-weight: 700;
margin-bottom: 1em;
font-size: 1.2rem;
transition: all 200ms ease;
font-family: "Oswald, Arial, Helvetica, sans-serif";

`;
export const SubTitleListItem = styled("h2") <IProps>`
color: ${(props) => props.index % 2 !== 0 ? "#ffffff" : "#181818"};
text-align: start !important;
font-family: "Oswald", Arial, Helvetica, sans - serif;
text-decoration: none;
transition: all 200ms ease;
font-weight: 700;
margin-bottom: 1em;
font-size: 1.2rem;

`;
export const DescriptionTitleListItem = styled("h2") <IProps>`
color: ${(props) => props.index % 2 !== 0 ? "#ffffff" : "#181818"};
font-family: "Oswald", Arial, Helvetica, sans - serif;
text-align: start !important;
font-weight: 400;
margin-bottom: 1em;
font-size: 1.2rem;
margin-bottom: 1rem;

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
font-weight: 700;
font-size: 3rem;
margin:3rem 0rem;
`;
