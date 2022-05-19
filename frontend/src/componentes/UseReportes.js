import { useEffect, useState, useContext } from "react";
import { LocationContext } from "../context/Location";


const UseReportes = () => {

    const [evento, setEvento] = useState({
        latitude: "",
        longitude: "",
        description: "",
        address: "",
        type: "",
        userid: 0,
    })
    const { position, address } = useContext(LocationContext);


    const handleSubmit = async (event) => {
        event.preventDefault();
        evento.userid = 1
        evento.latitude = position.lat
        evento.longitude = position.lng
        evento.address = address


        async function fetchData() {
            console.log("entra al fetch de post")
            const response = await fetch(
                "http://localhost:3001/",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(evento),
                })
            const si = await response.json();
            console.log(si);
        }
        fetchData()

    }

    const handleChange = (e) => {
        //el target.value es lo que se esta tipeando y el .name es el nombre que yo le coloque al text field
        //la funcion setProveedor es copiar todo lo que tiene proveedor hasta este momento y le voy pasando lo que voy tipiando para que se vayan actualizando los campos de text y description
        setEvento({ ...evento, [e.target.name]: e.target.value });
    };
    return { handleChange, evento, handleSubmit }
}

export default UseReportes;
