import React, { useState, createContext } from "react"

//va en espaniol porque vi que ya habias usado el ProveedorContexten otro lugar
export const LocationContext = createContext()

//variables que se setean desde dentro de Popupconcept
export const LocationContextProvider = (props) => {
    const [position, setPosition] = useState({
        lat: 0,
        lng: 0
    });
    const [address, setAddress] = useState("Buenos Aires 30, X5022AAA Córdoba, Argentina");

    return (
        <LocationContext.Provider value={{
            position, setPosition,
            address, setAddress
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}