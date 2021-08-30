import styled from "styled-components";

export const DiscoverButton = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    align-items: center;
    font-size: 17.1px;
    font-weight: 300;
    font-family: Oswald, Arial, Helvetica, sans-serif;
    font-size: 17.1px;
    font-weight: 300;
    height: 17px;
    line-height: 17.1px;
    margin: 0px;
    padding: 0px;
    margin-top: 50px;
    



.the-arrow {
  width: 1px;
  transition: all 0.2s;
  font-family: "Roboto Condensed", Arial, Helvetica, sans-serif;
font-size: 17.1px;
font-weight: 400;
height: 17px;
line-height: 17.1px;
}

.the-arrow.-left {
  position: absolute;
  top: 60%;
  left: 0;
  font-family: "Roboto Condensed", Arial, Helvetica, sans-serif;
font-size: 17.1px;
font-weight: 400;
height: 17px;
line-height: 17.1px;
}

.the-arrow.-left > .shaft {
  width: 0;
  background-color: #4c4c4c;
  
}

.the-arrow.-left > .shaft:before,
.the-arrow.-left > .shift:after {
  width: 0;
  background-color: #4c4c4c;
}
.the-arrow.-left > .shaft:before {
  transform: rotate(0);
}
.the-arrow.-left > .shaft:after {
  transform: rotate(0);
  color: #ba9778;
}
.the-arrow.-right {
  top: 60%;
  color: #ba9778;

  left: 12px;
}
/* ***************** */
.the-arrow.-right > .shaft {
  width: 50px;
  top: 60%;
  left: 0;
  transition-delay: 0.2s;
  background: white;
  color: #ba9778;
}
.the-arrow.-right > .shaft:before,
.the-arrow.-right > .shaft:after {
  width: 12px;
  transition-delay: 0.3s;
  transition: all 0.5s;
  background: white;
  color: #ba9778;
}
.the-arrow.-right > .shaft:before {
  transform: rotate(40deg);
  color: #ba9778;
}
.the-arrow.-right > .shaft:after {
  transform: rotate(-40deg);
}
.the-arrow > .shaft {
  background-color: white;
  display: block;
  height: 2px;
  position: relative;
  transition: all 0.2s;
  transition-delay: 0;
  will-change: transform;
}
.the-arrow > .shaft:before,
.the-arrow > .shaft:after {
  background-color: white;
  content: "";
  display: block;
  height: 1px;
  position: absolute;
  top: 0;
  right: 0;
  transition: all 0.2s;
  transition-delay: 0;
}
.the-arrow > .shaft:before {
  transform-origin: top right;
  width: 50px;
  color: white;
}
.the-arrow > .shaft:after {
  transform-origin: bottom right;
  background: white;
}
.animated-arrow {
  display: inline-block;
  font-size: 1.25em;
  font-style: italic;
  text-decoration: none;
  position: relative;
  transition: all 0.2s;
  color: white;
}
.animated-arrow:hover {
  color: #ba9778;
  transition-delay: 0.1s;

}
.animated-arrow:hover > .the-arrow.-left > .shaft {
  width: 50px;
  transition-delay: 0.1s;
  color: #ba9778;
  background-color: #ba9778;
}
.animated-arrow:hover > .the-arrow.-left > .shaft:before,
.animated-arrow:hover > .the-arrow.-left > .shaft:after {
  width: 12px;
  color: #ba9778;
  background-color: #ba9778;
  transition-delay: 0.3s;
}
.animated-arrow:hover > .the-arrow.-left > .shaft:before {
  transform: rotate(40deg);
  color: #ba9778;
  transition-delay: 0.1s;

}
.animated-arrow:hover > .the-arrow.-left > .shaft:after {
  transform: rotate(-40deg);
  color: #ba9778;
  background-color: #ba9778;
}
.animated-arrow:hover > .main {
  transform: translateX(80px);
  color: #ba9778;
}
.animated-arrow:hover > .main > .the-arrow.-right > .shaft {
  width: 0;
  transform: translateX(250%);
  transition-delay: 0;
  color: #ba9778;
}
.animated-arrow:hover > .main > .the-arrow.-right > .shaft:before,
.animated-arrow:hover > .main > .the-arrow.-right > .shaft:after {
  width: 0;
  transition-delay: 1;
  transition: all 0.1s;
}
.animated-arrow:hover > .main > .the-arrow.-right > .shaft:before {
  transform: rotate(0);
  color: #ba9778;
}
.animated-arrow:hover > .main > .the-arrow.-right > .shaft:after {
  transform: rotate(0);
  color: #ba9778;
}
.animated-arrow > .main {
  display: flex;
  align-items: center;
  transition: all 0.2s;
}
.animated-arrow > .main > .text {
  margin: 0 28px 0 0;
  line-height: 1;
}
.animated-arrow > .main > .the-arrow {
  position: relative;
}
`;
