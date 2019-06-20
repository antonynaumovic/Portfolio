var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 80;

var item = document.querySelector(":root");
var cover = $(".cover");
var progressBar = $(".progressBar");
var clicked = false;
var widthBar = 0;

var down = false;
progressBar.addClass("progress-pause");

$("body")
    .mousedown(function () {
        down = true;

        if (down) {
            progressBar.removeClass("progress-pause");
            progressBar.addClass("progress-running");
        } else {
            progressBar.removeClass("progress-running");
            progressBar.addClass("progress-pause");
        }
    })
    .mouseup(function () {
        down = false;
        if (down) {
            progressBar.removeClass("progress-pause");
            progressBar.addClass("progress-running");
        } else {
            progressBar.removeClass("progress-running");
            progressBar.addClass("progress-pause");
        }
    });

function p_touch_start(){
		p_touch_move.cancel_click = false;
		progressBar.removeClass("progress-pause");
		progressBar.addClass("progress-running");
	}
	function p_touch_end(){
		if(p_touch_move.cancel_click) return;
		p_touch_move.cancel_click = true;//avoid somehow repeat call
		//trigger onclick()
	
	}
	function p_touch_move(){
		//user is drag page, not click
		p_touch_move.cancel_click = true;
	}

	if (p_touch_move.cancel_click == true){
		progressBar.removeClass("progress-running");
		progressBar.addClass("progress-pause");
	}



function redirect() {
    timeout2 = setTimeout(function () {
        window.location.href = "gallery.html";
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

    widthBar = progressBar.width();
    widthBar = (widthBar / progressBar.parent().width()) * 100;
    if (widthBar >= 80) {
        scaleCoverBig();
        redirect();
    }

    window.requestAnimationFrame(moveBackground);
}

$(window).on("mousemove click", function (e) {
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
