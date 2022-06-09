import React from "react";
import GoogleMapReact from "google-map-react";
import { GoogleApiWrapper, HeatMap } from "google-maps-react";

import "./map.css"
import Hook from "./Hook"
import MapPicker from 'react-google-map-picker'
import Dashboard from "./dashboard";


const mapStyles = {
    width: '90%',
    height: '60%',
    marginLeft: '5%'
};

const NUEVA_CORDOBA_BOUNDS = {
    north: -31.418482,
    south: -31.428427,
    west: -64.191480,
    east: -64.181438
};

const gradient = [
    "rgba(255, 186, 0, 0)",
    "rgb(255, 186, 0)",
    "rgb(255, 183, 0)",
    "rgb(255, 180, 0)",
    "rgb(255, 177, 0)",
    "rgb(255, 174, 0)",
    "rgb(255, 171, 0)",
    "rgb(255, 168, 0)",
    "rgb(255, 165, 0)",
    "rgb(255, 162, 0)",
    "rgb(255, 159, 0)",
    "rgb(255, 155, 0)",
    "rgb(255, 152, 0)",
    "rgb(255, 149, 0)",
    "rgb(255, 146, 0)",
    "rgb(255, 142, 0)",
    "rgb(255, 139, 0)",
    "rgb(255, 135, 0)",
    "rgb(255, 132, 0)",
    "rgb(255, 128, 0)",
    "rgb(255, 125, 0)",
    "rgb(255, 121, 0)",
    "rgb(255, 118, 0)",
    "rgb(255, 114, 0)",
    "rgb(255, 110, 0)",
    "rgb(255, 106, 0)",
    "rgb(255, 102, 0)",
    "rgb(255, 98, 0)",
    "rgb(255, 94, 0)",
    "rgb(255, 89, 0)",
    "rgb(255, 84, 0)",
    "rgb(255, 80, 0)",
    "rgb(255, 75, 0)",
    "rgb(255, 69, 0)",
    "rgb(255, 64, 0)",
    "rgb(255, 58, 0)",
    "rgb(255, 51, 0)",
    "rgb(255, 43, 0)",
    "rgb(255, 34, 0)",
    "rgb(255, 22, 0)",
    "rgb(255, 0, 0)"

];





export class MapView2 extends React.Component {

    state = {
        center: {
            lat: -31.426111,
            lng: -64.185833
        },
        zoom: 15,
        location: [],
        // heatMapData: {    
        //     positions: [],
        //     options: {   
        //       radius: 20,   
        //       opacity: 1,
        //       gradient: gradient}}
    }

    componentWillMount() {
        this.fetchBooks();
    }

    fetchBooks = async () => {
        const response = await fetch("https://stay-safe-app-ucc.herokuapp.com/crimes");
        const data = await response.json();
        console.log(data)
        this.setState({ location: data });
    }

    render() {
        const heatMapData = {
            positions: this.state.location,
            options: {
                radius: 20,
                opacity: 1,
                gradient: gradient
            }
        }

        console.log(heatMapData)

        return (
            <>
                {this.state.location.length !== 0 ? (
                    <div style={{ height: '60vh', width: '100%' }}>
                        <GoogleMapReact
                            google={this.props.google}
                            // bootstrapURLKeys={{ key: "AIzaSyA9dTOobVnPExbxhmi-GP4KMl3V_Oe2sD0" }}
                            defaultCenter={{ lat: -31.417, lng: -64.183 }}
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
                            }}
                            onReady={this.handleMapReady}
                            positions={this.state.location}
                            heatmapLibrary={true}
                            heatmap={heatMapData}
                        >

                            {/* <HeatMap
                                gradient={gradient}
                                positions={this.state.location}
                                // positions={this.props.positions}
                                opacity={1}
                                radius={20}
                            /> */}



                            {/* {this.displayMarkers()} */}
                            {/* <CustomHeatMap
                                google1={this.props.google}
                                positions1={this.state.location} />
                             */}

                        </GoogleMapReact >
                    </div>

                ) : null}
                <Dashboard />
            </>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyA9dTOobVnPExbxhmi-GP4KMl3V_Oe2sD0",
    libraries: ["visualization"]
})(MapView2);