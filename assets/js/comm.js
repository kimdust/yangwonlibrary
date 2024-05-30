$(document).ready(function () {
  $(".nav_1depth a").mouseenter(function () {
    $(this).css("color", "#97CA66");
  });
  $(".nav_1depth a").mouseleave(function () {
    $(this).css("color", "white");
  });
});
