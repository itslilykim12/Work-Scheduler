// set p tag with current time
$("#currentDay").text(moment().format("dddd MMMM Do YYYY, hh:mm a"));
// timer to constantly update and display current date and time in p tag id currentDay
setInterval(function() {
    $("#currentDay").text(moment().format("dddd MMMM Do YYYY, hh:mm a"));
    var currentTime = moment().format("hh");
    colorCode(currentTime);
}, 1000);
var colorCode = function(currentTime) {
    var hour = $(".description").attr("hour");
    if(hour === currentTime) {
        $(".description").addClass("present");
        console.log("Present");
    } else if (hour < currentTime) { 
        $(".description").addClass("past");
        console.log("Past");
    } else if (hour > currentTime) {
        $(".description").addClass("future");
        console.log("Future");
    }
};

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
   

    // Get item from local storage if any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

 
});