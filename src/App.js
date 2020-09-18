import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import CovidBar from "./components/CovidBar";
import CTABar from "./components/CTABar";
import HiddenBar from "./components/HiddenBar";
import RecapSection from "./components/RecapSection";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HiddenBar />
      <CovidBar />
      <CTABar />
      <RecapSection />
    </div>
  );
}

export default App;
