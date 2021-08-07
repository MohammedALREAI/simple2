import styled, { keyframes } from "styled-components";

interface SliderItemWrapperProps {
    imag:string
}

const scale = keyframes`
 0%{
    transform: scale( .75 );
  }
  20%{
    transform: scale( 1.1 );
  }
  40%{
    transform: scale( .75 );
  }60%{
    transform: scale( 1.1 );
  }80%{
    transform: scale( .75 );
  }
  100%{
    transform: scale( .75 );
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
  width: 100%;
  object-fit: fill;
  opacity: 1;
  height: 547.469px;


  
`;

export const SliderTitle = styled("h2")`
font-size: 1.067rem;
  font-weight: 400;
  animation: ${TextHero} 2s ease-in 1 ;
  font-family: "Oswald", Arial, Helvetica, sans-serif;
  line-height: 1.4;
  text-align: start;
`;
export const SliderSubTitle = styled(SliderTitle)`
  font-size: 3rem;
  line-height: 1.2;
  font-weight: 500;
  
`;

export const SpanBox = styled("span")`
  width: auto;
  height: auto;
  
  writing-mode: vertical-rl;
  text-orientation: mixed;
  background-color: #ba9778;
  color: #ffffff;
  display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 3em #ba9778 inset;
    color: #ffffff;
    &:hover{
      animation: ${TextHero} 2s infinite;

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
  display:reverse-row;
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
  width: 6rem;
  height: 12rem;
  text-orientation: mixed;
  background-color: #ba9778;
  color: #ffffff;
  display: flex;
    align-items: center;
    justify-content: center;
    position:absolute;
     right:0%;
     //////////////////////////////////////////////////  
    &:hover{
      animation: ${scale} 4s infinite;

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
