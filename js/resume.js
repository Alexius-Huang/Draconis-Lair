$(document).ready(function() {
  /* Adjust avatar width */
  $('#avatar').css('max-width', $('#avatar-section').width());  

  /* Responsive adjust */
  /* Careful - it will override the general.js responsive adjust */
  responsiveAdjust();
  $(window).resize(function() { responsiveAdjust(); });
});

function responsiveAdjust() {
  if (screen.width <= 480) {
    /* Mobile Version */

  } else if (screen.width <= 720) {
  
  } else {
    /* Adjust about me section height */
    if ($('#info-section').height() + $('#avatar').height() > $('#about-me-paragraph').height()) {
      $('#about-me-paragraph').css('height', $('#avatar').height() + $("#info-section").outerHeight());
    } else {
      $('#info-section').css('height', $('#about-me-paragraph').height() - $('#avatar').height());
    }
  }
}