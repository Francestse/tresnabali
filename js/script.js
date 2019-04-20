$(document).ready(function() {
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
    } else {
      //remove the background property so it comes transparent again (defined in your css)
      $("header").removeClass("active");
    }
  });
});

// Owl Carousel Settings
$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: false
  });
});

$(document).ready(function() {
  $("#tripadvisor-reviews").owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true
  });
});

// Mobile Menu toggle

$(document).ready(function() {
  $("#open").click(function() {
    $("#dropdown-menu").toggleClass("show");
    return false;
  });
  $("#close").click(function() {
    $("#dropdown-menu").toggleClass("show");
    return false;
  });
});
