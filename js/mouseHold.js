var item = document.querySelector(":root");
var value = 4;

$("body").mousedown(function() {
    console.log("yeet");

    item.style.setProperty("--type-value", "1s")
  }
).mouseup(function() {

    item.style.setProperty("--type-value", "4s")
});
