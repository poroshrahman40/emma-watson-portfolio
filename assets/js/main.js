$(function () {
    "use strict";
    $(".mobile__toggle__container").click(function () {
        if ($(".ew__nav").attr("class") === "ew__nav") {
            $(".ew__nav").attr("class", "ew__nav nav-mobile__open");
            $(".mobile__toggle__container").attr("class", "mobile__toggle__container mobile__toggle__container-closeIconVisible");
            $("#mob__menu").attr("class", "nav__mobile__container nav__mobile__container__default nav__mobile__container-visible");
        } else {
            $(".ew__nav").attr("class", "ew__nav");
            $(".mobile__toggle__container").attr("class", "mobile__toggle__container");
            $("#mob__menu").attr("class", "nav__mobile__container nav__mobile__container--default");
        }
    });
});