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

  //Scrollfire effect

	var animationEnd ='webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
  var options = [
		//About title
		{selector: '#about-title', offset: 100, callback: 'makeVisible("#about-title")'},

		//Comp Title
		{selector: '#comp-title', offset: 100, callback: 'makeVisible("#comp-title")'},
		//Computer Engineering
		{selector: '#comp-courses', offset: 200, callback: 'Materialize.showStaggeredList("#comp-courses")'},

		//Elen Title
		{selector: '#elen-title', offset: 100, callback: 'makeVisible("#elen-title")'},
		//Electrical Engineering
		{selector: '#elen-courses', offset: 200, callback: 'Materialize.showStaggeredList("#elen-courses")'},

		//----------------------------------------------------------

		//Skills title
		{selector: "#skills-title", offset: 100, callback: 'makeVisible("#skills-title")'},

		//Language title
		{selector: '#lang-title', offset: 100, callback: 'makeVisible("#lang-title")'},

		//Langauges
		{selector: '#lang-fcolumn', offset: 200, callback: 'makeVisible("#lang-fcolumn", "bounceInUp")'},
		{selector: '#lang-scolumn', offset: 200, callback: 'makeVisible("#lang-scolumn", "bounceInUp")'},

		//Framework title
		{selector: '#frame-title', offset: 100, callback: 'makeVisible("#frame-title")'},

		//Frameworks
		{selector: '#frame-fcolumn', offset: 200, callback: 'makeVisible("#frame-fcolumn", "bounceInUp")'},
		{selector: '#frame-scolumn', offset: 200, callback: 'makeVisible("#frame-scolumn", "bounceInUp")'},

		//----------------------------------------------------------

		//Portfolio
		{selector: '#port-title', offset: 100, callback: 'makeVisible("#port-title")'},
		//Cards
		{selector: '#proj-cards', offset: 200, callback: 'makeVisible("#proj-cards", "bounceInUp")'},

		//----------------------------------------------------------

		//Contact
		{selector: '#contact-title', offset: 100, callback: 'makeVisible("#contact-title")'},
		{selector: '#contact-form', offset: 200, callback: 'makeVisible("#contact-form")'}


  ];
  Materialize.scrollFire(options);

	$('#textarea1').trigger('autoresize');

});

function makeVisible(value, animation) {
	console.log(value, animation);
	if(!animation) { animation = "flipInX"; }
	$(value).addClass("animated "+animation);
	$(value).css('visibility', 'visible');
}
