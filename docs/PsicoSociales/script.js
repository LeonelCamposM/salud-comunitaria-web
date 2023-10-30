// Cargar la API de YouTube IFrame
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("myVideo");
}

function showNormalBird() {
  console.log("normal bird");
  // Establece tus puntos de inicio y finalización en segundos
  var startSecond = 14; // por ejemplo, empezar en el segundo 30
  var endSecond = 26; // por ejemplo, finalizar en el segundo 60

  // Establece el punto de inicio y comienza la reproducción
  player.seekTo(startSecond);
  player.playVideo();

  // Calcula cuánto tiempo debe transcurrir antes de detener el video
  var duration = (endSecond - startSecond) * 1000; // en milisegundos

  // Detiene el video después de la duración especificada
  setTimeout(function () {
    player.pauseVideo();
  }, duration);
}

function showLowSelfEsteemWithFriendsOnDrugs() {
  console.log("LowSelfEsteemWithFriendsOnDrugs bird");
}

function showHighSelfEsteemWithHighConfidence() {
  console.log("HighSelfEsteemWithFriendsOnDrugs bird");
}

document.getElementById("analyzeButton").addEventListener("click", function () {
  console.log("Ver consecuencias presionado");

  var autoestimaValue = document.getElementById("autoestimaRange").value;
  var confianzaValue = document.getElementById("confianzaRange").value;
  var amigosValue = document.getElementById("amigosDrogas").checked;

  console.log(confianzaValue);
  console.log(autoestimaValue);
  console.log(amigosValue);

  // Evaluación de condiciones
  if (autoestimaValue == "1" && amigosValue) {
    showLowSelfEsteemWithFriendsOnDrugs();
  } else if (autoestimaValue == "3" && !amigosValue && confianzaValue == "3") {
    showHighSelfEsteemWithHighConfidence();
  } else if (confianzaValue == "1" && amigosValue) {
    showLowConfidenceWithFriendsOnDrugs();
  } else if (autoestimaValue == "2" && confianzaValue == "2") {
    // Solo muestra el pájaro normal si autoestima y confianza están en un nivel normal.
    showNormalBird();
  } else {
    // Por defecto, muestra el pájaro con baja confianza y amigos en drogas.
    showLowConfidenceWithFriendsOnDrugs();
  }
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
