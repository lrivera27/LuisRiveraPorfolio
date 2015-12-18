$(document).ready(function() {
  //Function to spawn the side navigation bar
  $(".button-collapse").sideNav();

  //Scroll animation
  $('a[href*=#]:not([href=#])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html,body').animate({
         scrollTop: target.offset().top
       }, 1000);
       return false;
     }
   }
 });

  //Parallax effect
  $('.parallax').parallax();

});
