import BarChart from "./Charts/barchart"
import PolarChart from "./Charts/PolarChart"
import LineChart from "./Charts/LineChart"
import React from "react";
import hookDashbard from './hookDashbard'
import "./dashboard.css"
import PieChart from "./Charts/PieChart";

function Dashboard() {
    const [crimesData, setCrimeData] = hookDashbard()
    console.log('mio', crimesData);

    return (
        <div class="page contact-us-page">
            <section class="clean-block clean-form dark">
                <div class="chartCard">
                    <select class="form-select" id="name"
                        name="type">
                        <option hidden disabled selected value >Filtrar por fechas...</option>
                        <option defaultChecked value={"Todos"}  >Todos</option>
                        <option value={"Dia"}  >Hoy</option>
                        <option value={"Semana"} >Semana</option>
                        <option value={"Mes"} >Mes</option>
                        <option value={"Anio"} >Anio</option>
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

