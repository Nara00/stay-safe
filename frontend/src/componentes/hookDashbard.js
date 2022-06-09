import React, { useEffect, useState } from "react"
import "./map.css"

function hookDashbard() {

    const [crimeData, setCrimeData] = useState([]);

    var num = 6
    useEffect(() => {
        const fetchCrimes = async () => {
            const response = await fetch("https://stay-safe-app-ucc.herokuapp.com/dash/?id="+num);
            const data = await response.json();
            console.log(data)
            setCrimeData(data);

        };
        fetchCrimes();
}, {})

    return [crimeData, setCrimeData]
}
export default hookDashbard;