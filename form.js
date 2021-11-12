function validateForm() {
    console.log("validando");
    let x = document.forms["myForm"]["email"].value;
    let y = document.forms["myForm"]["Telefono"].value;
    let b = document.forms["myForm"]["metros"].value;
    let z = document.forms["myForm"]["Comentarios"].value;
    if ((x == "")||(y == "")||(b == "")||(z == "")) {

      alert("Existen campos vacíos");
      return false;
    }
   
  }