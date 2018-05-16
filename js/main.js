
// alert("hola");
function validar() {

  var username = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var contraseña = document.getElementById('contraseña').value;
  var ccontraseña = document.getElementById('confirmar').value;
  var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

  if (username == "") {
    alert(" Escriba su nombre");
    return false;
  }

  if (email == "") {
    alert(" Escriba su correo");
    return false;
  }

  if (contraseña == "") {
    alert(" Escriba su contraseña");
    return false;
  }

  if (ccontraseña == "") {
    alert(" vuelva a escribir su contraseña");
    return false;
  }


  if (contraseña !== ccontraseña) {
    alert("La contraseña no coincide");
    return false;
  }

  if (!regex.test(email)) {
    alert("correo invalido");
    return false;
  }

}




function soloLetras(e){

    key=e.keycode || e.which;

    teclado=String.fromCharCode(key).toLowerCase();

    letras="abcdefghijklmnñopqrstuvwxyz";

    especiales="8-37-38-46-164";

    teclado_especial=false;

    for (var i in especiales) {
      if (key==especiales[i]) {
        teclado_especial=true;
        break;
      }
    }

    if (letras.indexOf(teclado)==-1  && !teclado_especial) {

      return false;
    }
}

//animaciones con ScrollMagic

//menu de navegacion

// init controller

var controller = new ScrollMagic.Controller();

// build scenes
new ScrollMagic.Scene({triggerElement: "#header", duration: 600})
        .setClassToggle("#high1", "active") // add class toggle
        // .addIndicators()
        .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#about", duration: 400})
        .setClassToggle("#high2", "active") // add class toggle
        // .addIndicators() 
        .addTo(controller);
new ScrollMagic.Scene({triggerElement: "#productos", duration: 1000})
        .setClassToggle("#high3", "active") // add class toggle
        // .addIndicators() 
        .addTo(controller);


//fin menu de navegacion
