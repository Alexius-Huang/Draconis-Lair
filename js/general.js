/* Google Analytics */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-76853998-2', 'auto');
ga('send', 'pageview');

/* After loaded events */
$(document).ready(function() {

  /* Adjust background */
  adjustBackground();
  $(window).resize(function() { adjustBackground(); })

});

function adjustBackground() {
  if (screen.width <= 480) {
    /* Mobile Version */
    $('h4').css({
      lineHeight: '20pt'
    })
    $('p').css({
      letterSpacing: '1pt',
      fontSize: '130%',
      lineHeight: '22pt'
    });
    

    /* Override */
    $('#main-bgi').css({
      backgroundImage: 'url(./css/BGI/mobile_BGI.png)'
    });
    $('#inner-bgi').css({
      backgroundSize: '100% auto' ,
      backgroundPostion: 'center',
      height: $('#main-bgi').width() * 16 / 9,
    });
    $('#header-container').css({
      margin: '0 auto',
      height: '100%',
      position: 'absolute',
      top: $('#main-bgi').height() / 1.8,
      left: 0,
      right: 0,
    });
    $('#header-container h1').css({
      fontSize: '20pt'
    });
    $('#header-container h3').css({
      fontSize: '15pt'
    });

  } else {
    $('#main-bgi').css({
      backgroundImage: 'url(./css/BGI/draconis_BGI.png)'
    });
    $('#inner-bgi').css({
      backgroundSize: '100% auto' ,
      backgroundPostion: 'center',
      height: $('#main-bgi').width() * 5 / 8,
    });
    $('#header-container').css({
      margin: '0 auto',
      height: '100%',
      position: 'absolute',
      top: $('#main-bgi').height() / 2,
      left: 0,
      right: 0,
    });
  }
}