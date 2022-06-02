import React, { useEffect, useState } from "react";

function Hook() {
    // traigo tipos pagos para mostrar en popup
    const [lat, setLat] = useState([]);
    const [lng, setLng] = useState([]);

    useEffect(() => {
        const loadLocation = async () => {
            const response = await fetch("http://localhost:3001/crimes");
            const data = await response.json();
            console.log(data.latitude)
            setLat(data.latitude);
            setLat(data.longitude);
        };
        loadLocation();
    }, [])

    return [lat, setLat, lng, setLng]
}

export default Hook