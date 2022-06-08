import React, { useState } from "react";
import { Map, GoogleApiWrapper, Marker, HeatMap } from "google-maps-react";
import "./map.css"
import Hook from "./Hook"

const mapStyles = {
    width: '90%',
    height: '60%',
    marginLeft: '5%'
};
const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)",
    "rgba(0, 63, 255, 1)",
    "rgba(0, 0, 255, 1)",
    "rgba(0, 0, 223, 1)",
    "rgba(0, 0, 191, 1)",
    "rgba(0, 0, 159, 1)",
    "rgba(0, 0, 127, 1)",
    "rgba(63, 0, 91, 1)",
    "rgba(127, 0, 63, 1)",
    "rgba(191, 0, 31, 1)",
    "rgba(255, 0, 0, 1)"
];


class MapView2 extends React.Component {

    state = {
        location: []
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
        return (
            <>
                {this.state.location.length !== 0 ? (
                    <Map
                        google={this.props.google}
                        zoom={8}
                        style={mapStyles}
                        initialCenter={{ lat: -31.417, lng: -64.183 }}
                        onReady={this.handleMapReady}
                        positions={this.state.location}
                    >
                        {/* {this.displayMarkers()} */}
                        <HeatMap
                            gradient={gradient}
                            positions={this.state.location}
                            // positions={this.props.positions}
                            opacity={1}
                            radius={20}
                        />

                    </Map>
                ) : null}

            </>
        );
    }
}


// const MapView2 = () => {
//     const gradient = [
//         "rgba(0, 255, 255, 0)",
//         "rgba(0, 255, 255, 1)",
//         "rgba(0, 191, 255, 1)",
//         "rgba(0, 127, 255, 1)",
//         "rgba(0, 63, 255, 1)",
//         "rgba(0, 0, 255, 1)",
//         "rgba(0, 0, 223, 1)",
//         "rgba(0, 0, 191, 1)",
//         "rgba(0, 0, 159, 1)",
//         "rgba(0, 0, 127, 1)",
//         "rgba(63, 0, 91, 1)",
//         "rgba(127, 0, 63, 1)",
//         "rgba(191, 0, 31, 1)",
//         "rgba(255, 0, 0, 1)"
//     ];
//     return (
//         <div className="map-container">
//             <Map
//                 google={google}
//                 className={"map"}
//                 zoom={4}
//                 initialCenter={{ lat: -24.9923319, lng: 135.2252427 }}
//                 onReady={this.handleMapReady}
//             >
//                 <HeatMap
//                     gradient={gradient}
//                     positions={this.props.data}
//                     opacity={1}
//                     radius={20}
//                 />
//             </Map>
//         </div>
//     );
// }
// AIzaSyC4irr_NtJq7GsuSJZxHpwT0b1HSB3ukks
export default GoogleApiWrapper({
    apiKey: "AIzaSyA9dTOobVnPExbxhmi-GP4KMl3V_Oe2sD0",
    libraries: ["visualization"]
})(MapView2);
