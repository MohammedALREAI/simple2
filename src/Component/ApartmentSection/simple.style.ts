import { SubTitleListItem } from "./../ListiItems/ListItem.styles";
import styled, { keyframes } from "styled-components";

export const Image = styled("img")`
width: 580px;
height:500px;
object-fit: fill;
`;

export const Title = styled("h3")`
font-weight: 400;
font-size: 1rem;
text-align: start;
    font-family: "Oswald", Arial, Helvetica, sans-serif;
    color: #ba9778;
    display: block;
`;

interface SubTitleProps{
    color?:string
}
export const SubTitle = styled("a")<SubTitleProps>`
font-weight: 400;
font-size: 3rem;
text-align: start;
    font-family: "Oswald", Arial, Helvetica, sans-serif;
    color: ${(props) => props.color ? props.color + "" : "#ba9778"};
    display: block;
    text-decoration: none;
    transition: all 200ms ease;
    color: inherit;
`;

export const Description = styled("a")<SubTitleProps>`
    font-weight: 400;
    line-height: 1.7em;
    text-align: start;
    font-family: "Oswald", Arial, Helvetica, sans-serif;
    color: #181818;
    text-decoration: none;
    transition: all 200ms ease;
    color: inherit;
    display: block;
   
`;
