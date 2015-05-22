/* The JQuery below envokes an alert when the signup link is clicked.
The function listens for a click on the #signupButton ID and prints an alert if it is clicked.
The use of .ready() ensures that the js is not laoded until all the DOM elemenst ahve loaded*/ 

$( document ).ready(function() {
	$("#signupButton").click(function() {
		alert("We are not ready for signups...yet.");
	});
});

