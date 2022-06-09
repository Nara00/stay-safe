import React, { Component, useContext, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import GoogleMap from 'google-map-react';
import { LocationContext } from "../context/Location";
import MapPicker from 'react-google-map-picker'
import "./map.css"

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
  },
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

const center = { lat: -31.426111, lng: -64.185833};

const LPL =() => {
  const { position, setPosition, address, setAddress } = useContext(LocationContext);


  const handleLocationChange = ({ position, address }) => {
    // Set new location
    console.log(position)
    console.log(address)
    setPosition(position)
    setAddress(address)
  }



    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '100%' }}>
          <MapPicker 
            apiKey="AIzaSyA9dTOobVnPExbxhmi-GP4KMl3V_Oe2sD0" 
            defaultLocation={{ lat: -31.426111, lng: -64.185833}}
            defaultZoom={50}
            // style={{ height: '700px' }}
            // onChange={handleLocationChange}
            
            options={{restriction: {
              latLngBounds: {
                north: -31.418482,
                south: -31.428427,
                west: -64.191480,
                east: -64.181438
              },
              strictBounds: false,
            }}}
            />
      </div >
    );
}

export default LPL;

{/* <GoogleMap
bootstrapURLKeys={{ key: "AIzaSyA9dTOobVnPExbxhmi-GP4KMl3V_Oe2sD0" }}
defaultCenter={center}
defaultZoom={15}
options={createMapOptions}>

<MapPicker defaultLocation={center}
  // zoom={15}
  style={{ height: '700px' }}
  onChange={handleLocationChange}
  bootstrapURLKeys={{ key: "AIzaSyA9dTOobVnPExbxhmi-GP4KMl3V_Oe2sD0" }} 
  options={createMapOptions}/>
</GoogleMap> */}