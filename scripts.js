//////////////////////
/// Mobile Header ///
////////////////////

/// Variables
var menuIcon = $(".header-menu-icon");
var searchIcon = $(".header-search-icon");
var searchIconClose = $(".search-close");
var mobileMenu = $("nav.header-mobile-menu");
var searchForm = $("form.header-search");

/// Show Mobile Menu
$(menuIcon).on("click", function () {
    if ($(searchForm).is(":visible")) {
        $(searchForm).removeClass("show");
    }
    $(mobileMenu).slideToggle(200);
});

/// Show Search Form
$(searchIcon).on("click", function () {
    if ($(mobileMenu).is(":visible")) {
        $(mobileMenu).hide();
    }
    $(searchForm).toggleClass("show");
});

/// Hide Search Form
$(searchIconClose).on("click", function () {
    $(searchForm).removeClass("show");
});


///////////////////////
/// Desktop Header ///
/////////////////////
$(document).on("scroll", function () {
    if ($(document).scrollTop() > 180) {
        $("header").addClass("shrink");
    } else {
        $("header").removeClass("shrink");
    }
});