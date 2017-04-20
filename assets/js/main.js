console.log("Hello World from main.js!");

$(document).ready(function() {
	$('.navigation').click(function() {
		$('.right-side').toggleClass('invisible');
		$('.left-side').toggleClass('invisible');
	})
})