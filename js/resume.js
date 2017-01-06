$(document).ready(function() {
  /* Adjust avatar width */
  $('#avatar').css('max-width', $('#avatar-section').width());  

  /* Adjust about me section height */
  $('#about-me-paragraph').css('height', $('#avatar').height() + $("#info-section").outerHeight());

  /* Responsive adjust */
  /* Careful - it will override the general.js responsive adjust */
  responsiveAdjust();
  $(window).resize(function() { responsiveAdjust(); });
});

function responsiveAdjust() {
  if (screen.width <= 480) {
    /* Mobile Version */

  } else {

  }
}