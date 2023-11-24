// Obtén referencia de la barra de autoestima
const autoestimaRange = document.getElementById("autoestimaRange");

// Agrega el "event listener" para el evento 'input'
autoestimaRange.addEventListener("input", updateAutoestimaLabel);

// Obtén referencia de la barra de autoestima
const confianzaRange = document.getElementById("confianzaRange");

// Agrega el "event listener" para el evento 'input'
confianzaRange.addEventListener("input", updateConfianzaLabel);

// Función para actualizar el valor mostrado para la autoestima
function updateAutoestimaLabel() {
  const autoestimaValue = document.getElementById("autoestimaRange").value;
  const autoestimaLabel = document.getElementById("autoestimaLabel");

  switch (autoestimaValue) {
    case "1":
      autoestimaLabel.innerText = "Bajo";
      break;
    case "2":
      autoestimaLabel.innerText = "Normal";
      break;
    case "3":
      autoestimaLabel.innerText = "Alto";
      break;
  }
}

// Función para actualizar el valor mostrado para la confianza
function updateConfianzaLabel() {
  const confianzaValue = document.getElementById("confianzaRange").value;
  const confianzaLabel = document.getElementById("confianzaLabel");

  switch (confianzaValue) {
    case "1":
      confianzaLabel.innerText = "Bajo";
      break;
    case "2":
      confianzaLabel.innerText = "Normal";
      break;
    case "3":
      confianzaLabel.innerText = "Alto";
      break;
  }
}

// Esperar a que el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  // Agregar listener para el control de rango de autoestima
  document
    .getElementById("autoestimaRange")
    .addEventListener("input", function () {
      updateAutoestima(this.value);
    });

  // Agregar listener para el control de rango de confianza
  document
    .getElementById("confianzaRange")
    .addEventListener("input", function () {
      updateConfianza(this.value);
    });

  // Agregar listener para el checkbox de amigos que usan drogas
  document
    .getElementById("amigosDrogas")
    .addEventListener("change", function () {
      updateAmigosDrogas(this.checked);
    });

  // Función para actualizar autoestima
  function updateAutoestima(value) {
    var imagenSrc, descripcion;
    switch (value) {
      case "1":
        imagenSrc = "../imgs/autoestima_baja.png";
        descripcion =
          "Una autoestima baja puede hacer que el individuo busque refugio o consuelo en sustancias, viéndolas como una forma temporal de elevar su ánimo o de escapar de sentimientos de inferioridad o tristeza.";
        break;
      case "2":
        imagenSrc = "../imgs/autoestima_normal.png";
        descripcion =
          "Con una autoestima equilibrada, el individuo tiende a tener una percepción sana de sí mismo, reduciendo la necesidad de recurrir a sustancias como medio de escape o afirmación.";
        break;
      case "3":
        imagenSrc = "../imgs/autoestima_alta.png";
        descripcion =
          "Una autoestima muy alta puede hacer que el individuo sienta que puede experimentar con sustancias sin caer en la dependencia, pensando que tiene el control total sobre la situación.";
        break;
    }
    document.querySelector("#autoestimaImagen img").src = imagenSrc;
    document.getElementById("autoestimaDescripcion").textContent = descripcion;
  }

  // Función para actualizar confianza
  function updateConfianza(value) {
    var imagenSrc, descripcion;
    switch (value) {
      case "1":
        imagenSrc = "../imgs/confianza_baja.png"; // Reemplazar con la ruta de tu imagen para confianza baja
        descripcion =
          "Una baja confianza podría llevar al individuo a consumir sustancias como una forma de sentirse más seguro en situaciones sociales, pensando que las drogas pueden ayudarle a ´soltarse´ o encajar mejor.";
        break;
      case "2":
        imagenSrc = "../salud-comunitaria-web/imgs/confianza_normal.png"; // Reemplazar con la ruta de tu imagen para confianza normal
        descripcion =
          "Con un nivel de confianza medio, el individuo suele ser consciente de los riesgos y beneficios y tiene una probabilidad menor de ceder a presiones externas o de recurrir a sustancias para sentirse mejor.";
        break;
      case "3":
        imagenSrc = "../imgs/confianza_alta.png"; // Reemplazar con la ruta de tu imagen para confianza alta
        descripcion =
          "Una confianza excesiva podría llevar al individuo a pensar que puede controlar cualquier situación, incluido el consumo experimental de sustancias, creyendo que es capaz de manejarlo sin problemas.";
        break;
    }
    document.querySelector("#confianzaImagen img").src = imagenSrc;
    document.getElementById("confianzaDescripcion").textContent = descripcion;
  }

  // Función para actualizar amigos que usan drogas
  function updateAmigosDrogas(checked) {
    var imagenSrc, descripcion;
    if (checked) {
      imagenSrc = "../imgs/amigos_usan_drogas.png";
      descripcion =
        "Estar rodeado de amigos que consumen drogas aumenta significativamente la exposición y la posibilidad de probar o consumir regularmente, debido a la normalización del consumo en su entorno y la presión social.";
    } else {
      imagenSrc = "../imgs/sin_amigos_drogas.png";
      descripcion =
        "Sin la presión o exposición a las drogas de parte de su círculo cercano, es menos probable que el individuo decida experimentar o consumir sustancias.";
    }
    document.querySelector("#amigosDrogasImagen img").src = imagenSrc;
    document.getElementById("amigosDrogasDescripcion").textContent =
      descripcion;
  }
});
