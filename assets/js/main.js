console.log("Hello World from main.js!");

$(document).ready(function() {
	$('.navigation').click(function() {
		$('.gopher-side').toggleClass('invisible');
		$('.carl-side').toggleClass('invisible');
	})
})