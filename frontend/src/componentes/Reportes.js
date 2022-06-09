import React from 'react';
import LPL from './LocationPickerLimited';
import UseReportes from './UseReportes';
import ReactTooltip from "react-tooltip";
import DraggableMarkerTest from "./DraggableMarkerTest";

const Reportes = () => {
    const { handleChange, evento, handleSubmit, errors } = UseReportes();

    return (
        <main class="page contact-us-page">
            <section class="clean-block clean-form dark">
                <div class="container">
                    <form onSubmit={handleSubmit} style={{ background: "rgba(255,255,255,0)", borderStyle: "none", boxShadow: "0px 0px var(--bs-body-bg)" }}>
                        <h2 class="text-start reportar-heading text-align">REPORTAR</h2>
                        <div class="row user-info">
                            <div class="col-auto align-self-center" style={{ padding: "0px" }}>
                                <a href="perfil">
                                    <img src="assets/img/avatars/avatar.png" style={{ borderRadius: "50%" }} width="50 em" />
                                </a>
                            </div>
                            <div class="col align-self-center">
                                <a href="perfil" style={{ textDecoration: "none" }}>
                                    <h5 style={{ fontWeight: "bold", color: "#000" }}>Juana Fernandez</h5>
                                </a>
                            </div>
                        </div>
                        <div class="mb-3"><label class="form-label" for="name">Evento</label>

                            <div class="row">
                                <div class="col-auto" style={{ paddingRight: "0px" }}>
                                    <p>¿Cómo clasificarías lo ocurrido?</p>
                                </div>
                                <div class="col" style={{ marginTop: "-.5em" }}>
                                    <svg class="bi bi-info-circle" data-tip data-for="tip" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                                    </svg>
                                    <ReactTooltip id="tip" place="top" effect="solid">
                                        <p style={{ margin: "0px" }}>Hurto: sustracción de un bien sin fuerza, intimidación o violencia.</p>
                                        <p style={{ margin: "0px" }}>Robo: sustracción de un bien con fuerza, intimidación o violencia.</p>
                                        <p style={{ margin: "0px" }}>Intento de hurto o robo: no se concreta la sustracción del bien.</p>
                                    </ReactTooltip>
                                </div>
                            </div>

                            <select class="form-select" id="name"
                                name="type"
                                style={{ border: errors.typered ? '1px solid red' : '' }}
                                onChange={handleChange}>
                                <option hidden disabled selected value >Selecciona evento...</option>
                                <option value={"robo"} onChange={handleChange} >Robo</option>
                                <option value={"intento-robo"} onChange={handleChange}>Intento de robo</option>
                                <option value={"hurto"} onChange={handleChange}>Hurto</option>
                                <option value={"intento-robo"} onChange={handleChange}>Intento de hurto</option>
                                <option value={"secuestro"} onChange={handleChange}>Secuestro</option>
                                <option value={"intento-secuestro"} onChange={handleChange}>Intento de secuestro</option>
                                <option value={"acoso"} onChange={handleChange}>Acoso</option>
                                <option value={"agresion-verbal"} onChange={handleChange}>Agresión verbal</option>
                                <option value={"agresion-fisica"} onChange={handleChange}>Agresión física</option>
                                <option value={"otro"} onChange={handleChange}>Otro...</option>
                            </select>
                            {errors.typered && (
                                <div style={{ color: "red" }}>
                                    {errors.type}
                                </div>
                            )}

                        </div>
                        <div class="mb-3"><label class="form-label" for="email">Ubicación</label>
                            <p>¿En qué lugar de Nueva Córdoba ocurrió?</p>
                            <DraggableMarkerTest/>
                        </div>
                        <div class="mb-3"><label class="form-label" for="message">Descripción</label>
                            <textarea
                                style={{ border: errors.descriptionred ? '1px solid red' : '' }}
                                class="form-control" id="message" name="description" value={evento.description} onChange={handleChange}></textarea>
                            {errors.descriptionred && (
                                <div style={{ color: "red" }}>
                                    {errors.description}
                                </div>
                            )}
                        </div>
                        <p style={{ fontStyle: "italic" }}>Todos los campos de este formulario son de carácter obligatorio</p>
                        <div class="mb-3"><button class="btn btn-primary" type="submit">Send</button></div>
                    </form>
                </div>
            </section>
        </main>
    );
    // }

}

export default Reportes;