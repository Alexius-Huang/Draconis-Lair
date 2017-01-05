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
  $('#inner-bgi').css({
    backgroundSize: screen.width ,
    backgroundPostion: 'center',
    height: $('#main-bgi').width() * 5 / 8,
  });
  $('#header-container').css({
    margin: '0 auto',
    height: '100%',
    position: 'absolute',
    top: $('#main-bgi').height() / 3,
    left: 0,
    right: 0,
  });
  
});