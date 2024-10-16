
import React from "react";
import {  BrowserRouter as Router,  Routes,  Route } from "react-router-dom";

import Header from "./navigation/header";
import Footer from "./navigation/footer";

import Home from "./components/home/index";
 
import Mealdetails from "./components/meal/index";


function App() {
  return (
    <div className="mainwrapper">
      <div className="appwrapper">
        <Router>
          <Header />
          <div className="appcontainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meal/:idMeal" element={<Mealdetails />} />
          </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
