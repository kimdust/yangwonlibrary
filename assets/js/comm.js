$(document).ready(function () {
  $(".nav_1depth a").mouseenter(function () {
    $(this).css("color", "#97CA66");
  });
  $(".nav_1depth a").mouseleave(function () {
    $(this).css("color", "white");
  });

  $(".recbook_slide").hide();
  $(".membook_slide").hide();
  $(".new_book").css("color", "#333");
  $(".rec_book").css("color", "#555");
  $(".mem_book").css("color", "#555");

  $(".new_book").click(function () {
    $(".newbook_slide").show();
    $(".recbook_slide").hide();
    $(".membook_slide").hide();
    $(this).css("font-weight", "bold");
    $(this).css("color", "#333");
    $(".rec_book").css("font-weight", "normal");
    $(".rec_book").css("color", "#555");
    $(".mem_book").css("font-weight", "normal");
    $(".mem_book").css("color", "#555");
  });

  $(".rec_book").click(function () {
    $(".recbook_slide").show();
    $(".newbook_slide").hide();
    $(".membook_slide").hide();
    $(this).css("font-weight", "bold");
    $(this).css("color", "#333");
    $(".new_book").css("font-weight", "normal");
    $(".new_book").css("color", "#555");
    $(".mem_book").css("font-weight", "normal");
    $(".mem_book").css("color", "#555");
  });
  $(".mem_book").click(function () {
    $(".membook_slide").show();
    $(".newbook_slide").hide();
    $(".recbook_slide").hide();
    $(this).css("font-weight", "bold");
    $(this).css("color", "#333");
    $(".new_book").css("font-weight", "normal");
    $(".new_book").css("color", "#555");
    $(".rec_book").css("font-weight", "normal");
    $(".rec_book").css("color", "#555");
  });

  // calendar element 취득
  var calendarEl = $("#calendar")[0];

  // full-calendar 생성하기
  var calendar = new FullCalendar.Calendar(calendarEl, {
    height: "380px", // calendar 높이 설정
    expandRows: true, // 화면에 맞게 높이 재설정

    // 해더에 표시할 툴바
    headerToolbar: {
      left: "prev",
      center: "title",
      right: "next",
    },

    initialView: "dayGridMonth", // 초기 로드 될때 보이는 캘린더 화면(기본 설정: 달)

    navLinks: false, // 날짜를 선택하면 Day 캘린더나 Week 캘린더로 링크
    editable: false, // 수정 가능?
    selectable: false, // 달력 일자 드래그 설정가능
    nowIndicator: false, // 현재 시간 마크
    dayMaxEvents: true, // 이벤트가 오버되면 높이 제한 (+ 몇 개식으로 표현)
    locale: "ko",
    fixedWeekCount: false,

    // 이벤트
    events: [
      {
        title: "휴관일",
        start: "2024-05-01",
        end: "2024-05-01",
        backgroundColor: "#E96767",
        border: "1px solid #E96767",
      },
    ],
  });

  // 캘린더 랜더링
  calendar.render();
});
