(function() {
    emailjs.init("user_tu_user_id"); // Reemplaza "user_tu_user_id" con tu User ID de EmailJS
})();

function enviarCorreo() {
    var destinatario = document.getElementById("destinatario").value;
    var mensaje = document.getElementById("mensaje").value;

    emailjs.send("service_tu_service_id", "template_tu_template_id", {
        to_email: destinatario,
        message: mensaje
    })
    .then(function(response) {
        alert("Correo enviado correctamente");
        console.log("Correo enviado correctamente", response);
    }, function(error) {
        alert("Error al enviar el correo");
        console.error("Error al enviar el correo", error);
    });
}