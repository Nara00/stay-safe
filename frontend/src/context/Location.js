import React, { useEffect, useState, createContext } from "react"

//va en espaniol porque vi que ya habias usado el ProveedorContexten otro lugar
export const LocationContext = createContext()


//variables que se setean desde dentro de Popupconcept
export const LocationContextProvider = (props) => {
    const [position, setPosition] = useState({
        lat: 0,
        lng: 0
    });
    const [loadLocation, setLoadLocation] = useState([]);
    const [address, setAddress] = useState("Buenos Aires 30, X5022AAA Córdoba, Argentina");

    useEffect(() => {
        const loadLocation = async () => {
            const response = await fetch("https://stay-safe-app-ucc.herokuapp.com/crimes");
            const data = await response.json();
            // console.log(data)
            setLoadLocation(data);
        };
        loadLocation();
    }, [])

    return (
        <LocationContext.Provider value={{
            position, setPosition,
            address, setAddress,
            loadLocation, setLoadLocation
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}