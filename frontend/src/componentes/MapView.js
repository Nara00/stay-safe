import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react';
import "./map.css"
import MyMarker from './MyMarker';


const AnyReactComponent = ({ text }) => (

    <div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        {text}
    </div>
);

function MapView() {
    // traigo tipos pagos para mostrar en popup
    const [locationData, setLocationData] = useState([]);

    useEffect(() => {
        const loadLocation = async () => {
            const response = await fetch("http://localhost:3001/crimes");
            const data = await response.json();
            console.log(data)
            setLocationData(data);
        };
        loadLocation();
    }, [])


    const defaultProps = {
        center: {
            lat: -31.417,
            lng: -64.183
        },
        zoom: 11
    };
    const points = [
        { id: 1, title: "Round Pond", lat: -31.417, lng: -64.183 },
        { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
        { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 }
    ];

    return (
        // Important! Always set the container height explicitly

        <div className="center_map_view">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyC4irr_NtJq7GsuSJZxHpwT0b1HSB3ukks",
                    libraries: ['visualization']
                }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >{locationData.map((location) => {
                return (
                    <MyMarker key={location.id} lat={location.lat} lng={location.lng} />
                );
            })}
            </GoogleMapReact>
        </div>
    );
}

export default MapView;