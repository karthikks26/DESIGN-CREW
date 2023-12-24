import React from "react";
import Main from "./Components/Main/Main";
import Services from "./Components/services/Services";
import Banner from "./Components/banner/Banner";
import Designers from "./Components/Designers/Designers";
import Ideas from "./Components/ideas/Ideas";
import Watch from "./Components/watch/Watch";
import EndBanner from "./Components/Endbanner/EndBanner";

const App = () => {
  return (
    <>
      <div className="px-3 overflow-hidden ">
        <Main />
        <Services />
        <Banner />
        <Designers />
        <Ideas />
        <Watch />
        <EndBanner />
      </div>
    </>
  );
};

export default App;
