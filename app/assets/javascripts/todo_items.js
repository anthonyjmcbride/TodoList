// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready( function() {

  $('.table').hide(0);

  $('.table').on('mouseover', function(){
    $(this).fadeIn(5000);
  });
});
