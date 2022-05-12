import React from 'react'


class Reportes extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main class="page contact-us-page">
            <section class="clean-block clean-form dark">
                <div class="container">
                    <div class="reportar-heading">
                        <h2 class="text-start" style={{fontWeight: "bold"}}>Reportar</h2>
                    </div>
                    <form style={{background: "rgba(255,255,255,0)", borderStyle: "none", boxShadow: "0px 0px var(--bs-body-bg)"}}>
                        <div class="mb-3"><label class="form-label" for="name">Evento</label><select class="form-select" id="name">
                                <optgroup label="This is a group">
                                    <option value="12" selected="">This is item 1</option>
                                    <option value="13">This is item 2</option>
                                    <option value="14">This is item 3</option>
                                </optgroup>
                            </select></div>
                        <div class="mb-3"><label class="form-label" for="email">Ubicación</label><input class="form-control" type="email" id="email" name="email"/>
                            <p class="direccion">dirección</p>
                        </div>
                        <div class="mb-3"><label class="form-label" for="message">Descripción</label><textarea class="form-control" id="message" name="message"></textarea></div>
                        <div class="mb-3"><button class="btn btn-primary" type="submit">Send</button></div>
                    </form>
                </div>
            </section>
        </main>
        );
    }

}

export default Reportes;