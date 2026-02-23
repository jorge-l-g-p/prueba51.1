document.getElementById("registroform").addEventListener("submit", function(e){
    e.preventDefault();

    const datos = {
        nombre : document.getElementById("nombre").value,
        apellido : document.getElementById("apellido").value,
        edad : document.getElementById("edad").value,
        email : document.getElementById("email").value,
    };

    console.log("Datos enviados", datos);

    //document.getElementById("mensaje").innerText = "Formulario enviado correctamente";

    // Limpiar formulario
    document.getElementById("registroform").reset();
    /*setTimeout(function(){
        mensaje.innerText = "";
    }, 1000);*/
});