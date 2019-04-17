//  smooth scroll for the whole website scrolling experience
// $(document).ready(function() {
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {
  
//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();
  
//         // Store hash
//         var hash = this.hash;
  
//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 800, function() {
  
//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         });
//       } // End if
//     });
//   });
  
// navigation menu
$(document).ready(function () {
    var scrollTop = 0;
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 100) {
            $('.bg-transparent').addClass('scrolled-nav');
        } else if (scrollTop < 100) {
            $('.bg-transparent').removeClass('scrolled-nav');
        }

    });

});
// autohide on click
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// contact form validator 
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
    submitHandler: function (form) {
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
                response.html('<i class="fas fa-check"></i> Message sent').fadeIn();
                form.trigger('reset');
              },
              error: function(e) {
                console.log(e);
                response.text('There was an error!');
            }
        });
    }
});

// get the year
document.getElementById("year").innerHTML = new Date().getFullYear();

