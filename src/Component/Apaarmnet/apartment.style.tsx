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
    font-weight: 500;
      animation: ${TextHero} 2s ease-in 1 ;
  font-family: "Oswald", Arial, Helvetica, sans-serif;
  line-height: 1.4;
  text-align: start;
  margin-bottom: 40px;
  color: #181818; 
font-family: Vidaloka, Arial, Helvetica, sans-serif;
font-size: 45px;
font-weight: 500;
line-height: 54px;

`;

export const HR = styled.hr`
background: rgba(0,0,0,.2);
width: 100%;
height: 1px;
color: rgba(0,0,0,.2);

  
`;

export const SpanList = styled("span")`
    font-weight: 500;
    color: #181818; 
font-family: Oswald, Arial, Helvetica, sans-serif;
font-size: 14px;
font-weight: 400;
height: 23px;
line-height: 23.8px;

@media (min-width: 768px) {
       color: #181818; 
/* font-family: "Oswald, Arial, Helvetica, sans-serif"; */
font-size: 15px;
font-weight: 400;
height: 24px;
line-height: 25.5px;
}
`;
