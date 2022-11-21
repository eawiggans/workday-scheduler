$(function () {


  var today = dayjs();

  $("#currentDay").text(today.format(" MMM D, YYYY"));

  var time = dayjs().format("hh:mm:ss");

  $("#currentTime").text(time);

  var saveBtn = $('.saveBtn');

  saveBtn.on("click", function () {
    var note = $(this).parent().children(".description").val();
    var noteTime = $(this).parent().attr("id");
    localStorage.setItem(noteTime, JSON.stringify(note));
  });

  var milTime = dayjs().hour();

  var timeBlocks = $(".time-block");

  var textAreas = $(".description");

  for (var i = 0; i < timeBlocks.length; i++) {
    var timeHour = timeBlocks[i];
    var timeBlocksNum = parseInt($(timeHour).attr("data-hour"));

    if (timeBlocksNum < milTime) {
      $(textAreas[i]).removeClass("future present").addClass("past");
    }
    else if (timeBlocksNum > milTime) {
      $(textAreas[i]).removeClass("present past").addClass("future");
    }
    else if (timeBlocksNum === milTime) {
      $(textAreas[i]).removeClass("past future").addClass("present");
    }
  }



  function renderStored() {
    document.getElementById("text-nine").value = JSON.parse(localStorage.getItem("hour-9"));

    document.getElementById("text-ten").value = JSON.parse(localStorage.getItem("hour-10"))

    document.getElementById("text-eleven").value = JSON.parse(localStorage.getItem("hour-11"))

    document.getElementById("text-twelve").value = JSON.parse(localStorage.getItem("hour-12"))

    document.getElementById("text-one").value = JSON.parse(localStorage.getItem("hour-13"))

    document.getElementById("text-two").value = JSON.parse(localStorage.getItem("hour-14"))

    document.getElementById("text-three").value = JSON.parse(localStorage.getItem("hour-15"))

    document.getElementById("text-four").value = JSON.parse(localStorage.getItem("hour-16"))
  }

  renderStored();


});
