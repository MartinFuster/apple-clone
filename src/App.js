import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import CovidBar from "./components/CovidBar";
import CTABar from "./components/CTABar";
import HiddenBar from "./components/HiddenBar";
import RecapSection from "./components/RecapSection";
import WatchSeries6 from "./components/WatchSeries6";
import WatchSe from "./components/WatchSe";
import FitnessSection from "./components/FitnessSection";
import IpadAir from "./components/IpadAir";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HiddenBar />
      <CovidBar />
      <CTABar />
      <RecapSection />
      <WatchSeries6 />
      <WatchSe />
      <FitnessSection />
      <IpadAir />
    </div>
  );
}

export default App;
