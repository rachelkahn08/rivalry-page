console.log("Hello World from main.js!");

$(document).ready(function() {
	$('.navigation').click(function() {

		function toggleVisibility() {
			$('.gopher-side').toggleClass('invisible');
			$('.carl-side').toggleClass('invisible');
		};

		toggleVisibility();

		// if ( $('.gopher-side').classList.contains('.invisible') ) {
		// 	document.body.setAttribute('backgroundColor', '$carlGrey');
		// } else if ( $('.carl-side').classList.contains('.invisible') ) {
		// 	document.body.setAttribute('backgroundColor', '$gopherGrey');
		// };
	});
});