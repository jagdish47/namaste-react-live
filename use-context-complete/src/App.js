import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { AppProvider } from "./components/context";

import "./App.css";

function App() {
  return (
    <>
      <AppProvider>
        <Header />
        <Hero />
        <Footer />
      </AppProvider>
    </>
  );
}

export default App;
