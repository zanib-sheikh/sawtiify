import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    <FooterComponent/>
    </div>
  );
}

export default App;