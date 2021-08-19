import { SubTitleListItem } from "./../ListiItems/ListItem.styles";
import styled, { keyframes } from "styled-components";

export const Image = styled("img")`
width: 100%;
max-width: 500px;
height: auto;
max-height:500px;
object-fit: fill;
`;

export const Title = styled("h3")`
text-align: start;
    font-family: "Oswald", Arial, Helvetica, sans-serif;
    color: #ba9778;
    display: block;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 1px;
    font-size: 45px;
    padding: 10px 30px;
    transition: all 200ms ease;

    color: #ba9778; 
font-size: 15px;
font-weight: 400;
height: 20px;
line-height: 21px;
margin: 0px 0px 32.25px;
padding: 0px;
width: 347px

`;

interface SubTitleProps{
    color?:string
}
export const SubTitle = styled("h4")<SubTitleProps>`
font-weight: 400;
font-family: "Vidaloka",Arial,Helvetica,sans-serif;

text-align: start;
    color: ${(props) => props.color ? props.color + "" : "#181818"};
    display: block;
    text-decoration: none;
    transition: all 200ms ease;
    color: inherit;
    font-weight: 500;
    transition: all 200ms ease;
    color: #181818;
    background-color: #fff;

font-family: Vidaloka, Arial, Helvetica, sans-serif;
font-size: 45px;
font-weight: 500;
line-height: 54px;
margin: 0px;


`;

export const Description = styled("a")<SubTitleProps>`
    font-weight: 400;
    line-height: 1.7em;
    text-align: start;
    color: #181818;
    text-decoration: none;
    transition: all 200ms ease;
    display: block;
    padding: 10px 30px;
    transition: all 200ms ease;

font-size: 14px;
font-weight: 400;
height: 47px;
line-height: 23.8px;


font-family: "Roboto Condensed", Arial, Helvetica, sans-serif;
font-size: 15px;
font-weight: 400;
height: 49px;
line-height: 25.5px;
margin: 0px;
padding: 0px;
margin-top: 30px;


`;
