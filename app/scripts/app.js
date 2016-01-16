/*
*
*	Needs to be edited for the background fadeIn effect
*/

$(document).ready(function(){
  $('.main').fadeOut(function() {
    $('.main').css({ background-image: url('../images/back.jpg') });
    $('.main').fadeIn(200);
  }, 100);
});

// OR USE LIKE THIS

$(document).ready(function(){
   setTimeout(function(){
       $('.main').css('background', 'url(../images/back.jpg)');
   }, 10000);    
});
