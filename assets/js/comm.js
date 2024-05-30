$(document).ready(function () {
  $(".nav_1depth a").mouseenter(function () {
    $(this).css("color", "#97CA66");
  });
  $(".nav_1depth a").mouseleave(function () {
    $(this).css("color", "white");
  });

  $(".recbook_slide").hide();
  $(".membook_slide").hide();

  $(".new_book").click(function () {
    $(".newbook_slide").show();
    $(".recbook_slide").hide();
    $(".membook_slide").hide();
    $(this).css("font-weight", "bold");
    $(".rec_book").css("font-weight", "normal");
    $(".mem_book").css("font-weight", "normal");
  });

  $(".rec_book").click(function () {
    $(".recbook_slide").show();
    $(".newbook_slide").hide();
    $(".membook_slide").hide();
    $(this).css("font-weight", "bold");
    $(".new_book").css("font-weight", "normal");
    $(".mem_book").css("font-weight", "normal");
  });
  $(".mem_book").click(function () {
    $(".membook_slide").show();
    $(".newbook_slide").hide();
    $(".recbook_slide").hide();
    $(this).css("font-weight", "bold");
    $(".new_book").css("font-weight", "normal");
    $(".rec_book").css("font-weight", "normal");
  });
});
