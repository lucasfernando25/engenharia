$(document).ready(function () {
  //ANCORA
  let $doc = $("html, body");
  $("a.ancora").click(function () {
    $doc.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top - 150,
      },
      1500
    );
    return false;
  });

  //MENU
  $(".menu-link").click(function (event) {
    event.preventDefault();
    $(".menu-overlay").toggleClass("open");
    $(".menu").toggleClass("open");
  });
  if ($(window).width() <= 960) {
    $(".nav a.ancora").click(function (event) {
      event.preventDefault();
      $(".menu-overlay").toggleClass("open");
      $(".menu").toggleClass("open");
    });
  }

  //EFEITO HEADER
  var top = $("body").offset().top;
  $(document).scroll(scrollListener);
  scrollListener();
  function scrollListener() {
    if ($(document).scrollTop() > top) {
      $("img#img-logo").css({ height: "45px" });
    } else {
      $("img#img-logo").css({ height: "64px" });
    }
  }

  //MASK
  $("input#f-celular").mask("(00) 00000-0000");
});
