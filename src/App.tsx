import "./App.css";
import "./index.css";
import { AllListItems } from "./Component/ListiItems/AllListItems";
import { MailSection } from "./Component/MatlerSection/matilSection";
import { Slider } from "./Component/Slider/Slider";
import Apartment from "./Component/Apaarmnet/apeertment";
import { Progressbar } from "./Component/ProgressBar";
// import Tab from "./Component/Tab/Tab";
// import FullWidthTabs from "./Component/Tab/Tabs";
import Penthouse from "./Component/Apaarmnet/penthouse";
import EverySection from "./Component/EverSection/EverySection";
import { Tabs } from "./Component/Tab/Tabs";
import { KnowSection } from "./Component/knowSection.tsx/KnowSection";
import { CircleAnimation } from "./Component/Tooltip/circleAnimation";
import { Tooltip } from "./Component/Tooltip/tooltip";
function App() {
     const m = {
          x: 20,
          y: 80,
     };
     return (
          <div className="bg-white overflow-hidden ">
               <Slider/>
               <MailSection />
           <KnowSection/>
                <Tabs/>
               <Apartment/>
               <Penthouse/>
               <AllListItems />
               <EverySection/>
          </div>
     );
}

export default App;
