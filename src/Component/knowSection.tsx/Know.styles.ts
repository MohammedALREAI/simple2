import { Titre } from "./../ProgressBar/tooltip.style";
import styled, { keyframes } from "styled-components";
export const WrapperImageKnow = styled("div")`
 background: url("https://nestin.bold-themes.com/fancy/wp-content/uploads/sites/3/2020/01/background_01.jpg");
  /* background-position: 50% 108.001px; */
  background-repeat: no-repeat;
  min-height: auto;
     /* max-width: 1326px; */
     min-width: 100%;
      object-fit: fill;
      width: 100%;


      height: auto;
  text-align: start;
  margin-bottom: 14rem;
  background-position: center center !important;
  .subText {
  color: white;
  background-repeat: no-repeat;
  font-size: 1.3rem;
  font-weight: 400;

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
    font-size: 75px;
    height: 90px;
    text-transform: uppercase;
    line-height: 75px;
    font-family: Oswald, Arial, Helvetica, sans-serif;
    color: #ba9778; 
      font-size: 75px;   
 @media (max-width: 640px) {
      font-size:70px;

    }

`;

interface Title{
  color?:string;
  size?:number|string,
  fw?:number
}

export const Subtitle = styled("h5")<Title>`
    display: block;
    line-height: 1.7;
    display: block;
    line-height: 30px;
    color: rgb(25, 25, 25);
    letter-spacing: 1px;
    margin:20px 0px;
    text-transform: uppercase;
    font-family: "Roboto Condensed", Arial, Helvetica, sans-serif;
    line-height: 25.5px;
    margin: 0px 0px 8.625px;
    line-height: 20.7px;
    color: #191919; 
    font-size: 17.25px;
    font-family: Oswald, Arial, Helvetica, sans-serif;
`;

export const SubSubtitle = styled(Subtitle)`
    display: block;
    line-height: 1.7;
    display: block;
    line-height: 30px;
    color: rgb(25, 25, 25);
    letter-spacing: 1px;
    margin:20px 0px;
    line-height: 25.5px;
    margin: 0px 0px 8.625px;
    color: #191919; 
    font-family: "Roboto Condensed", Arial, Helvetica, sans-serif;
    font-size: 15px;
    font-weight: 400;
    height: 24px;
    line-height: 25.5px;
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
  width:  ${y >= 0 ? 0 : y}%;
    }
5%{
  width:  ${y >= 5 ? 5 : y}%;
    }
10%{
  width:  ${y >= 10 ? 10 : y}%;
    }
15%{
  width:  ${y >= 15 ? 15 : y}%;
    }
    20%{
        width:  ${y >= 20 ? 20 : y}%;
    }
    25%{
        width:  ${y >= 25 ? 25 : y}%;
      }

    30%{
        width:  ${y >= 30 ? 30 : y}%;
    }
    35%{
        width:  ${y >= 35 ? 35 : y}%;
    }
    40%{
        width:  ${y >= 40 ? 40 : y}%;
    }
    45%{
        width:  ${y >= 45 ? 45 : y}%;
    }
    50%{
      width:  ${y >= 50 ? 50 : y}%;
    }
    60%{
      width:  ${y >= 60 ? 60 : y}%;
    }
    70%{
      width:  ${y >= 70 ? 70 : y}%;
    }
    75%{
      width:  ${y >= 75 ? 75 : y}%;
    }
    80%{
      width:  ${y >= 80 ? 80 : y}%;
    }
    85%{
      width:  ${y >= 85 ? 85 : y}%;
    }
    90%{
      width:  ${y >= 90 ? 90 : y}%;
    }
    95%{
      width:  ${y >= 95 ? 95 : y}%;
    }
    100%{
      width:  ${y >= 100 ? 100 : y}%;
    }

`;

export const ProgressAnimated = styled("div")<progressAnimated>`

animation : ${props => animatedProgress(props.value)} 3s linear;
`;
