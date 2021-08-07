import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(1.1);
  }
  50% {
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
  border-radius: 50%;
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 10rem; */
  width: 40px;
  height: 40px;
  /* margin-bottom: 10rem; */
  top: ${props => props.y};
  left :${props => props.x};
  .me{
width: 40px;
  height: 40px;
  font-family: "Oswald", Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 2;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  transform: scale(1);
  transition: all 800ms ease;
  };
  .me:hover {
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  animation: fadeIn linear 7s infinite;
  animation-delay: 7ms;
};
.tome {
  transition: all 300ms ease;
  background: red;
}
;
.p1 {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 200px;
  top: 70px;
}  
`;

const oneKeyframes = keyframes`
  0% {
    width: 40px;
    height: 40px;
    opacity:1;
  }
  
  
  100% {
    width: 40px;
    height: 40px;
    opacity:0;
  }
`;

const towKeyframes = keyframes`{
  0% {
    width: 30px;
    height: 30px;
    opacity:1;
  }
  50% {
    width: 50px;
    height: 50px;
    opacity:0;
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
width:40px;
  height:40px;
  position:absolute;
  left:50%;
  top:50%;
  border-radius:50%;
  transform: translate(-50%, -50%);
  animation: ${oneKeyframes} 2s infinite;
  animation-delay:1s;
  animation-timing-function: ease-in-out;
  background-color: white;
  color:${props => props.color ? props.color : ""};
`;

export const WrapperCircle = styled("div")`
position:fixed;
  width:40px;
  height:40px;
  transform: translate(-50%, -50%);
  left:50%;
  top:50%;
`;

export const SecondCircle = styled(FirstCircle)`
  transform: translate(-50%, -50%);
  animation: ${towKeyframes} 2s infinite;
  animation-delay:0s;
  animation-timing-function: ease-in-out;
  background-color: #ba9778
`;
