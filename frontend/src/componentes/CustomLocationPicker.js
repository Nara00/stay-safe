import React, { Component, useContext } from "react";
import ReactDOM from "react-dom";
import LocationPicker from "react-location-picker";
import { LocationContext } from "../context/Location";
import GoogleMap from 'google-map-react';
import UseReportes from "./UseReportes";


/* Default position */
const defaultPosition = {
  lat: -31.426111,
  lng: -64.185833
};

const NUEVA_CORDOBA_BOUNDS = {
  north: -31.418482,
  south: -31.428427,
  west: -64.191480,
  east: -64.181438
};

const opt = {
  restriction: {
    latLngBounds: NUEVA_CORDOBA_BOUNDS,
    strictBounds: false,
  }
}

function createMapOptions(maps) {
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true,
    restriction: {
      latLngBounds: NUEVA_CORDOBA_BOUNDS,
      strictBounds: false,
    },
  };
}

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
        <LocationPicker id="map-lp"
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={
            <div style={{ height: '400px', width: '100%' }}>
          </div>}
          defaultPosition={defaultPosition}
          onChange={handleLocationChange}
          zoom={13}
          radius={30}
          options={opt}
        />
      </div>
      <p class="direccion">{address}</p>
    </div>



  );
}


export default CustomLocationPicker;