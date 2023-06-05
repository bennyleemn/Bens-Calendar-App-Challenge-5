// One fuction to create an individual card for each hour for current day/hour


$(document).ready(function () {
  // Display the current date in the header of the page
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
  
  // Listener for click events on the save button
  $(".saveBtn").on("click", function () {
    // Get the id of the containing time-block
    var timeBlockId = $(this).closest(".time-block").attr("id");
    // Get the user input from the textarea
    var userInput = $(this).siblings(".description").val();
    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });

  // Apply the past, present, future class to each time block
  function timeOfDate() {

    var currentHour = dayjs().format("H");
    // wrap in a function and call it on row 44
    $(".time-block").each(function () {
      var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
  
      if (timeBlockHour < currentHour) {
        $(this).addClass("past");
      } else if (timeBlockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
  
      }
    });
  }

  timeOfDate();

  // Get user input from local storage and set textarea values
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var userInput = localStorage.getItem(timeBlockId);

    if (userInput) {
      $(this).find(".description").val(userInput);
    }
  });


});

