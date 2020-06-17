$(document).ready(function(){


  $('.send-message').click(function(){
    $('.plane').toggleClass('active');
    $('.phone').toggleClass('active');



    // $('.send-message').removeClass('active');
    sendMessage();

    setTimeout(function (){
      receivedMessage();
    },3000);

  });

  $('#text-add').keypress(function(event){
    if (event.which === 13) {
      sendMessage();

      setTimeout(function (){
        receivedMessage();
     },3000);

    }

  });

  function dateNow(){
    var d = new Date();
    var minutes = d.getMinutes();
    var hours = d.getHours();

    if (hours < 10){
      return '0' + hours;

    }else if (minutes < 10) {
      return '0' + minutes;
    }
    var timeIs = hours + ':' + minutes;
    var timeAdd = $ ('.time').text(timeIs);
  }

  function receivedMessage() {
    var template = $('.template > .message-template').clone();
    template.children('.text').text('Ciao');

    template.addClass('msg-received');
    var messageChat = $('.js-chat').append(template);
  }
  function sendMessage(){
    var textAdd = $('#text-add').val();
    var template = $('.template > .message-template').clone();
    var timeAdd = dateNow();
    template.children('.text').text(textAdd);
    template.children('.time').text(timeAdd);
    template.addClass('msg-send');
    var messageChat = $('.js-chat').append(template);
    $('#text-add').val('');
  }
 });
