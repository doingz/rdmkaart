$(document).ready(function() {

  $('.info').on('click', function() {

    $('.legenda').toggleClass('hide');
    $('.info').toggleClass('close');

  });

});


$(window).on('load', function() {

  $('body').addClass('loaded');

});
