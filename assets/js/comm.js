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
    height: "390px", // calendar 높이 설정
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
      },
      {
        title: "휴관일",
        start: "2024-05-05",
        end: "2024-05-05",
        backgroundColor: "#E96767",
      },
      {
        title: "휴관일",
        start: "2024-05-13",
        end: "2024-05-13",
        backgroundColor: "#E96767",
      },
      {
        title: "부처님오신날",
        start: "2024-05-15",
        end: "2024-05-15",
        backgroundColor: "#E96767",
      },
      {
        title: "휴관일",
        start: "2024-05-20",
        end: "2024-05-20",
        backgroundColor: "#E96767",
      },
      {
        title: "휴관일",
        start: "2024-05-27",
        end: "2024-05-27",
        backgroundColor: "#E96767",
      },
      {
        title: "<양원숲인문학> 5회차",
        start: "2024-05-03",
        end: "2024-05-03",
        backgroundColor: "#97CA66",
      },
      {
        title: "청소년 농부학교 2회차",
        start: "2024-05-04",
        end: "2024-05-04",
        backgroundColor: "#97CA66",
      },
      {
        title: "맘대로 클래스 5회차",
        start: "2024-05-04",
        end: "2024-05-04",
        backgroundColor: "#97CA66",
      },
      {
        title: "<양원숲인문학> 6회차",
        start: "2024-05-10",
        end: "2024-05-10",
        backgroundColor: "#97CA66",
      },
      {
        title: "가족텃밭 1회차",
        start: "2024-05-11",
        end: "2024-05-11",
        backgroundColor: "#97CA66",
      },
      {
        title: "<양원숲인문학> 7회차",
        start: "2024-05-17",
        end: "2024-05-17",
        backgroundColor: "#97CA66",
      },
      {
        title: "장애인과 비장애인이 함께 가꾸는 <치유텃밭> 3차",
        start: "2024-05-18",
        end: "2024-05-18",
        backgroundColor: "#97CA66",
      },
      {
        title: "청소년 농부학교 3회차",
        start: "2024-05-18",
        end: "2024-05-18",
        backgroundColor: "#97CA66",
      },
      {
        title: "청소년 운영위원회 5월 정기모임",
        start: "2024-05-18",
        end: "2024-05-18",
        backgroundColor: "#97CA66",
      },
      {
        title: "맘대로 클래스 6회차",
        start: "2024-05-18",
        end: "2024-05-18",
        backgroundColor: "#97CA66",
      },
      {
        title: "<1318 청소년 함께읽기> 책하루 A,B반",
        start: "2024-05-19",
        end: "2024-05-19",
        backgroundColor: "#97CA66",
      },
      {
        title: "맘대로 클래스 7회차",
        start: "2024-05-19",
        end: "2024-05-19",
        backgroundColor: "#97CA66",
      },
      {
        title: "<양원숲인문학> 8회차",
        start: "2024-05-24",
        end: "2024-05-24",
        backgroundColor: "#97CA66",
      },
      {
        title: "30권 자유대출 서비스",
        start: "2024-05-25",
        end: "2024-05-25",
        backgroundColor: "#97CA66",
      },
      {
        title: "<1318 청소년 함께읽기> 고유한 책읽기 A,B반",
        start: "2024-05-25",
        end: "2024-05-25",
        backgroundColor: "#97CA66",
      },
      {
        title: "장애인과 비장애인이 함께 가꾸는 <치유텃밭> 4차",
        start: "2024-05-25",
        end: "2024-05-25",
        backgroundColor: "#97CA66",
      },
      {
        title: "맘대로 클래스 8회차",
        start: "2024-05-25",
        end: "2024-05-25",
        backgroundColor: "#97CA66",
      },
      {
        title: "맘대로 클래스 9회차",
        start: "2024-05-26",
        end: "2024-05-26",
        backgroundColor: "#97CA66",
      },
      {
        title: "휴관일",
        start: "2024-06-03",
        end: "2024-06-03",
        backgroundColor: "#E96767",
      },
      {
        title: "현충일",
        start: "2024-06-06",
        end: "2024-06-06",
        backgroundColor: "#E96767",
      },
      {
        title: "휴관일",
        start: "2024-06-10",
        end: "2024-06-10",
        backgroundColor: "#E96767",
      },
      {
        title: "휴관일",
        start: "2024-06-17",
        end: "2024-06-17",
        backgroundColor: "#E96767",
      },
      {
        title: "휴관일",
        start: "2024-06-24",
        end: "2024-06-24",
        backgroundColor: "#E96767",
      },
      {
        title: "청소년 농부학교 4회차",
        start: "2024-06-01",
        end: "2024-06-01",
        backgroundColor: "#97CA66",
      },
      {
        title: "맘대로 클래스 10회차",
        start: "2024-06-01",
        end: "2024-06-01",
        backgroundColor: "#97CA66",
      },
      {
        title: "맘대로 클래스 11회차",
        start: "2024-06-02",
        end: "2024-06-02",
        backgroundColor: "#97CA66",
      },
      {
        title: "맘대로 클래스 12회차",
        start: "2024-06-08",
        end: "2024-06-08",
        backgroundColor: "#97CA66",
      },
      {
        title: "맘대로 클래스 13회차",
        start: "2024-06-09",
        end: "2024-06-09",
        backgroundColor: "#97CA66",
      },
      {
        title: "[송곡고] 북토피아 독서캠프 1회차",
        start: "2024-06-14",
        end: "2024-06-14",
        backgroundColor: "#97CA66",
      },
      {
        title: "장애인과 비장애인이 함께 가꾸는 <치유텃밭> 5차",
        start: "2024-06-15",
        end: "2024-06-15",
        backgroundColor: "#97CA66",
      },
      {
        title: "청소년 농부학교 5회차",
        start: "2024-06-15",
        end: "2024-06-15",
        backgroundColor: "#97CA66",
      },
      {
        title: "맘대로 클래스 14회차",
        start: "2024-06-15",
        end: "2024-06-15",
        backgroundColor: "#97CA66",
      },
      {
        title: "<1318 청소년 함께읽기> 책하루 A,B반",
        start: "2024-06-16",
        end: "2024-06-16",
        backgroundColor: "#97CA66",
      },
      {
        title: "맘대로 클래스 15회차",
        start: "2024-06-16",
        end: "2024-06-16",
        backgroundColor: "#97CA66",
      },
      {
        title: "북클럽중랑 <얼리버드 나잇아울> 1회차",
        start: "2024-06-20",
        end: "2024-06-20",
        backgroundColor: "#97CA66",
      },
      {
        title: "<1318 청소년 함께읽기> 책하루 A,B반",
        start: "2024-06-22",
        end: "2024-06-22",
        backgroundColor: "#97CA66",
      },
      {
        title: "가족텃밭 2회차",
        start: "2024-06-22",
        end: "2024-06-22",
        backgroundColor: "#97CA66",
      },
      {
        title: "30권 자유대출 서비스",
        start: "2024-06-29",
        end: "2024-06-29",
        backgroundColor: "#97CA66",
      },
      {
        title: "장애인과 비장애인이 함께 가꾸는 <치유텃밭> 6차",
        start: "2024-06-29",
        end: "2024-06-29",
        backgroundColor: "#97CA66",
      },
      {
        title: "청소년 농부학교 6회차",
        start: "2024-06-29",
        end: "2024-06-29",
        backgroundColor: "#97CA66",
      },
    ],
  });

  // 캘린더 랜더링
  calendar.render();
});
