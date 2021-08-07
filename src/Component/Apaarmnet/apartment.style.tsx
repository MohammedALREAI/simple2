import styled, { keyframes } from "styled-components";

const TextHero = keyframes`
 0%{
  opacity: 0;
  }
 
  100%{
    opacity:1;  
  }
`;
export const TitleHeadAppp = styled("h4")`
    color: #181818;
    text-align: start;
    font-size: 3rem;
    font-weight: 500;
      animation: ${TextHero} 2s ease-in 1 ;
  font-family: "Oswald", Arial, Helvetica, sans-serif;
  line-height: 1.4;
  text-align: start;
  

`;

export const HR = styled.hr`
background: rgba(0,0,0,.2);
width: 100%;
height: 1px;
color: rgba(0,0,0,.2);

  
`;
