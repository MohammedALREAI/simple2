import styled, { keyframes } from "styled-components";

interface listItemPropsStyle{

    isActive?:boolean,
}
const ListItemStyle = styled("li")<listItemPropsStyle>`
    font-weight: 400;
    letter-spacing: 1px;
    font-family: "Oswald", Arial, Helvetica, sans-serif;
    color: #ba9778;
    font-size: 1.1em;
    line-height: 1.15;
    display: inline-block;
    cursor: auto;
border-bottom: ${(props) => props.isActive ? "1px solid #b8b8b8" : ""}

`;

interface ListItemProps extends listItemPropsStyle{
text:string,
className?:string,
onClick:()=>void
}
export const ListItem = ({ text, className, onClick }:ListItemProps) => {
    return (<ListItemStyle className={className} onClick={onClick}> {text}</ListItemStyle>
    );
};
