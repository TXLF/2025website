// Preloader js
$(window).on("load", function () {
  $(".preloader").fadeOut(100);
});

(function ($) {
  // -----------------------------
  //  Screenshot Slider
  // -----------------------------
  $(".speaker-slider").slick({
    slidesToShow: 3,
    centerMode: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  // -----------------------------
  //  Count Down JS
  // -----------------------------

  $year = $(".timer").data("year");
  $month = $(".timer").data("month");
  $day = $(".timer").data("day");
  $(".timer").syotimer({
    day: $day,
    month: $month,
    year: $year,
    hour: 0,
    minute: 0,
  });
  // -----------------------------
  // To Top Init
  // -----------------------------
  $(".to-top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
    return false;
  });

  // -----------------------------
  // Magnific Popup
  // -----------------------------
  $(".image-popup").magnificPopup({
    type: "image",
    removalDelay: 160, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function () {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace(
          "mfp-figure",
          "mfp-figure mfp-with-anim"
        );
        this.st.mainClass = this.st.el.attr("data-effect");
      },
    },
    closeOnContentClick: true,
    midClick: true,
    fixedContentPos: false,
    fixedBgPos: true,
  });
  // -----------------------------
  // Mixitup
  // -----------------------------
  var containerEl = document.querySelector(".gallery-wrapper");
  var mixer;
  if (containerEl) {
    mixer = mixitup(containerEl);
  }
})(jQuery);


$('#web-contact-form').submit(function() {
  event.preventDefault(); // this will prevent the default submit

  var actionUrl = $(this).attr('action');
  var message = $(this).find("textarea[name=message]");
  if(actionUrl && actionUrl != "#" && message) {
      var newBodyMsg = "";
      var subject = "Web Contact Form Submission";

      var username = $(this).find("input[name=name]").val();
      var useremail = $(this).find("input[name=email]").val();
      if(username.trim().length > 0) {
          newBodyMsg += "Hi! my name is " + username + ".";
      }
      if(useremail.trim().length > 0) {
          if(newBodyMsg.length > 0) {
              newBodyMsg += " & ";
          }
          newBodyMsg += "my email address is " + useremail + ".";
      }

      if (newBodyMsg.length > 0) {
          newBodyMsg += "\n\n ";
      }
      newBodyMsg += message.val();
      window.open(actionUrl + "?subject="+ encodeURIComponent(subject) +"&body=" + encodeURIComponent(newBodyMsg));
  }
  
  return false;
});