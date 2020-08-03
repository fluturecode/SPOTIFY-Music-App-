import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return;
  // Fragment or Div -> new shorter syntaz for declaring fragments. In React all components must be enclosed in a parent tag, and multiple elements cannot be returned.
  <>
    <div className="app">
      <Sidebar />
      /* Home */ 
      /* Search */ 
      /* Your Libary */
      <Navbar />
    </div>
    ;
  </>;
}

export default App;
