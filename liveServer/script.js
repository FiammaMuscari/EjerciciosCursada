//vamos a conectar nuestro html, css y js
//ademas de probar hacer cambios en el css con getElementById y getElementsByClassName

function cambiarEstilo() {
  const colorInput = document.getElementById("colorInput").value;
  const caja = document.getElementsByClassName("caja")[0];
  //debe ser hexadecimal
  // Validamos que se haya ingresado un color válido
  if (!/^#[0-9A-F]{6}$/i.test(colorInput)) {
    alert("Ingresa un color válido en formato hexadecimal (#RRGGBB).");
    return;
  }

  caja.style.backgroundColor = colorInput;
}
