import { GoDesktopDownload } from "react-icons/go";
import { HeaderTitle } from "../HeaderTitle/HeaderTitle";
import { ButtonDiscover, ImageWrapper, TextDescription, TextLuxury } from "../MatlerSection/MailSection.styles";

export const Elegit = () => {
     return (
          <div className="container mx-auto w-full h-full grid grid-cols-1 md:grid-cols-2 gap-14 bg-white-200 mt-12">
               <div className="flex-col mt-12 w-4/6">
                    <HeaderTitle title={"ELEGANT FINISHES"} />
                    <TextLuxury>True value is always <span style={{ color: "#ba9778" }}>inside*</span></TextLuxury>
                    <TextDescription>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corp. strategy foster thinking further the overall information highway will close.</TextDescription>
                    <ButtonDiscover className="button-discover hover:animate-pulse ">DOWNLOAD PDF <span className="ml-4"><GoDesktopDownload /></span></ButtonDiscover>
               </div>
               <div><ImageWrapper src="https://nestin.bold-themes.com/fancy/wp-content/uploads/sites/3/2020/01/inner_image_01.jpg" alt="your image name" /></div>
          </div>

     );
};

/***
 *
 * <div class="container mx-auto grid grid-cols-1 md:grid-cols-2 wrapper-continer">
   <div>ddd</div>
<div class="w-80 h-80 flex rounded-full justify-center items-center  z-0 me">
<div class="w-72 h-72 rounded-full justify-center items-center bg-white flex z-10">
<div class="flex flex-col justify-center items-center">
  <img src="" alt=""/>
  <p>Texxt</p>
  <p>Dynamically procrastinate users</p>
</div>
   </div>

   </div>

</div>
 */
/***
 * @tailwind base;
@tailwind components;
@tailwind utilities;

.wrapper-continer {
  max-width: 100%;
  max-height: 500px;
  min-height: 500px;
  height: 100%;
  background: red;
}

.me {
  background-image: url("https://nestin.bold-themes.com/fancy/wp-content/uploads/sites/3/2020/01/inner_01.jpg");
}

 */

/*****
 *

<div class="w-full mx-auto mt-4  rounded">
                        <!-- Tabs -->
                        <ul id="tabs" class="inline-flex w-full  ">
                          <li class="flex-1 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-50">
                            <a id="default-tab" href="#first">STUDIO</a></li>
                          <li class="flex-1 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-50"><a href="#second">Clothes</a></li>
                          <li class="flex-1 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-50"><a href="#third">Electronics</a></li>
                          <li class="flex-1 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-50"><a href="#fourth">Others</a></li>
                        </ul>

                        <!-- Tab Contents -->
                        <div id="tab-contents">
                          <div id="first" class="p-4">
                            First tab
                          </div>
                          <div id="second" class="hidden p-4">
                            Second tab
                          </div>
                          <div id="third" class="hidden p-4">
                            Third tab
                          </div>
                          <div id="fourth" class="hidden p-4">
                            Fourth tab
                          </div>
                        </div>
                      </div>
 */
