$(document).ready(function () {
  // Fixed navbar
  $(window).scroll(function () {
    var sticky = $(".navbar-main"),
      scroll = $(window).scrollTop();

    if (scroll >= 100) sticky.addClass("navbar-fixed");
    else sticky.removeClass("navbar-fixed");
  });

  // ===== Scroll to Top ====
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {
      // If page is scrolled more than 50px
      $("#return-top").fadeIn(200); // Fade in the arrow
    } else {
      $("#return-top").fadeOut(200); // Else fade out the arrow
    }
  });

  // Return to top
  $("#return-top").click(function () {
    // When arrow is clicked
    $("body,html").animate(
      {
        scrollTop: 0, // Scroll to top of body
      },
      500
    );
  });

  //jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function () {
    $("a.page-scroll").bind("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top,
          },
          1500,
          "easeInOutExpo"
        );
      event.preventDefault();
    });
  });

  //--------------------- end of document ready
});

// Content Scroll
(function ($) {
  $(".overlay-scroll").mCustomScrollbar({
    scrollButtons: { enable: true },
    theme: "light-thick",
    scrollbarPosition: "outside",
    mouseWheelPixels: 150, //change this to a value, that fits your needs
  });
})(jQuery);

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
  $("a.page-scroll").bind("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top,
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});

// Tooltip
$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle="popover"]').popover();

// Loader
$(window).on("load", function () {
  $(".loader-overlay").delay(2000).fadeOut("slow");
});
