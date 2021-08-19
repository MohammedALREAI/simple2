import styled from "styled-components";

interface isActive{
    isActive?:boolean
}
export const SpanItem = styled("span")<isActive>`
color:${(props) => props.isActive ? "#ba9778" : props.color};
    transition: 350ms ease all;
    text-align: left !important;
    font-size: 1.2rem;
    width: 100%;
font-family: Oswald, Arial, Helvetica, sans-serif;
font-size: 18px;
font-weight: 400;
height: 23px;
line-height: 23.8px;
transition: 350ms ease all;

    
&:hover{
    color:#ba9778

}

`;
