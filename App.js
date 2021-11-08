import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HeaderPoster from "./Components/UI/Headers/HeaderPoster";
import FirstSection from "./Components/UI/sections/FirstSection";
import SecondSection from "./Components/UI/sections/SecondSection";
import ThirdSection from "./Components/UI/sections/ThirdSection";
import FourthSection from "./Components/UI/sections/FourthSection";
import FifthSection from "./Components/UI/sections/FifthSection";
import SixthSection from "./Components/UI/sections/SixthSection";
import SeventhSection from "./Components/UI/sections/SeventhSection";
import Footer from "./Components/UI/Footer/Footer";
import Media from "react-media";
import MobileHeader from "./Components/UI/MobileHeader/MobileHeader";
function App() {
  return (
    <>
      <Media queries={{ medium: { minWidth: 760 } }}>
        {(matches) => (matches.medium ? <HeaderPoster /> : "")}
      </Media>
      <Media queries={{ medium: { maxWidth: 760 } }}>
        {(matches) => (matches.medium ? <MobileHeader /> : "")}
      </Media>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </>
  );
}

export default App;
