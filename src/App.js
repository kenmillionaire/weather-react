import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <Footer />
      </header>
      {/* <Weather city="Tokyo" /> */}
    </div>
  );
}

export default App;
