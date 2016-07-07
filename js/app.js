var main = function() {

  $(document).ready(function() {
    pageWidth = $( window ).width();

    if (pageWidth > 800) {
      $('#nav').css('visibility', 'visible');
      $('.menu').css('visibility', 'hidden');
      $('.icon-menu').css('visibility', 'hidden');
    }else {
      $('#nav').css('visibility', 'hidden');
      $('.menu').css('visibility', 'visible');
      $('.icon-menu').css('visibility', 'visible');
      $('p').css('color', '#fff');
      $('a').css('color', '#fff');
    }
  });


  /* Push the body and the nav over by 150px over */
  $('.icon-menu').click(function() {

    position = parseInt($('.menu').css('left').replace(/[^-\d\.]/g, ''));
    pageWidth = $( window ).width();

    if (position == pageWidth) {
      $('.menu').animate({
        right: "0px"
      }, 200);

      $('body').animate({
        right: "150px"
      }, 200);
    }else{
      $('.menu').animate({
        right: "-150px"
      }, 200);

      $('body').animate({
        right: "0px"
      }, 200);
    }


  });
};

$(document).ready(main);
