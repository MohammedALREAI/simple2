import { Titre } from "./../ProgressBar/tooltip.style";
import styled, { keyframes } from "styled-components";
export const WrapperImageKnow = styled("div")`
 background: url("https://nestin.bold-themes.com/fancy/wp-content/uploads/sites/3/2020/01/background_01.jpg");
  /* background-position: 50% 108.001px; */
  background-repeat: no-repeat;
  height: 885.281px;
    max-height: 885.281px;
     max-width: 1326px;
     min-width: 1326px;
      object-fit: fill;
      width: 1326px;
  text-align: start;
  background-position: center center !important;
  .text{
box-sizing: border-box;
  color: white;
  background-repeat: no-repeat;
  font-size: 3rem;
  font-weight: 500;
  }
  .subText {
  color: white;
  background-repeat: no-repeat;
  font-size: 1.3rem;
  font-weight: 400;
  margin: 40px 0px;
}
@media only screen and (max-width: 600px) {
  .text {
    font-size: 2rem;
}
}

`;
export const Title = styled("h4")`
display: block;
    height: 1.2em;
    overflow: hidden;
    position: relative;
    text-align: start;
    font-weight: 500;
    font-size: 5em;
    height: 1.2em;    
    font-family: "Vidaloka", Arial, Helvetica, sans-serif;
    color: #ba9778;

`;

interface Title{
  color?:string;
  size?:number|string,
  fw?:number
}

export const Subtitle = styled(Title)<Title>`
    display: block;
    line-height: 1.7;
    display: block;
    font-size: 1rem;
    line-height: 1.7;
    color: #191919;
    margin:20px 0px;
color:  ${(props) => props.color ? props.color : ""};
font-size : ${(props) => props.color ? props.color : ""};
font-weight:${(props) => props.fw ? props.fw : ""};

`;
export const TitreProgress = styled(Titre)`
    background: rgb(186, 151, 120);
    margin-top: -8px;
    transform: rotate(-45deg);
`;

interface progressAnimated{
  value:number,
}
export const animatedProgress = (y:number) => keyframes`
0%{
      width: 0%;
    }
    25%{
        width:  ${y >= 25 ? 25 : y}%;
    }
    50%{
      width:  ${y >= 50 ? 50 : y}%;
    }
    75%{
      width:  ${y >= 75 ? 75 : y}%;
    }
    100%{
      width:  ${y >= 100 ? 100 : y}%;
    }

`;

export const ProgressAnimated = styled("div")<progressAnimated>`

animation : ${props => animatedProgress(props.value)} 3s linear;
`;
