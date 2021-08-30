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

const fadeIn = keyframes`
  0% {
   opacity:0;
    }
  


  100% {
   opacity:1
  }

`;

export const SliderItemWrapper = styled("div")<SliderItemWrapperProps>`
background-image: ${(props) => props.imag ? `url(${props.imag})` : ""};
background-repeat: no-repeat;
background-size: 100% 100%;
height: 885.281px;
min-height:885.281px;
overflow: hidden;
object-fit: contain;
    transition: opacity 600ms ease-out 3ms; 
    transform: translate3d(0, 0, 0);
    transition: opacity 600ms ease-out 3.2ms;
    transition-property: opacity;
    transition-delay:300ms;
     z-index: 998; 
    animation: ${fadeIn} 600ms ease-out  ;
    transition: transform 1000ms cubic-bezier(.190,1,.220,1),opacity 1000ms cubic-bezier(.190,1,.220,1),opacity 600ms linearo;
    transition-delay:200ms;
    width: 100%;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;


    /* height: 484.469px; */

`;

export const SliderItemJustImage = styled("div")<SliderItemWrapperProps>`
background-image: ${(props) => props.imag ? `url(${props.imag})` : ""};
background-repeat: no-repeat;
background-size: 100% 100%;
transition: transform 1000ms cubic-bezier(.190,1,.220,1),opacity 1000ms cubic-bezier(.190,1,.220,1),opacity 600ms linearo;

    transition-delay:200ms;
position: relative;
    left: 0px;
    top: 0px;
    z-index: 998;
    opacity: 0;
width: 100%;
 height: 600px;
 width:100%;
 /* max-height: 600px; */
 max-height:600px;
 /* height:100%; */
object-fit: contain;

overflow-y: hidden;
    transition: opacity 600ms ease-out 0s;
  opacity: 1;
  z-index: 999;
  @media only screen and (max-width: 600px) {
    max-width: 380px !important;
    max-height: 560px;
position: absolute;

}


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
animation: ${TextHero} 0.4ms ease-in 0.2ms ;
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
    color: #ffffff;  
    /* transition:all 30ms ease; */
    writing-mode: vertical-rl;
  text-orientation: mixed;
  background:inherit;
  color: #ffffff;
  display: flex;
  font-size:18px;
  height: auto;
  /* font-weight: 500; */
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 3em #ba9778 inset;
    color: #ffffff;
writing-mode: vertical-rl;
  text-orientation: mixed;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
    transition: all 200ms ease;
    &:hover{
      /* animation: ${scale} 4s; */
      /* transition: all 200ms ease; */


    }
    color: #ffffff; 
font-family: Oswald, Arial, Helvetica, sans-serif;
font-weight: 300;
padding:10px;
    
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
      /* width: 100%; */
      height: 885.281px;
      max-height: 882px;
      /* max-width:100%; */
      /* min-width:100%; */
       margin-top: 50px;
       margin: 0px  auto;
       transition: opacity 600ms ease-out 3.2ms;
    `;
export const DisscoverMore = styled("div")`

  &:hover {
  flex-direction:row-reverse;
  animation: ${discoverHover} 3000ms ease-in 2;
}
`;
export const DisscoverSpan = styled("span")`


span:hover{
  /* animation: ${discoverHoverArrow} 2s ease-in 1 ; */

}
&:hover{
  /* animation: ${discoverHoverArrow} 2s ease-in 1 ; */
}

`;

export const BoxBolit = styled("div")`
width: 100%;
height: 100%;
writing-mode: vertical-rl;
  text-orientation: mixed;
  background-color: #ba9778;
  color: #ffffff;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
    transition: all 200ms ease;
    color: #ffffff; 
font-family: Oswald, Arial, Helvetica, sans-serif;
font-size: 12px;
font-weight: 300;
font-weight: 400;
height: 70px;
line-height: 22.05px;
margin: 0px;
padding: 24px;
width: 164px !important;

&:hover{
      /* animation: ${scale} 4s; */
      /* transition: all 200ms ease; */


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
width:70px;
height: auto;
padding:10px 20px;
position: absolute;
writing-mode: vertical-rl;
  text-orientation: mixed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;

  font-weight: 500;
  box-shadow: 0 0 0 3ms #ba9778 inset;
  position: absolute;
  top: 75%;
  min-height: 164px;
  min-width: 70px;
  z-index: 30;
  right: -0;
  font-weight: 300;
  letter-spacing: 1px;
  font-size: 18.05px;
  box-shadow: 0 0 0 3em #ba9778 inset;
    color: #ffffff;
    top: 60%;
    &:hover{
    transition: all 300ms ease;

    animation: ${scale} 300ms;
      transition: all 200ms ease;

    }
`;
