$(".carousel").carousel({
  interval: false,
});

$(document).ready(function () {
  $("#toleranceCarousel").on("slid.bs.carousel", function () {
    // Obtener el título del ítem activo
    var newTitle = $(this).find(".carousel-item.active").data("title");
    var newParagraph = $(this).find(".carousel-item.active").data("paragraph");
    var newParagraph2 = $(this)
      .find(".carousel-item.active")
      .data("paragraph2");
    var newParagraph3 = $(this)
      .find(".carousel-item.active")
      .data("paragraph3");
    var newParagraph4 = $(this)
      .find(".carousel-item.active")
      .data("paragraph4");
    var newParagraph5 = $(this)
      .find(".carousel-item.active")
      .data("paragraph5");

    // Actualizar el título en el elemento que lo muestra
    $("#specificTitleId").text(newTitle);

    $("#specificTitleId").text(newTitle);
    $("#specificParagraphId").text(newParagraph);
    $("#specificParagraphId2").text(newParagraph2);
    $("#specificParagraphId3").text(newParagraph3);
    $("#specificParagraphId4").text(newParagraph4);
    $("#specificParagraphId5").text(newParagraph5);
  });
});

const imagen = document.getElementById("imagenAmpliada");

imagen.addEventListener("click", function () {
  imagen.classList.toggle("ampliada");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    imagen.classList.remove("ampliada");
  }
});
