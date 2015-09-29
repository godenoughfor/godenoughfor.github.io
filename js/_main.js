// Off Canvas Sliding
$(document).ready(function(){
  // Menu button click
  $('#js-menu-trigger,#js-menu-screen').on('click touchstart', function(e){
    // $('#js-body').toggleClass('no-scroll');
    $('#js-menu, #js-menu-screen').toggleClass('is-visible');
    $('#js-menu-trigger').toggleClass('slide close');
    // $('#masthead, #page-wrapper').toggleClass('slide');
    e.preventDefault();
  });
});

// FitVids
$(document).ready(function(){
	// Target your .container, .wrapper, .post, etc.
	$("#main").fitVids();
});

// Table of Contents title. Change text to localize
$("#markdown-toc").prepend("<li><h6>Índice</h6></li>");

// Añadido para emular GreaterThanOrEqualTo

// $(document).ready(function() {
  
//   var desiredtopmargin = $(window).height() * 0.08;

//   $("#content").css("padding-top", desiredtopmargin);
  
//   readitall();
  
//   opening();
  
//   subjectline();
  
//   pagetitle();
  
//   $('body').css('display', 'block');
  
// });

function opening() {
  $('a[data-opens]').click(function() {
    
    var openedby = $(this).attr('data-opens');
    $('[data-openedby="' + openedby +'"]').removeClass('off').addClass('on');
    
    var closedby = $(this).attr('data-closes');
    $('[data-closedby="' + closedby +'"]').css('display', 'none');
    
    $(this).addClass('clicked');
    
  });
}

function readitall() {
  
  $('a[data-finished]').click(function() {
    setTimeout(function() {
      $('head').append('<link rel="stylesheet" href="finished.css" type="text/css" />');
    }, 5000);
  });
  
}

// function subjectline() {

//   var emailsubjects = ["I wanted to tell you about a dream I had", "Flattery", "One day we will meet and then, then you will be sorry", "christ this website... something is wrong with you", "Have you ever thought about what happens after you die?", "This is something I have never told anyone, but I know you won’t judge me"];

//   var pickemailsubject = Math.floor(Math.random()*emailsubjects.length);

//   $('a[href="mailto:alantrotter@gmail.com"]').attr("href", "mailto:alantrotter@gmail.com?subject=" + emailsubjects[pickemailsubject]);

// }

// function pagetitle() {

//   var pagetitles = ["Greater Than Or Equal To, a website about Alan Trotter, a human no one asked about", "Greater Than Or Equal To welcomes you", "Greater Than Or Equal To, Alan Trotter's Website, is A Monument to Hubris", "“With Greater Than Or Equal To, Alan Trotter has achieved the apex (or, rather, nadir) of both lo-fi and self-absorption. All personal websites owe something to vanity, Greater Than Or Equal To is hewn from the stuff, it drips vaseline globules of self-conceit”"]
  
//   var pickpagetitle = Math.floor(Math.random()*pagetitles.length);
  

//   $(document).attr('title', pagetitles[pickpagetitle]);
  
// }

