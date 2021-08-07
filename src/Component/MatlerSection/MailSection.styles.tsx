import styled from "styled-components";

export const TextDescription = styled("p")`
     font-size: 1.334rem;
     text-align: start !important;
     margin-top: 1.6em;
     font-weight: 300;
     font-family: "Roboto Condensed", Arial, Helvetica, sans-serif;
     line-height: 1.6;
     clear: both;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  border: 6px solid #fcdd06;
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
export const ButtonDiscover = styled("button")`
     margin-top: 3rem;
     line-height: 1;
     font-size: 1.14rem;
     cursor: pointer;
     letter-spacing: 1px;
     font-weight: 400;
     transition: all 200ms ease;
     text-align: start;
     width: 70%;
     height: 4rem;
     padding: 1.2rem;
     text-align:start;
     display: flex;
     align-items: center;
     text-transform: uppercase;
     box-shadow: 0 0 0 3em #7a7571 inset;
     color: #ffffff;
     &:hover{
     animation: pulse 1s 2s 3 alternate backwards !important;
     @keyframes pulse {
     50% {
          transform: translateY(10px);
          opacity: 0.7;
     }
     100% {
          transform: translateY(-10px);
          opacity: 1;
     }
}}
span{
width:2rem;
}
`;
export const HR = styled.hr`
 color: #ba9778;
  fill: #ba9778;
  background: #ba9778;
  margin-right: 1rem;
  width: 4rem;
  height: 4px;

`;
export const TitleHead = styled.h2`
text-align: start !important;
font-weight: 500;
 color: #ba9778;
 font-family: "Oswald, Arial, Helvetica, sans-serif";
 font-size: 1.4rem;

`;

export const TextLuxury = styled.h2`
     font-weight: 700;
     text-align: start !important;
     line-height: 1.2;
     margin: 0;
     padding-left: 1rem;
     font-family: "Oswald, Arial, Helvetica, sans-serif";
     font-size: 4.3rem;
     margin-bottom: 1rem;
     letter-spacing: 1px;

`;

export const ImageWrapper = styled("img")`
width: 100%;
height: 100%;
object-fit: contain;

`;
