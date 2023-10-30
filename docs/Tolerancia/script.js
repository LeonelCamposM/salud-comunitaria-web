$(".carousel").carousel({
  interval: false,
});

$(document).ready(function () {
  $("#toleranceCarousel").on("slid.bs.carousel", function () {
    // Obtener el título del ítem activo
    var newTitle = $(this).find(".carousel-item.active").data("title");
    var newParagraph = $(this).find(".carousel-item.active").data("paragraph");

    // Actualizar el título en el elemento que lo muestra
    $("#specificTitleId").text(newTitle);

    $("#specificTitleId").text(newTitle);
    $("#specificParagraphId").text(newParagraph);
  });
});
