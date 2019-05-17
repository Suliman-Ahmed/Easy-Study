$(".log-in").click(function () {
  $(".signIn").addClass("active-dx");
  $(".signUp").addClass("inactive-sx");
  $(".signUp").removeClass("active-sx");
  $(".signIn").removeClass("inactive-dx");
});

$(".back").click(function () {
  $(".signUp").addClass("active-sx");
  $(".signIn").addClass("inactive-dx");
  $(".signIn").removeClass("active-dx");
  $(".signUp").removeClass("inactive-sx");
});

$(function () {
  $(".close-btn").click(function () {
    $(".Nav").toggleClass("menu-open");
    $("#Page-Header").hide();

  });
});



$("ul.main-Nav>li").hover(
  function () {
    $(this)
      .find("ul.dropdown")
      .show();
  },
  function () {
    $(this)
      .find("ul.dropdown")
      .hide();
  }
);

$("video").hover(
  function () {
    $(this).prop("controls", true);
  },
  function () {
    $(this).prop("controls", false);
  }
);

$each("video.Main-Vid > #Main-Vid", function () {
  this.hideControls();
});

//videoElement.removeAttribute('controls');