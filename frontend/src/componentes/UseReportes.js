import { useEffect, useState, useContext } from "react";
import { LocationContext } from "../context/Location";
import { useNavigate } from "react-router-dom";
import ValidateInfo from "../componentes/UtilsInfo/ValidateInfo"

const UseReportes = () => {
    const navigate = useNavigate();
    const [first, setFirst] = useState(false);
    const [errors, setErrors] = useState({});

    const [evento, setEvento] = useState({
        latitude: "",
        longitude: "",
        description: "",
        address: "",
        type: "",
        userid: 0,
    })
    const { position, setPosition, address, setAddress } = useContext(LocationContext);


    const handleSubmit = async (event) => {
        event.preventDefault();
        evento.userid = 1
        evento.latitude = position.lat()
        evento.longitude = position.lng()
        evento.address = address

        setFirst(true);
        setErrors(ValidateInfo(evento));
    }
    const fetchDataErrors = () => {
        if (Object.keys(errors).length === 0) {

            async function fetchData() {
                console.log("entra al fetch de post")
                console.log(evento)
                const response = await fetch(
                    "https://stay-safe-app-ucc.herokuapp.com/post",
                    {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(evento),
                    }
                );
                const si = await response.json();
                console.log(si);
                alert("Reporte enviado exitosamente");
                setPosition(false);
                setAddress(false);
                navigate("/");
            }
            fetchData()

        }
    }

    useEffect(() => {
        console.log("2do effect:")
        console.log(first);
        console.log(errors);
        if (first) {
            fetchDataErrors();
        }
        //intento setear first false para que no entre al fetch
        setFirst(false)
    },
        [errors]
    );


    const handleChange = (e) => {
        //el target.value es lo que se esta tipeando y el .name es el nombre que yo le coloque al text field
        //la funcion setProveedor es copiar todo lo que tiene proveedor hasta este momento y le voy pasando lo que voy tipiando para que se vayan actualizando los campos de text y description
        setEvento({ ...evento, [e.target.name]: e.target.value });
    };
    return { handleChange, evento, handleSubmit, errors }
}

export default UseReportes;
