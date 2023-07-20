import { useState } from "react";
import NavbarComponent from "./components/navbar/Navbar";
import "./App.css";

import Body from "./components/body/Body";
function App() {
  return (
    <>
      <NavbarComponent />
      <Body />
    </>
  );
}

export default App;
