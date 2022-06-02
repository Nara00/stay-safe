import React from "react"

function ValidateInfo(evento) {
    let errors = {};

    if (evento) {
        if (!evento.description | evento.description.length < 5) {
            errors.description = 'Descripcion requerida';
            errors.descriptionred = true;
        }
        if (!evento.type) {
            errors.type = 'Tipo de evento requerido';
            errors.typered = true;
        }
    }
    return errors;
}

export default ValidateInfo;