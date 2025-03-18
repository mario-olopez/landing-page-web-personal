document.querySelector("form").addEventListener("submit", function (event){
    event.preventDefault();

    let nombre = event.target.nombre.value;
    let sexo = event.target.sexo.value;
    let movil = event.target.movil.value;
    let correo = event.target.correo.value;
    let contratacion = event.target.contratacion.value;
    let whatsapp = event.target.whatsapp.value;
    let comentario = event.target.comentario.value;

    const validacionNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:[-\s][A-Za-zÁÉÍÓÚáéíóúÑñ]+){2,}$/;
    const validacionSexo = /^(Sr\.|Sra\.|Prefiero no decirlo)$/;
    const validacionMovil = /^\+34\s?[67]\d{8}$/;
    const validacionEmail = /(^[a-zA-Z]{1,})+([_.-]{0,1})?([a-zA-Z0-9]{1,})\@([a-zA-Z])+([a-zA-Z0-9]{1,})+([-_.]{0,1})?([a-zA-Z0-9]{3,})\.([a-zA-Z]){2,4}/;
    const validacionContratacion = /^(Sí|No)$/;
    const validacionWhatsapp = /^(Sí|No)$/;
    const validacionEspanol = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s, ¡!¿?().;:_"'-]*$/;
    const validacionIdiomaChino = /[\u4e00-\u9fa5]/g;

    let mensaje = "";

    if (!validacionNombre.test(nombre)){
        console.log("Introduce un nombre y apellidos verdaderos");
        mensaje += "Nombre incompleto\n";
    }

    if (!validacionSexo.test(sexo)){
        console.log("Selecciona una opción de cómo quieres que me dirija a ti\n");
        mensaje += "Error al seleccionar el sexo\n"
    }

    if(!validacionMovil.test(movil)){
        console.log("Error en el número de móvil");
        mensaje += "El móvil que has introducido no corresponde a España\n";
    }

    if(!validacionEmail.test(correo)){
        console.log("Error en el correo electrónico");
        mensaje += "Introduce una dirección de correo válida\n";
    }

    if(!validacionContratacion.test(contratacion)){
        console.log("Selecciona una opción de contratación");
        mensaje += "Di si quieres contratarme\n"
    }

    if(!validacionWhatsapp.test(whatsapp)){
        console.log("Dime si quieres que te mande un whatsApp dándote los buenos días");
        mensaje += "Falta indicarme si quieres un whatsApp por las manañas\n"
    }

    if(!validacionEspanol.test(comentario)){
        console.log("Error en el idioma introducido");
        mensaje += "Escribe el mensaje en español\n";
    }

    if(mensaje) {
        let contenedorError = document.getElementById("mensaje-error")
        contenedorError.textContent = mensaje;
        contenedorError.style.color = "#FF0000";
        contenedorError.style.fontSize = "15px";
    } else {
        alert("Formulario enviado con éxito");
        formulario.submit();
    }
})


