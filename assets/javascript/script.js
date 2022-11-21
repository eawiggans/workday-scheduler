// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    // TODO: Add code to display the current date in the header of the page.
  var today = dayjs();
  $("#currentDay").text(today.format(" MMM D, YYYY"));


  var time = dayjs().format("hh:mm:ss");
  $("#currentTime").text(time);
  console.log(time)
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // Use the correct selector `#` to select a button by its ID and not class
  var saveBtn = $('.saveBtn');
  saveBtn.on("click", function () {
    var note = $(this).parent().children(".description").val();
    var noteTime = $(this).parent().attr("id");
    localStorage.setItem("noteTime", noteTime);
    localStorage.setItem("note", note);
  });

  var milTime = dayjs().hour();
  console.log(milTime)
  var timeBlocks = $(".time-block");
  console.log("timeBlocks");
  console.log(timeBlocks);
  var textAreas = $(".description");
  for (var i = 0; i < timeBlocks.length; i++) {
    var timeHour = timeBlocks[i];
    var timeBlocksNum = parseInt($(timeHour).attr("data-hour"));
    console.log(timeBlocksNum);
    if (timeBlocksNum < milTime) {
      $(textAreas[i]).removeClass("future present").addClass("past");
    }
    // set time block to future
    else if (timeBlocksNum > milTime) {
      $(textAreas[i]).removeClass("present past").addClass("future");
    }
    else if (timeBlocksNum === milTime) {
      $(textAreas[i]).removeClass("past future").addClass("present");
    }
  }





  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  var ids = [];
  ids = $("root").children(".time-block").attr("id");
  console.log(ids);
  // function renderNotes() {
  //     var description = $(".description");
  //     localStorage.getItem(note);
  //     localStorage.getItem(noteTime);
  //     if (noteTime === $(".description").attr("id"))
  //   }

  


});
