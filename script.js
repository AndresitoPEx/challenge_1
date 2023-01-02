// function encriptar() {
//     // Obtener el valor del mensaje a encriptar
//     let mensaje = document.getElementById('mensaje').value;
//     let mensajeEncriptado = '';
  
//     // Encriptar el mensaje utilizando la tabla de correspondencias
//     for (let i = 0; i < mensaje.length; i++) {
//       if (mensaje[i] === 'a') {
//         mensajeEncriptado += 'ai';
//       } else if (mensaje[i] === 'e') {
//         mensajeEncriptado += 'enter';
//       } else if (mensaje[i] === 'i') {
//         mensajeEncriptado += 'imes';
//       } else if (mensaje[i] === 'o') {
//         mensajeEncriptado += 'ober';
//       } else if (mensaje[i] === 'u') {
//         mensajeEncriptado += 'ufat';
//       } else {
//         mensajeEncriptado += mensaje[i];
//       }
//     }
  
//     // Actualizar el contenido del elemento <p> que muestra el mensaje encriptado
//     document.getElementById('textoEncriptado').innerHTML = mensajeEncriptado;
//   }
  
//   function desencriptar() {
//     // Obtener el valor del mensaje encriptado
//     let mensajeEncriptado = document.getElementById('mensaje').value;
//     let mensajeDesencriptado = '';
  
//     // Desencriptar el mensaje utilizando la tabla de correspondencias
//     for (let i = 0; i < mensajeEncriptado.length; i++) {
//       if (mensajeEncriptado.substring(i, i + 2) === 'ai') {
//         mensajeDesencriptado += 'a';
//         i += 1;
//       } else if (mensajeEncriptado.substring(i, i + 5) === 'enter') {
//         mensajeDesencriptado += 'e';
//         i += 4;
//       } else if (mensajeEncriptado.substring(i, i + 4) === 'imes') {
//         mensajeDesencriptado += 'i';
//         i += 3;
//       } else if (mensajeEncriptado.substring(i, i + 4) === 'ober') {
//         mensajeDesencriptado += 'o';
//         i += 3;
//       } else if (mensajeEncriptado.substring(i, i + 4) === 'ufat') {
//         mensajeDesencriptado += 'u';
//         i += 3;
//       } else {
//         mensajeDesencriptado += mensajeEncriptado[i];
//       }
//     }
  
//     // Actualizar el contenido del
//     document.getElementById('textoEncriptado').innerHTML = mensajeDesencriptado;
// }
// function copiarTexto() {
//     // Seleccionar el contenido del elemento <p> que muestra el mensaje encriptado o desencriptado
//     let texto = document.getElementById('textoEncriptado');
//     texto.select();
  
//     // Copiar el contenido seleccionado al portapapeles
//     document.execCommand('copy');
//   }
function encriptar() {
   
    var mensaje = document.getElementById("mensaje").value;
  
    
    mensaje = mensaje.replace(/e/g, "enter");
    mensaje = mensaje.replace(/i/g, "imes");
    mensaje = mensaje.replace(/a/g, "ai");
    mensaje = mensaje.replace(/o/g, "ober");
    mensaje = mensaje.replace(/u/g, "ufat");
  
   
    document.getElementById("textoEncriptado").textContent = mensaje;
  }
  
  function desencriptar() {
    
    var mensaje = document.getElementById("textoEncriptado").textContent;
  
   
    mensaje = mensaje.replace(/enter/g, "e");
    mensaje = mensaje.replace(/imes/g, "i");
    mensaje = mensaje.replace(/ai/g, "a");
    mensaje = mensaje.replace(/ober/g, "o");
    mensaje = mensaje.replace(/ufat/g, "u");
  
  
    document.getElementById("mensaje").value = mensaje;
  }
  
  function copiarTexto() {
    // Seleccionar el texto encriptado
    var textoEncriptado = document.getElementById("textoEncriptado");
    textoEncriptado.select();
    textoEncriptado.setSelectionRange(0, 99999);
  
   
    document.execCommand("copy");
  }
  