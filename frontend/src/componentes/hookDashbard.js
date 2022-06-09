import React, { useEffect, useState } from "react"
import "./map.css"

function hookDashbard(idDias) {

    const [crimeData, setCrimeData] = useState([]);


    useEffect(() => {
        const fetchCrimes = async () => {
            const response = await fetch("https://stay-safe-app-ucc.herokuapp.com/dash/?id=" + idDias);
            const data = await response.json();
            console.log(data)
            setCrimeData(data);

        };
        fetchCrimes();
    }, [idDias])

    return [crimeData, setCrimeData]
}
export default hookDashbard;