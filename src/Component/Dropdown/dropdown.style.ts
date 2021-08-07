import styled from "styled-components";

interface isActive{
    isActive?:boolean
}
export const SpanItem = styled("span")<isActive>`
color:${(props) => props.isActive ? "#ba9778" : "#color: #181818;"};
    transition: 350ms ease all;
    text-align: left !important;
    font-size: 1.2rem;
    width: auto;
    
&:hover{
    color:#ba9778

}

`;
