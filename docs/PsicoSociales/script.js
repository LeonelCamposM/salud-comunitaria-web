// Cargar la API de YouTube IFrame
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("myVideo");
}

document.getElementById("analyzeButton").addEventListener("click", function () {
  console.log("click");
  var autoestimaValue = document.getElementById("autoestimaRange").value;
  var confianzaValue = document.getElementById("confianzaRange").value;

  player.seekTo(30); // Iniciar desde el segundo 30
  player.playVideo(); // Comenzar la reproducción
});

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
