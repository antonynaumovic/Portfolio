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
    .mouseup(function () {
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
    timeout2 = setTimeout(function () {
        window.location.href = "index.html";
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

    widthBar = progressBar.width();
    widthBar = (widthBar / progressBar.parent().width()) * 100;
    console.log(widthBar);
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