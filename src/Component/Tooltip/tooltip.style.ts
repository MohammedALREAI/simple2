import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(1.1);
    b
  }
  35% {
    opacity: 0.7;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
}`;
export const TooltipStyle = styled("div")`
   width: 30px;
  height: 30px;
  font-family: "Oswald", Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 2;
  text-align: center;
  border-radius: 35%;
  cursor: pointer;
  transform: scale(1);
  -webkit-transition: all 800ms ease;
  -moz-transition: all 800ms ease;
  transition: all 800ms ease;
&:hover{
    display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  animation: ${fadeIn} linear 7s infinite;
  animation-delay: 7ms;
}
`;

export const Time = styled("div")`
height: 0.75rem;
margin-top: -0.5rem;
transform:rotate(45deg);
transition: all 300ms ease;
  width: 0.75rem
`;

interface LocationFilePorps {
x:number,
y:number,
}
export const LocationFile = styled("div")<LocationFilePorps>`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 10rem; */
  width: 30px;
  height: 30px;
  /* margin-bottom: 10rem; */
  top: ${props => props.y};
  left :${props => props.x};
  .me{
width: 30px;
  height: 30px;
  font-family: "Oswald", Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 2;
  text-align: center;
  border-radius: 35%;
  cursor: pointer;
  transform: scale(1);
  transition: all 800ms ease;
  };
  .me:hover {
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  animation: ${fadeIn} linear 7s infinite;
  animation-delay: 7ms;
};
.tome {
  transition: all 300ms ease;
}
;
.p1 {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 200px;
  top: 70px;
}  
`;

const oneKeyframes = keyframes`
  0% {
    width: 35px;
    height: 35px;
    opacity:1;
  }
  35% {
    width: 30px;
    height: 30px;
    opacity:0;
    color:white,
  }
  
  100% {
    width: 35px;
    height: 35px;
    opacity:1;
  }
`;

const towKeyframes = keyframes`{
  0% {
    width: 30px;
    height: 30px;
    opacity:1;
  }
  35% {
    width: 35px;
    height: 35px;
    opacity:0;
    color:white,
  }
  100% {
    width: 30px;
    height: 30px;
    opacity:1;
  }
}`;
interface Circle{
  color?:string,
  bg?:string
}
export const FirstCircle = styled("div")<Circle>`
  width:30px;
  height:30px;
  position:absolute;
  left:35%;
  top:35%;
  border-radius:35%;
  transform: translate(-35%, -35%);
  animation: ${oneKeyframes} 2s infinite;
  animation-delay:1s;
  animation-timing-function: ease-in-out;
  background-color: #ba9778;
  opacity: 0.7;
  color:${props => props.color ? props.color : ""};
`;

/* export const WrapperCircle = styled("div")`
position:fixed;
  width:30px;
  height:30px;
  transform: translate(-35-35%);
  left:35%;
  top:35%;
  color:white
`; */

export const SecondCircle = styled(FirstCircle)`
  transform: translate(-35%, -35%);
  animation: ${towKeyframes} 2s infinite;
  animation-delay:0s;
  animation-timing-function: ease-in-out;
  background-color: #ba9778
`;

const pulse = keyframes`
  0% {
    
    box-shadow: 0 0 0 0 rgba(186,169,120, 0.4);
  }
  70% {
      box-shadow: 0 0 0 10px rgba(181,169,70, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(186,169,120, 0);
  }
  `;

  interface propsBoxCircle {
   isActive:boolean
     }

  export const BoxCircle = styled("div")<propsBoxCircle>`
  width: 30px;
  height: 30px;
  font-weight: 500;
  border-radius: 50%;
  color:${props => props.isActive ? "#ba9778" : "white"};
  background:${props => !props.isActive ? "#ba9778" : "white"};
  cursor: pointer;
  box-shadow: 0 0 0 #73665b;
  animation: ${pulse} 1.2s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 20px;
  height: 20px;
}

&:hover {
  animation: none;
}


`;
