// navigation menu
$(document).ready(function(){
    var scrollTop = 0;
    $(window).scroll(function(){
      scrollTop = $(window).scrollTop();
       $('.counter').html(scrollTop);
      
      if (scrollTop >= 100) {
        $('.bg-transparent').addClass('scrolled-nav');
      } else if (scrollTop < 100) {
        $('.bg-transparent').removeClass('scrolled-nav');
      } 
      
    }); 
    
  });

//   smooth scrolling 
$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function() {
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
  
// animated background
// var canvasDots = function() {
//     var canvas = document.querySelector('canvas'),
//         ctx = canvas.getContext('2d'),
//         colorDot = '#a0a0a0',
//         color = '#a0a0a0';
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     canvas.style.display = 'block';
//     ctx.fillStyle = colorDot;
//     ctx.lineWidth = .1;
//     ctx.strokeStyle = color;

//     var mousePosition = {
//         x: 30 * canvas.width / 100,
//         y: 30 * canvas.height / 100
//     };

//     var dots = {
//         nb: 600,
//         distance: 60,
//         d_radius: 100,
//         array: []
//     };

//     function Dot(){
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;

//         this.vx = -.5 + Math.random();
//         this.vy = -.5 + Math.random();

//         this.radius = Math.random();
//     }

//     Dot.prototype = {
//         create: function(){
//             ctx.beginPath();
//             ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//             ctx.fill();
//         },

//         animate: function(){
//             for(i = 0; i < dots.nb; i++){

//                 var dot = dots.array[i];

//                 if(dot.y < 0 || dot.y > canvas.height){
//                     dot.vx = dot.vx;
//                     dot.vy = - dot.vy;
//                 }
//                 else if(dot.x < 0 || dot.x > canvas.width){
//                     dot.vx = - dot.vx;
//                     dot.vy = dot.vy;
//                 }
//                 dot.x += dot.vx;
//                 dot.y += dot.vy;
//             }
//         },

//         line: function(){
//             for(i = 0; i < dots.nb; i++){
//                 for(j = 0; j < dots.nb; j++){
//                     i_dot = dots.array[i];
//                     j_dot = dots.array[j];

//                     if((i_dot.x - j_dot.x) < dots.distance && (i_dot.y - j_dot.y) < dots.distance && (i_dot.x - j_dot.x) > - dots.distance && (i_dot.y - j_dot.y) > - dots.distance){
//                         if((i_dot.x - mousePosition.x) < dots.d_radius && (i_dot.y - mousePosition.y) < dots.d_radius && (i_dot.x - mousePosition.x) > - dots.d_radius && (i_dot.y - mousePosition.y) > - dots.d_radius){
//                             ctx.beginPath();
//                             ctx.moveTo(i_dot.x, i_dot.y);
//                             ctx.lineTo(j_dot.x, j_dot.y);
//                             ctx.stroke();
//                             ctx.closePath();
//                         }
//                     }
//                 }
//             }
//         }
//     };

//     function createDots(){
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         for(i = 0; i < dots.nb; i++){
//             dots.array.push(new Dot());
//             dot = dots.array[i];

//             dot.create();
//         }

//         dot.line();
//         dot.animate();
//     }

//     window.onmousemove = function(parameter) {
//         mousePosition.x = parameter.pageX;
//         mousePosition.y = parameter.pageY;
//     }

//     mousePosition.x = window.innerWidth / 2;
//     mousePosition.y = window.innerHeight / 2;

//     setInterval(createDots, 1000/30);
// };

// window.onload = function() {
//     canvasDots();
// };
// Contact form validator 
$("#contactform").validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      }
    },
    submitHandler: function(form) {
      var form = $("#contactform");
      var submitButton = $("#submit");
      var response = $('#response');
      $.ajax({
        method: "POST",
        url: "//formspree.io/hello@gotoolab.com",
        data: $("#contactform").serialize(),
        dataType: "json",
  
        beforeSend: function() {
          response.text('Sending....');
        },
        success: function(data) {
          response.html('Message sent').fadeIn();
          form.trigger('reset');
        },
        error: function(e) {
          console.log(e);
          response.text('There was an error!');
        }
      });
    }
  });
// copyright year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

