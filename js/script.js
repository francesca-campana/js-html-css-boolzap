$(document).ready(function(){

  $('.plane').click(function(){
    $(this).addClass('active');
    $('.phone').removeClass('active');
    var textAdd = $('#text-add').val();
    console.log(textAdd);
    var template = $('.template > .message-template').clone();
    console.log(template);
    template.children('span').text(textAdd);
    template.addClass('msg-right green');
    var messageChat = $('.js-chat').append(template);
    $('#text-add').val('');

    setTimeout(function (){
      var template = $('.template > .message-template').clone();
      template.children('span').text('Ciao');
      template.addClass('msg-left white');
      var messageChat = $('.js-chat').append(template);


    },3000);

  });
  
  $('#text-add').keypress(function(event){
    if (event.which === 13) {
      var textAdd = $('#text-add').val();
      console.log(textAdd);
      var template = $('.template > .message-template').clone();
      console.log(template);
      template.children('span').text(textAdd);
      template.addClass('msg-right green');
      var messageChat = $('.js-chat').append(template);
      $('#text-add').val('');

      setTimeout(function (){
       var template = $('.template > .message-template').clone();
       template.children('span').text('Ciao');
       template.addClass('msg-left white');
       var messageChat = $('.js-chat').append(template);


      },5000);

    }

  });


});
