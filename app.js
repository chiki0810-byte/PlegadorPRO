function login() {
  const u = document.getElementById("usuario").value;
  const c = document.getElementById("clave").value;

  if (u === "admin" && c === "1234") {
    window.location.href = "panel.html";
  } else {
    alert("Usuario o clave incorrectos");
  }
}
