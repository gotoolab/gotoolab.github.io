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

// contact form actions (require jQuery validator)
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
        url: "https://www.briskforms.com/go/fb4684c801a6bfc76ecb6d07cbe7a7ec",
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
          response.html('<i class="fas fa-check"></i> Message sent').fadeIn();
        }
      });
    }
  });

// get the year
document.getElementById("year").innerHTML = new Date().getFullYear();

