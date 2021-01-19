$(function () {
  let header = $("header"),
    promoH = $("#promo").innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  /* Fixed Header */
  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= promoH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /* Smooth scroll */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    let blockId = $(this).data("scroll"),
      blockOffset = $(blockId).offset().top;
    $("html, body").animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });

  /* Toggle Menu */
  $("#menu_toggle").on("click", function (event) {
    event.preventDefault();
    $("#menu_toggle").toggleClass("active");
    $("#menu").toggleClass("active-menu");
  });
});
