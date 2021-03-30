$(document).ready(function () {
  $('.btn-submit').click(function (event) {

    var name = $('.name').val();
    var email = $('.email').val();
    var subject = $('.subject').val();
    var message = $('.message').val();
    var statusElm = $('.status');

    statusElm.empty();

    if(name.length < 3){
       statusElm.append('<div>Name is not valid</div>'); 
      event.preventDefault();

    }
    if(email.length < 5 || !email.includes('@') || !email.includes('.')){
       statusElm.append('<div>Email is not valid</div>'); 
        event.preventDefault();

    }

    if(message.length < 10){
       statusElm.append('<div>Message is not valid</div>'); 
       event.preventDefault();
    }

  })
})