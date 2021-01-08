$(document).ready(function () {
  $(".js--section--features").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  //scroll button in the header
  $(".js--scroll-to-plans").click(function () {
    $("html, body").animate(
      // prettier-ignore
      {
        scrollTop: $(".js--section-plans").offset().top
      },
      1200
    );
  });

  //scroll button to plans section
  $(".js--scroll-to-start").click(function () {
    $("html, body").animate(
      // prettier-ignore
      {
        scrollTop: $(".js--section--features").offset().top
      },
      1200
    );
  });

  // Add smooth scrolling to nav links
  $(".main-nav a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
  // change the icon of toggler when click on it
  $(".navbar-toggler").click(function () {
    $("#icon-toggler i").toggleClass("ion-close");
  });
  $(".navbar-nav a").click(function () {
    $("#icon-toggler i").toggleClass("ion-close");
  });
});

// // initiate wow.js
// new WOW().init();

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 1500,
  reset: false,
});

sr.reveal(
  `.steps-box ,.box , .section-testimonials .row  ,.section-plans .row, .section-contact, .jumbotron ,
  .section-testimonials .row , .section-steps .row , .section-features .row `,
  {
    interval: 200,
  }
);
