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

window.addEventListener('load', animateStuff);

function animateStuff() {
	console.log('animate stuff');
	var copyAnimations = new TimelineMax(); 

	copyAnimations
		.from('.name', 0.5, {
			x: '-=3000vw'
		}, 0)
		.staggerFrom('.bold', 0.5, {
			x: '-=3000vw'
		}, 0.5)
		.staggerFrom('.bullet-point', 0.5, {
			x: '-=3000vw'
		}, 0.5);
};

$('.versus').click(animateStuff);

