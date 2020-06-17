
 var d = new Date();
 var minutes = d.getMinutes();
 var hours = d.getHours();
 console.log(hours);
 console.log(minutes);

$(document).ready(function(){

  $('.plane').click(function(){
    $(this).toggle();
    $('.phone').toggle();
    var textAdd = $('#text-add').val();
    console.log(textAdd);
    var timeAdd = $ ('#time').text(hours, minutes);
    console.log(timeAdd);
    var template = $('.template > .message-template').clone();
    console.log(template);


    template.children('span').text(textAdd);
    template.children('#time').text(timeAdd);


    // $('p').text(hours);
    // console.log(hours);

    template.children('#time').text(timeAdd);
    template.addClass('msg-right green');

    var messageChat = $('.js-chat').append(template);
    $('#text-add').val('');

    setTimeout(function (){
      var template = $('.template > .message-template').clone();
      template.children('span').text('Ciao');

      //template.children('p').text(timeAdd);
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
      var timeAdd = $ ('#time').text(hours);
      template.children('span').text(textAdd);
      template.children('#time').text(timeAdd);
      template.addClass('msg-right green');
      var messageChat = $('.js-chat').append(template);
      $('#text-add').val('');

      setTimeout(function (){
       var template = $('.template > .message-template').clone();
       template.children('span').text('Ciao');

       template.addClass('msg-left white');
       var messageChat = $('.js-chat').append(template);


     },3000);

    }

  });


});
