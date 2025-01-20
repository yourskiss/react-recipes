import React from "react";
import {  BrowserRouter as Router,  Routes,  Route } from "react-router-dom";

import Header from "./navigation/header";
import Footer from "./navigation/footer";
import Home from "./components/home";
import MealdbList from "./components/themealdb/list";
import MealdbDetails from "./components/themealdb/details";
import DummyjsonList from "./components/dummyjson/list";
import DummyjsonDetails from "./components/dummyjson/details";

import withAuthentication from "./Hoc";
import Dashboard from "./components/Dashboard";
const SDS = withAuthentication(Dashboard, false);
const SDS2 = withAuthentication(Dashboard, true);
import FormComponent from "./components/Text";
import { Filteruser } from "./components/Filterdata";
import { Cacherequest } from "./components/Cacherequest";
 

function App() {
  return (
    <div className="mainwrapper">
      <div className="appwrapper">
        <Router>
          <Header />
          <div className="appcontainer">
          <Routes>

          <Route path="/" element={<Home />} />

            <Route path="/themealdb" element={<MealdbList />} />
            <Route path="/mealdb/:idMeal" element={<MealdbDetails />} />

            <Route path="/dummyjson" element={<DummyjsonList />} />
            <Route path="/dj/:id" element={<DummyjsonDetails />} />

            <Route path="/sds" element={<SDS />} />
            <Route path="/sds2" element={<SDS2 />} />
            <Route path="/input" element={<FormComponent />} />

            <Route path="/filteruser" element={<Filteruser />} />
            <Route path="/cacherequest" element={<Cacherequest /> } />

          </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
