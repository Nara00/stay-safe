import React, { useEffect, useState, useContext } from "react";
import Reportes from './Reportes';
import CustomNavbar from './CustomNavbar';
import CustomLocationPicker from './CustomLocationPicker';
import MapView from './MapView';
import Map from './MapView2';
import Login from './Login';
// import Map from './Map';
import Profile from './Profile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hook from "./Hook"
import { LocationContext } from "../context/Location";



function App() {



  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Map center={{ lat: -31.426111, lng: -64.185833 }} zoom={14} />} />
        <Route path="/reportar" element={<Reportes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </Router>

  );
}

export default App;
