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
function App() {
     return (
          <div className="App bg-white-200 container mx-auto">
               <Slider/>
               <KnowSection/>
               <Tabs/>
               <Apartment/>
               <Penthouse/>
               <AllListItems />
               <MailSection />
               <EverySection/>
          </div>
     );
}

export default App;
