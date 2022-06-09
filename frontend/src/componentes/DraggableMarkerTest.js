// import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";
// import { Marker } from "react-google-maps";
// import { LocationContext } from "../context/Location";

import React from "react"
import { compose, withProps, lifecycle } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { LocationContext } from "../context/Location";
import { useContext } from "react";

const DraggableMarkerTest = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA9dTOobVnPExbxhmi-GP4KMl3V_Oe2sD0&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    lifecycle({
        componentWillMount() {
            
            const refs = {}

            this.setState({
                position: null,
                onMarkerMounted: ref => {
                    refs.marker = ref;
                },

                onPositionChanged: () => {
                    const pos = refs.marker.getPosition();
                    console.log(pos);
                    // const { position, setPosition } = useContext(LocationContext);
                    // position = pos
                    // setPosition(pos)
                },

                getP: () => {
                    const pos = refs.marker.getPosition();
                    return(pos);
                    // const { position, setPosition } = useContext(LocationContext);
                    // position = pos
                    // setPosition(pos)
                },
                // onMarkerDragEnd: () => {
                //     const pos = refs.marker.getPosition();
                //     console.log("dragend", pos.toString());
                // },
                // handleLocationChange: () => {
                //     const pos = refs.marker.getPosition();
                //     // Set new location
                //     console.log(pos)
                //     setPosition(pos)
                //   }

            })
        },
    }),
    withScriptjs,
    withGoogleMap
)((props) =>{

    const { position, setPosition, address, setAddress } = useContext(LocationContext);


  const handleLocationChange = () => {
    const pos = props.getP();
    console.log(pos)
    // Set new location
    // console.log(position)
    // console.log(address)
    setPosition(props.getP())
    // setAddress(address)
  }
    

    return(
        
    <GoogleMap defaultCenter={{ lat: -31.417, lng: -64.183 }}
        defaultZoom={15}
        options={{
            restriction: {
                latLngBounds: {
                    north: -31.418482,
                    south: -31.428427,
                    west: -64.191480,
                    east: -64.181438
                },
                strictBounds: false,
            }
        }} >
        {<Marker position={{ lat: -31.426111, lng: -64.185833 }} draggable={true} ref={props.onMarkerMounted} onPositionChanged={handleLocationChange} onMarkerDragEnd={props.onMarkerDragEnd}/>}
    </GoogleMap>)}
)


export default DraggableMarkerTest;