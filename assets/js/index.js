
//Aca definimos la variable para el funcionamiento de los tooltip (Boostrap 5)
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
})

//Aqui definimos la funcion de doble click que convierten texto en color
$("h4").dblclick(function () {
    $(this).css({
        "color": "red"
    });
});

//Aca definimos la funcion que se encarga de mostrar el modal 
$('#enviarCorreo').click(function () {
    alert('Se ha enviado el correo exitosamente...');
});

//Aca definimos la funcion que se encarga de esconder y mostrar una seccion de las tarjetas
$(".card-title").click(function () {
    $(".card-text").toggle();
});
