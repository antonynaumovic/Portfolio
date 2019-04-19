var lFollowX = 0,
	lFollowY = 0,
	x = 0,
	y = 0,
	friction = 1 / 80;

var item = document.querySelector(":root");
var effect = $(".squareOutline");
var cover = $(".cover");
var progressBar = $(".progressBar");
var clicked = false;
var widthBar = 0;

var down = false;
progressBar.addClass("progress-pause");

$("body")
	.mousedown(function() {
		console.log("yeet");
		down = true;

		console.log(down);

		if (down) {
			progressBar.removeClass("progress-pause");
			progressBar.addClass("progress-running");
		} else {
			progressBar.removeClass("progress-running");
			progressBar.addClass("progress-pause");
		}
	})
	.mouseup(function() {
		down = false;
		console.log(down);
		if (down) {
			progressBar.removeClass("progress-pause");
			progressBar.addClass("progress-running");
		} else {
			progressBar.removeClass("progress-running");
			progressBar.addClass("progress-pause");
		}
	});

function redirect() {
	timeout2 = setTimeout(function() {
		window.location.href = "work.html";
	}, 2000);
}

function scaleCover() {
	cover.css({
		"-webit-transform": "scale(0)",
		"-moz-transform": "scale(0)",
		transform: "scale(0)"
	});
}

function scaleCoverBig() {
	cover.css({
		"-webit-transform": "scale(100)",
		"-moz-transform": "scale(100)",
		transform: "scale(100)"
	});
}

function moveBackground() {
	x += (lFollowX - x) * friction;
	y += (lFollowY - y) * friction;

	translate =
		"translate(" + x * 2.5 + "px, " + y * 2.5 + "px) scale(" + 1.1 + ")";

	translate2 =
		"translate(" + -x * 3 + "px, " + -y * 3 + "px) scale(" + 1.2 + ")";

	translate3 =
		"translate(" +
		x * 5 +
		"px, " +
		y * 5 +
		"px) scale(" +
		1.1 +
		") rotate(45deg)";

	translate4 =
		"translate(" +
		x * -1 +
		"px, " +
		y * -1 +
		"px) scale(" +
		1 +
		") rotate(45deg)";

	translate5 =
		"translate(" +
		x * 10 +
		"px, " +
		y * 10 +
		"px) scale(" +
		1.1 +
		") rotate(45deg)";

	translate7 =
		"translate(" +
		x * 13 +
		"px, " +
		y * 13 +
		"px) scale(" +
		1.1 +
		") rotate(45deg)";

	translate6 =
		"translate(" +
		x * 20 +
		"px, " +
		y * 20 +
		"px) scale(" +
		1.1 +
		") rotate(45deg)";

	translate8 =
		"translate(" + x * 0.8 + "px, " + y * 0.8 + "px) scale(" + 1.1 + ") ";

	translate9 =
		"translate(" + x * 30 + "px, " + y * 30 + "px) scale(" + 1.1 + ") ";

	translate10 =
		"translate(" + x * 1.5 + "px, " + y * 1.5 + "px) scale(" + 1.1 + ") ";

	widthBar = progressBar.width();
	widthBar = (widthBar / progressBar.parent().width()) * 100;
	console.log(widthBar);
	if (widthBar >= 80) {
		scaleCoverBig();
		redirect();
	}

	$(".squareLines").css({
		"-webit-transform": translate8,
		"-moz-transform": translate8,
		transform: translate8
	});

	$(".biggerHolder").css({
		"-webit-transform": translate9,
		"-moz-transform": translate9,
		transform: translate9
	});

	$(".squareBig").css({
		"-webit-transform": translate3,
		"-moz-transform": translate3,
		transform: translate3
	});

	$(".circle").css({
		"-webit-transform": translate,
		"-moz-transform": translate,
		transform: translate
	});

	$(".circle1").css({
		"-webit-transform": translate2,
		"-moz-transform": translate2,
		transform: translate2
	});

	$(".circle2").css({
		"-webit-transform": translate4,
		"-moz-transform": translate4,
		transform: translate4
	});
	$(".circle3").css({
		"-webit-transform": translate10,
		"-moz-transform": translate10,
		transform: translate10
	});
	$(".circle4").css({
		"-webit-transform": translate5,
		"-moz-transform": translate5,
		transform: translate5
	});

	$(".circle5").css({
		"-webit-transform": translate6,
		"-moz-transform": translate6,
		transform: translate6
	});

	$(".circle6").css({
		"-webit-transform": translate7,
		"-moz-transform": translate7,
		transform: translate7
	});

	$(".squareholder").css({
		"-webit-transform": translate,
		"-moz-transform": translate,
		transform: translate
	});

	window.requestAnimationFrame(moveBackground);
}

$(window).on("mousemove click", function(e) {
	var lMouseX = Math.max(
		-100,
		Math.min(100, $(window).width() / 2 - e.clientX)
	);
	var lMouseY = Math.max(
		-100,
		Math.min(100, $(window).height() / 2 - e.clientY)
	);
	lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
	lFollowY = (10 * lMouseY) / 100;
});
scaleCover();
moveBackground();
