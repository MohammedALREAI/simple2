import styled, { keyframes } from "styled-components";

export const HeaderTitleEverything = styled("h3")`
font-size: 3rem;
font-weight: 500;
color: #181818;
font-family: Vidaloka, Arial, Helvetica, sans-serif;
font-size: 45px;
font-weight: 500;
line-height: 54px;


`;

export const WrapperButtonEverySection = styled("div")`

color: #ffffff; 
font-family: "Roboto Condensed", Arial, Helvetica, sans-serif;
font-size: 17.1px;
font-weight: 400;
height: 60px;
line-height: 17.1px;
margin: 0px;
padding: 21.75px;
max-width: 183px;
/* width:183px; */
/* background: green; */


@media (min-width: 640px) {

margin-top:20px;
}

`;

export const ImageDiv = styled("div")`
background-image: url("https://nestin.bold-themes.com/fancy/wp-content/uploads/sites/3/2020/01/interactive_image_01-1280x733.jpg");
background-repeat: no-repeat;
width: 100%;
height: 687px;
object-fit: contain;
margin-bottom:20px;
left:-120px;

@media (max-width: 640px) {
position:relative;
margin:0px 20px;
right: 0px;
width: 302px;
object-fit: cover;
background-position: center;
max-width: 100%;
height: 185px;
margin-bottom: 30px;

}



`;
