$(document).ready(function() {
  /* Responsive adjust */
  /* Careful - it will override the general.js responsive adjust */
  adjustAvatar();
  responsiveAdjust();
  adjustAboutMeSectionComponentHeight();
  preventEmailOverflow();
  adjustSkillSection();
  $(window).resize(function() {
    adjustAvatar();
    responsiveAdjust();
    adjustAboutMeSectionComponentHeight();
    preventEmailOverflow();
    adjustSkillSection();
  });
});

function isOverflowed(element){
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

function adjustAvatar(){
  /* Adjust avatar width */
  $('#avatar').css({
    'max-width': $('#avatar-section').width(),
    'min-width': $('#avatar-section').width()
  });
}

function adjustAboutMeSectionComponentHeight() {
  if ($('#avatar-section').width() == $('#about-me-paragraph').width()) {
    /* Means component only compose single column */
    var adjustAvatarSectionHeight = 0;
    adjustAvatarSectionHeight += $('img#avatar').outerHeight(true);
    $('#info-container').children().each(function() {
      adjustAvatarSectionHeight += $(this).outerHeight(true);
    });
    $('#avatar-section').css({
      height: adjustAvatarSectionHeight
    });

    var adjustParagraphSectionHeight = $('#about-me-paragraph-container').outerHeight(true);
    $('#about-me-paragraph').css({
      height: adjustParagraphSectionHeight,
      marginBottom: '40pt'
    });
  } else {
    var avatarSectionInnerHeight = 0;
    var paragraphSectionInnerHeight = 0;

    avatarSectionInnerHeight += $('img#avatar').outerHeight(true);
    $('#info-section').children().each(function() {
      avatarSectionInnerHeight += $(this).outerHeight(true);
    });
    paragraphSectionInnerHeight += $('#about-me-paragraph-container').outerHeight(true);
    if (avatarSectionInnerHeight > paragraphSectionInnerHeight) {
      $('#avatar-section').css('height', avatarSectionInnerHeight);
      $('#about-me-paragraph').css('height', avatarSectionInnerHeight);
    } else {
      $('#info-section').css('height', paragraphSectionInnerHeight - $('img#avatar').height());
      $('#about-me-paragraph').css('height', paragraphSectionInnerHeight);
      $('#avatar-section').css({
        height: paragraphSectionInnerHeight,
        marginBottom: '30pt'
      });
    }
  }
}

function adjustSkillSection() {
  var images = $('#skill-section img');
  var paragraphs = $('#skill-section p');
  images.each(function(){
    if (screen.width <= 720) {
      $(this).parent().css('padding', '4%');
      $(this).css('max-width', $(this).parent().width());
    } else {
      $(this).parent().css('padding', '3%');
      $(this).css('max-width', $(this).parent().width());
    }
  });
}

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

function preventEmailOverflow() {
  var infoEmail = document.getElementById('info-email');
  if (isOverflowed(infoEmail)) {
    infoEmail.innerHTML = 'destinydragon85614 @gmail.com';
  }
}