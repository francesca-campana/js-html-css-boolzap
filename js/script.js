$(document).ready(function(){


  $('.plane').click(function(){
    var textAdd = $('#text-add').val();
    console.log(textAdd);
    var template = $('.template > .message-template').clone();
    console.log(template);
    template.children('span').text(textAdd);
    template.addClass('msg-right');
    var messageChat = $('.js-chat').append(template);




  });
  setTimeout(function (){
    var template = $('.template > .message-template').clone();
    template.children('span').text('Ciao');
    template.addClass('msg-left, white');
    var messageChat = $('.js-chat').append(template);


  },5000);

});
