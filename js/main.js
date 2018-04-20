
// alert("hola");
function validar() {

  var username = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var contraseña = document.getElementById('contraseña').value;
  var ccontraseña = document.getElementById('confirmar').value;

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

}
