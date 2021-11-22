console.log("script loaded");

// DEPENDENCIES =================================
// connect to save buttons
// connect to text areas
// connect to header
// connect to moment.js

// DATA =========================================
// current time to print to screen (header)

// FUNCTIONS ====================================
// master functions -----------------------------
// start app
// helper functions -----------------------------
// get current time (moment)
// save to local storage
// getting from local storage
// stretch: clear local storage
// based on time -> change color of text areas

// USER INTERACTIONS ============================
// [event listeners]
// save buttons -> local storage

// INITIALIZATION ===============================
// start app?

function time() {
	// sets current day in jumbotron
	$("#currentDay").text(moment().format("LLLL"));

	// gets information from local storage and sets text area
	var stored = Object.keys(localStorage);
	for (let i = 0; i < stored.length; i++) {
		// gets item from local storage
		var value = localStorage.getItem(stored[i]);
		// sets text area as local storage value
		var temp = $("#" + stored[i]).find("textarea");
		temp.val(value);
	}

	// saves text box on click
	$(".saveBtn").on("click", function (event) {
		event.preventDefault();
		console.log(this);
		// gets the current value of the text box
		var value = $(this).siblings(".description").val();
		// gets the id that the time box is in
		var time = $(this).parent().attr("id");
		// saves both in local storage
		localStorage.setItem(time, value);
	});

	function timeColor() {
		var currentHour = moment().hours();

		$(".time-block").each(function () {
			// sets hour of block from id
			var hour = $(this).attr("id");
			// turns hour into an integer
			var intHour = parseInt(hour);
			// turns current hour into an integer
			var intCurrentHour = parseInt(currentHour);
			// if else to set color
			if (parseInt(intHour) < parseInt(intCurrentHour)) {
				$(this).addClass("past");
				$(this).removeClass("future");
				$(this).removeClass("present");
			} else if (parseInt(intHour) > parseInt(intCurrentHour)) {
				$(this).addClass("future");
				$(this).removeClass("present");
				$(this).removeClass("past");
			} else if (parseInt(intHour) === parseInt(intCurrentHour)) {
				$(this).addClass("present");
				$(this).removeClass("future");
				$(this).removeClass("past");
			}
		});
	}

	timeColor();
}

time();
