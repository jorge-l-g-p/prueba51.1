document.getElementById("registroform").addEventListener("submit", function(e){
    e.preventDefault();

    const datos = {
        Nombre : document.getElementById("nombre").value,
        Apellido : document.getElementById("apellido").value,
        Edad : document.getElementById("edad").value,
        Email : document.getElementById("email").value,
    };

    console.log("Datos enviados", datos);

    //document.getElementById("mensaje").innerText = "Formulario enviado correctamente";

    // Limpiar formulario
    document.getElementById("registroform").reset();
    /*setTimeout(function(){
        mensaje.innerText = "";
    }, 1000);*/
});