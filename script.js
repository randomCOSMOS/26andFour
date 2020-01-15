$("#menu").on("click", function () {
    $("#nav").removeClass("hide-mobile");
    $("#nav").addClass("animation");
});

$("#exit").on("click", function () {
    $("#nav").addClass("hide-mobile");
    $("#nav").removeClass("animation");
});