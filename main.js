var incorrectPasswordAttempts = 0;
var maxAttempts = 3; // Número máximo de intentos permitidos

function checkLogin() {
  if (incorrectPasswordAttempts >= maxAttempts) {
    checkLogin = function() { return false; }; // Desactivar la función después de 3 intentos
    return; // No realizar más verificaciones después de exceder el número de intentos
  }

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Aquí debes implementar la lógica de verificación de inicio de sesión
  // Por ejemplo, podrías comparar los valores de username y password con valores válidos

  if (username === "usuario" && password === "contraseña") {
    // Iniciar sesión exitosa
    // Aquí podrías redirigir a otra página o realizar otras acciones
    alert("Inicio de sesión exitoso");
  } else {
    // Inicio de sesión fallido
    incorrectPasswordAttempts++;

    if (incorrectPasswordAttempts < maxAttempts) {
      alert("La contraseña está equivocada.");
    } else {
      alert("La contraseña está equivocada. Has excedido el número máximo de intentos.");
      document.getElementById("password").value = ""; // Limpiar el campo de contraseña después de 3 intentos
      document.getElementById("password").disabled = true; // Deshabilitar el campo de contraseña después de 3 intentos
      document.getElementById("username").disabled = true; // Deshabilitar el campo de usuario después de 3 intentos
      document.getElementById("username").value = ""; // Limpiar el campo de usuario después de 3 intentos
      document.getElementById("loginButton").disabled = true; // Deshabilitar el botón de inicio de sesión después de 3 intentos
    }
  }
}
