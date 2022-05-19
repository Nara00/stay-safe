import React, { Component, useContext } from "react";
import ReactDOM from "react-dom";
import LocationPicker from "react-location-picker";
import { LocationContext } from "../context/Location";
import UseReportes from "./UseReportes";

/* Default position */
const defaultPosition = {
  lat: -31.417,
  lng: -64.183
};

const CustomLocationPicker = () => {

  const { position, setPosition, address, setAddress } = useContext(LocationContext);


  const handleLocationChange = ({ position, address }) => {
    // Set new location
    console.log(position)
    console.log(address)
    setPosition(position)
    setAddress(address)
  }

  return (
    <div>
      <div>
        <LocationPicker
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "400px" }} />}
          defaultPosition={defaultPosition}
          onChange={handleLocationChange}
          zoom={13}
          radius={30}
        />
      </div>
      <p class="direccion">{address}</p>
    </div>
  );
}


export default CustomLocationPicker;