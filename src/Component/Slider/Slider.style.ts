import styled, { keyframes } from "styled-components";

interface SliderItemWrapperProps {
    imag:string
}

const scale = keyframes`
  0% {
    transform: translateX(1px);
  }
  
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(-1px);
  }
`;

const TextHero = keyframes`
 0%{
  opacity: 0;
  }
 
  100%{
    opacity:1;  
  }
`;

export const SliderItemWrapper = styled("div")<SliderItemWrapperProps>`
background-image: ${(props) => props.imag ? `url(${props.imag})` : ""};
background-repeat: no-repeat;
background-size: 100% 100%;
width: 1326px;
height: 885.281px;
     overflow: hidden;
object-fit: contain;
     max-height: 885.281px;
      max-width:1326px;
      min-width:1326px;
    transition: opacity 600ms ease-out 0s;
  opacity: 1;

`;
export const SliderItemJustImage = styled("div")<SliderItemWrapperProps>`
background-image: ${(props) => props.imag ? `url(${props.imag})` : ""};
background-repeat: no-repeat;
background-size: 100% 100%;
    position: relative;
    left: 0px;
    top: 0px;
    z-index: 998;
    opacity: 0;
    height: 600px;
    transition: opacity 600ms ease-out 0s;
width: 1326px;
 height: 600px;
 /* width:100%; */
 /* height:100%; */
object-fit: contain;
 max-width:1326px;
min-width:1326px;
max-height: 885.281px; 

    transition: opacity 600ms ease-out 0s;
  opacity: 1;
  z-index: 999

`;

export const ArrowsWrapper = styled("div")`
          z-index: auto;
          width: 100%;
          margin-top: -50px;
          display: flex;
          justify-content: flex-end;
          flex-direction: row;
          align-content: stretch;
          padding-right: 50px;
                        `;

export const SliderTitle = styled("h2")`
font-size: 1.067rem;
  font-weight: 400;
  animation: ${TextHero} 2s ease-in 1 ;
  font-family: "Oswald", Arial, Helvetica, sans-serif;
  line-height: 1.4;
  text-align: start;
    color: #ffffff;
    transition:all 30ms ease;
    font-family: "Vidaloka",Arial,Helvetica,sans-serif;
    transition: all 30ms ease;
`;
export const SliderSubTitle = styled(SliderTitle)`
  font-size: 3rem;
  font-family: "Oswald",Arial,Helvetica,sans-serif;
  line-height: 1.2;
  font-weight: 500;
  transition:all 30ms ease;
  font-family: "Vidaloka",Arial,Helvetica,sans-serif;
  
`;

export const SpanBox = styled("span")`
    box-shadow: 0 0 0 3em #ba9778 inset;
    color: #ffffff;  
    transition:all 30ms ease;
    writing-mode: vertical-rl;
  text-orientation: mixed;
  background-color: #ba9778;
  color: #ffffff;
  display: flex;
  font-size:18px;
  font-weight: 500;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 3em #ba9778 inset;
    color: #ffffff;

    &:hover{
      /* animation: ${TextHero} 2s infinite; */

    }

    width:100%;
height: 100%;
writing-mode: vertical-rl;
  text-orientation: mixed;
  background-color: #ba9778;
  color: #ffffff;
  display: flex;
  background: red;
  align-items: center;
  justify-content: center;
  text-decoration: none;
    transition: all 200ms ease;
    &:hover{
      animation: ${scale} 4s;
      transition: all 200ms ease;


    }
  
    
 `;

 const discoverHover = keyframes`
 50%{
    transform: translateX(20px);
  }

  100%{
    transform: translateX(-20px);
  }`;

const discoverHoverArrow = keyframes`
50%{
   transform: translateX(-100px);
  /* display:reverse-row; */
 }

 100%{
   transform: translateX(50px);
 }`;

export const WrapperMe = styled("div")`
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: space-evenly;
      align-items: flex-start;
      overflow: hidden;
      width: 100%;
      height: 885.281px;
      max-height: 882px;
      max-width:1326px;
      min-width:1326px;
       margin-top: 50px;
       transition: opacity 600ms ease-out 0s;
    `;

export const DisscoverMore = styled("div")`


  &:hover {
  animation: ${discoverHoverArrow} 2s ease-in 1 ;
  flex-direction:row-reverse;
  animation: ${discoverHover} 2s ease-in 1 ;

}

`;
export const DisscoverSpan = styled("span")`


span:hover{
  animation: ${discoverHoverArrow} 2s ease-in 1 ;

}
&:hover{
  animation: ${discoverHoverArrow} 2s ease-in 1 ;
}

`;

export const BoxBolit = styled("div")`
width: 100%;
height: 100%;
writing-mode: vertical-rl;
  text-orientation: mixed;
  background-color: #ba9778;
  color: #ffffff;
  font-size: 22px;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
    transition: all 200ms ease;
    &:hover{
      animation: ${scale} 4s;
      transition: all 200ms ease;


    }
 `;
export const SubRow = styled("div")`
display: flex;
align-items: flex-start;
    justify-content: space-between;
    
 `;

export const SubWrapper = styled("div")`


    
 `;

export const HR = styled("div")`
width:2px;
height:400px;
border-left: 2px solid white;

  `;

export const WrapperRight = styled("div")`
width: 6rem;
height: 200px;
position: absolute;
writing-mode: vertical-rl;
  text-orientation: mixed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 500;
  box-shadow: 0 0 0 3em #ba9778 inset;
  position: absolute;
  top: 75%;
  min-height: 164px;
  min-width: 70px;
  z-index: 30;
  right: -0;
  /* right:-2rem;  */
  margin: 0;
  font-weight: 300;
  letter-spacing: 1px;
  position: absolute;
    top: 62%;
`;
