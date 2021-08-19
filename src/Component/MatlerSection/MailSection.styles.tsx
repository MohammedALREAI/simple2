import styled, { keyframes } from "styled-components";

export const TextDescription = styled("p")`
     font-size: 1.2rem;
     opacity: 0.7;
     text-align: start;
     margin-top: 1.6em;
     font-weight: 300;
          font-family: "Roboto Condensed", Arial, Helvetica, sans-serif;
     line-height: 1.6;
    margin-top: 1.6em;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 6px solid #f0ebce;
  box-sizing: border-box;
  border-radius: 50%;
  border-top-color: #c5a7a7;
  margin-top: 20%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const pulse = keyframes`
50% {
          transform: translateY(10px);
          opacity: 0.7;
     }
     100% {
          transform: translateY(-10px);
          opacity: 1;
     }
`;
export const ButtonDiscover = styled("button")`
     margin-top: 4rem;
     line-height: 1;
     font-weight: 300;
     cursor: pointer;
     letter-spacing: 1px;
     font-weight: 400;
     outline: none;
    border: 1px solid;
     transition: all 200ms ease;
     text-align: start;
     width: 270px;
     text-align:start;
     display: flex;
     align-items: center;
     text-transform: uppercase;
     color: #ffffff;
     background: #ba9778 ;
     padding: 20px;
     outline: none;
     border: 0;
color: #ffffff; 
font-family: Oswald, Arial, Helvetica, sans-serif;
font-size: 17.1px;
font-weight: 300;
     transition: all 300ms ease;
     &:hover {
     /* animation: ${pulse} 1s 2s 3 alternate backwards !important;
      */
     animation: ${pulse} 2s ease-in 1 ;

      }
`;
export const HR = styled.hr`
 color: #BA9778;
  fill: #BA9778;
  background: #BA9778;
  height: 2px;
  transition: 800ms cubic-bezier(.15,.75,.5,1);


`;
export const TitleHead = styled.h2`
text-align: start !important;
font-weight: 500;
 color: #ba9778;
 font-family: "Oswald, Arial, Helvetica, sans-serif";
 font-size: 1.4rem;

`;

export const TextLuxury = styled.h2`
     font-weight: 500;
     text-align: start !important;
     line-height: 1.2;
     margin: 0;
     font-family: "Vidaloka",Arial,Helvetica,sans-serif;
     margin-bottom: 1rem;
     letter-spacing: 1px;

`;

export const ImageWrapper = styled("img")`
width: 100%;
height: 100%;
object-fit: contain;

`;
