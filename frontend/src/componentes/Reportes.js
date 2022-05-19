import React from 'react';
import CustomLocationPicker from './CustomLocationPicker';
import UseReportes from './UseReportes';

const Reportes = () => {
    const { handleChange, evento, handleSubmit } = UseReportes();

    return (
        <main class="page contact-us-page">
            <section class="clean-block clean-form dark">
                <div class="container">
                    <form onSubmit={handleSubmit} style={{ background: "rgba(255,255,255,0)", borderStyle: "none", boxShadow: "0px 0px var(--bs-body-bg)" }}>
                        <h2 class="text-start reportar-heading text-align">REPORTAR</h2>
                        <div class="row user-info">
                            <div class="col-auto align-self-center" style={{ padding: "0px" }}><img src="assets/img/avatars/avatar.png" style={{ borderRadius: "50%" }} width="50 em" /></div>
                            <div class="col align-self-center">
                                <h5 style={{ fontWeight: "bold" }}>User name</h5>
                            </div>
                        </div>
                        <div class="mb-3"><label class="form-label" for="name">Evento</label>
                            <select class="form-select" id="name" name="select">
                                {/* <optgroup
                                    name="type"
                                    value={evento.type}
                                    onChange={handleChange}
                                > */}
                                <option hidden disabled selected value >Selecciona evento...</option>
                                <option value={"robo"} onChange={handleChange} >Robo</option>
                                <option value={"asalto"} onChange={handleChange}>Asalto</option>
                                <option value={"secuestro"} onChange={handleChange}>Secuestro</option>
                                {/* </optgroup> */}
                            </select></div>
                        <div class="mb-3"><label class="form-label" for="email">Ubicación</label>
                            {/* <input class="form-control" type="email" id="email" name="email"/> */}
                            <CustomLocationPicker />
                        </div>
                        <div class="mb-3"><label class="form-label" for="message">Descripción</label>
                            <textarea class="form-control" id="message" name="description" value={evento.description} onChange={handleChange}></textarea>
                        </div>
                        <div class="mb-3"><button class="btn btn-primary" type="submit">Send</button></div>
                    </form>
                </div>
            </section>
        </main>
    );
    // }

}

export default Reportes;