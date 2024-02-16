$(document).ready(function () {
    $(".dropdown").click(function () {
        $(this).parant("li").siblings("li").children("li").slideToggle();
    })
})