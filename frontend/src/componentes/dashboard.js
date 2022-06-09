import BarChart from "./Charts/barchart"
import PolarChart from "./Charts/PolarChart"
import LineChart from "./Charts/LineChart"
import React, { useState } from "react";
import hookDashbard from './hookDashbard'
import "./dashboard.css"
import PieChart from "./Charts/PieChart";

function Dashboard() {
    const [idDias, setIdDias] = useState(0)
    const [crimesData, setCrimeData] = hookDashbard(idDias)
    // console.log('mio', crimesData);

    return (
        <div class="page contact-us-page">
            <section class="clean-block clean-form dark">
                <div class="chartCard">
                    <select class="form-select" id="name"
                        name="type">
                        <option hidden disabled selected value >Filtrar por fechas...</option>
                        <option defaultChecked value={"Todos"} onClick={() => { setIdDias(0) }}>Todos</option>
                        <option value={"Dia"} onClick={() => { setIdDias(1) }} >Hoy</option>
                        <option value={"Semana"} onClick={() => { setIdDias(8) }}>Semana</option>
                        <option value={"Mes"} onClick={() => { setIdDias(30) }}>Mes</option>
                        <option value={"Anio"} onClick={() => { setIdDias(365) }}>Anio</option>
                    </select>
                    <div class='chartmenu p'>
                        <div class="chartCard">
                            <PieChart chartData={crimesData} />
                        </div>
                        <div class="chartCard">
                        </div>
                        <div class="chartCard">
                            <LineChart chartData={crimesData} />
                        </div>
                    </div>
                </div>
            </section >
        </div >


    );
}
export default Dashboard;

