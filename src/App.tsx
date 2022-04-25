import React from "react";
import Header from "./components/Header";
import Navi from "./components/Navi";
import Carousel from "./components/Carousel";
import Highlights from "./components/Highlights";
import Coins from "./components/Coins";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Navi />
      <Carousel />
      <Highlights />
      <Coins />
    </div>
  );
}

export default App;
