import BarChart from "./Charts/barchart"
import PolarChart from "./Charts/PolarChart"
import LineChart from "./Charts/LineChart"
import React from "react";
import hookDashbard from './hookDashbard'
import "./dashboard.css"

function Dashboard() {
    const [crimesData, setCrimeData] = hookDashbard()
    console.log('mio', crimesData);

    return (
        <div class="page contact-us-page">
            <section class="clean-block clean-form dark">
                    <div class="chartCard">
                        <input type='date' id="startdate" />
                        <input type='date' id="startdate" />
                        <div class="chartCard">
                            <PolarChart chartData={crimesData} />
                        </div>
                        <div class='chartmenu p'></div>
                        <div class="chartCard">
                            <LineChart chartData={crimesData} />
                        </div>

                    </div>
            </section >
        </div >


    );
}
export default Dashboard;

