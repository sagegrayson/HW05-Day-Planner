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

	
}

time();
