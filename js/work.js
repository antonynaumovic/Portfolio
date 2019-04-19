var lFollowX = 0,
	lFollowY = 0,
	x = 0,
	y = 0,
	friction = 1 / 80;

function moveBackground() {
	x += (lFollowX - x) * friction;
	y += (lFollowY - y) * friction;

	translate = "translate(" + x * 2 + "px, " + y * 2 + "px) scale(" + 1 + ")";
	translate2 = "translate(" + x * 5 + "px, " + y * 5 + "px) scale(" + 1 + ")";
	translate3 = "translate(" + x * 3 + "px, " + y * 3 + "px) scale(" + 1 + ")";
	translate4 = "translate(" + x * 7 + "px, " + y * 7 + "px) scale(" + 1 + ")";
	translate5 = "translate(" + x * 9 + "px, " + y * 9 + "px) scale(" + 1 + ")";

	$(".layer1").css({
		"-webit-transform": translate,
		"-moz-transform": translate,
		transform: translate
	});

	$(".layer2").css({
		"-webit-transform": translate2,
		"-moz-transform": translate2,
		transform: translate2
	});

	$(".layer3").css({
		"-webit-transform": translate3,
		"-moz-transform": translate3,
		transform: translate3
	});

	$(".layer4").css({
		"-webit-transform": translate4,
		"-moz-transform": translate4,
		transform: translate4
	});

	$(".layer5").css({
		"-webit-transform": translate2,
		"-moz-transform": translate2,
		transform: translate2
	});

	$(".layer6").css({
		"-webit-transform": translate2,
		"-moz-transform": translate2,
		transform: translate2
	});

	$(".layer7").css({
		"-webit-transform": translate4,
		"-moz-transform": translate4,
		transform: translate4
	});

	$(".layer8").css({
		"-webit-transform": translate5,
		"-moz-transform": translate5,
		transform: translate5
	});

	//.layer5
	//.layer1
	//.layer3
	//.layer4
	//.layer2
	//.layer6
	//.layer7

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
moveBackground();
