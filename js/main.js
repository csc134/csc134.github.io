
window.onload = function(){
  var width = $( document ).width();
  if(width <= 500){
    $('iframe').attr('width', width - 50);
  }
  $("#load-box").delay(2000).fadeOut(function(){
    $('#mainbody').removeAttr('hidden');
    $("#load-content").slideUp(500, function(){

    });
  });
  $('.button-collapse').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrainWidth: false, // Does not change width of dropdown to that of the activator
    gutter: 0, // Spacing from edge
    belowOrigin: true, // Displays dropdown below the button
    alignment: 'left', // Displays dropdown with edge aligned to the left of button
  }
);
$('.slider').slider();
$('.collapsible').collapsible();
$('.parallax').parallax();
$('.materialboxed').materialbox();
}

// Scrolls to the selected menu item on the page
$(function() {
  $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
