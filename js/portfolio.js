var $portfolios = ['simple-harmonic-motion', 'game-of-life', '2048'];
var $platforms  = ['draconis', 'github', 'codepen', 'medium'];

$(document).ready(function() {
  resizeImgWidth();
  resizePortfolioSection();
  $(window).resize(function() {
    resizeImgWidth();
    resizePortfolioSection();  
  });

  $portfolios.forEach(function(portfolio) {
    $platforms.forEach(function(platform) {
      $('#' + platform + '-' + portfolio + '-logo').hover(function() {
        $(this).attr('src', './logos/white_' + platform + '_logo.png');
      }, function() {
        $(this).attr('src', './logos/lightblue_' + platform + '_logo.png');
      });
    });
  })
});

function resizeImgWidth() {
  $portfolios.forEach(function(portfolio) {
    $platforms.forEach(function(platform) {
      $('#' + platform + '-' + portfolio + '-logo').css('height', $('#header-' + portfolio).outerHeight());
    });
    $('#img-' + portfolio).css({
      width: $('#img-container-' + portfolio).width(),
      maxWidth: $('#img-container-' + portfolio).width()
    });
  });  
}

function resizePortfolioSection() {
  if ($(window).width() <= 768) {
    $portfolios.forEach(function(portfolio) {
      $('#paragraph-' + portfolio).css({
        height: $('#paragraph-' + portfolio).outerHeight(true)
      });
    });
  } else {
    $portfolios.forEach(function(portfolio) {
      $('#paragraph-' + portfolio).css({
        height: $('#img-' + portfolio).height()
      })
    });
  }
}