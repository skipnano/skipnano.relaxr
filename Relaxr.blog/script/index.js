/*
Project Name: Relaxr Blog
Client: Relaxr
Author: Dean Gilroy
Developer @GA in NYC
*/

// BEGIN MAY 29TH ASSIGNMENT

//Prevent all scripts from loading until all DOM elements have loaded. Wraps around all scripts.
$( document ).ready(function() {
	console.log("scripts loaded")

	//prevents the href from launching when .more and .side-cta classes are clicked.
	$(".more, .side-cta").click(function (event) {
		event.preventDefault ();
			console.log ("click event prevented");
	});

	//listens for a click on the #signupButton ID and prints an alert if it is clicked.
	$("#signupButton").click(function() {
		alert("We are not ready for signups...yet.");
	});

//REQUIREMENTS FOR COLUMN ONE
//add a new <p> tag block of text in each article
//add a hide function on the <p> tag
//add a slidedown function when "Read More" is clicked that slides the <p> tag down
//hide Read More and show Read Less when the <p> tag slides down
//add a <span> tag with a 'Read Less' cta.
//When Read Less is clicked, slide the <p> tag up and hide the <p> tag and the <span> tag

	//hides the second block of text in each article until the functions below are evoked.
	$(".slideText").hide();
		console.log("slideText hidden");

	//when Read More in the first article is clicked this slides the hidden text down, and hides the Read More link
 	$("#linkOne").click(function () {
		$("#slideTextOne").slideDown(500);
		$("#linkOne").hide();
	});

	//when Read Less in article one is clicked the block text slides up and is hidden. Read More is displayed again.
	$("#span1").click(function() {
		$("#slideTextOne").slideUp(500);
		$("#linkOne").show(500);
	});

	//when Read More in the second article is clicked this slides the hidden text down, and hides the Read More link
	$("#linkTwo").click(function () {
		$("#slideTextTwo").slideDown(500);
		$("#linkTwo").hide();
	});

	//when Read Less article two is clicked the block text slides up and is hidden. Read More is displayed again.
	$("#span2").click(function() {
		$("#slideTextTwo").slideUp(500);
		$("#linkTwo").show(500);
	});

//REQUIREMENTS FOR SIDEBAR
//add a new <p> tag block of text in each article
//add a hide function on the <p> tag
//add a slidedown function when "Learn More" is clicked that slides the <p> tag down
//hide Learn More and show Learn Less when the <p> tag slides down
//add a <span> tag with a 'Learn Less' cta.
//When Learn Less is clicked, slide the <p> tag up and hide the <p> tag and the <span> tag.

	//hides the second block of text until the functions below are evoked
	$("#slideText-sidebar").hide();
		console.log("slideText-sidebar hidden");

	//when Learn More is clicked this slides the hidden text down, and hides the Learn More link
	$(".side-cta").click(function () {
		$("#slideText-sidebar").slideDown(500);
		$(".side-cta").hide();
	});

	//when Learn Less is clicked the block text slides up and is hidden. Learn More is displayed again.
	$("#learnLess").click(function() {
		$("#slideText-sidebar").slideUp(500);
		$(".side-cta").show(300);
	});
});





