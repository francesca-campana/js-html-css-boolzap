$(document).ready(function(){
  $('.contacts li').click(function (){
    var dataContact = $(this).attr('data-contact');
    var srcImage = $(this).children('.img-avatar').children('img').attr('src');
    $('.chat-item').removeClass('visible');
    var selettore = '.chat-item[ data-chat= "' + dataContact + '"]';
    $('.js-contact-name').removeClass('selected');
    $(this).addClass('selected');
    $(selettore).addClass('visible');
    var immagineAvatar = $('.you .img-avatar').children('img').attr('src' , srcImage );
    var singolContact = $(this).find('h2').text();
    var nameAvatar = $('.you .name-avatar').children('h2').text(singolContact);

    var textAvatar =$(this).find('.stato').text();
    var statoAvatar = $('.you .name-avatar').children('span').text(textAvatar);
  });

  $(document).on('click','.arrow', function (){
     $('.arrow').not(this).siblings('.dropdown').removeClass('visible');
     $(this).siblings('.dropdown').toggleClass('visible');
  });

  $(document).on('click','.dropdown', function (){
    $(this).parents('.width-dropdown').remove();
  });

  $('#search').keyup(function (event){
    if ( event.which ) {
      searchName();
    }
  });

  $('.send-message').click(function(){
    $('.plane').toggleClass('active');
    $('.phone').toggleClass('active');
    var messageAdd = $('#text-add').val();
    if (messageAdd.length !=0) {
      sendMessage();
      $('.you .name-avatar').children('span').text('sta scrivendo...');

      setTimeout(function (){
        receivedMessage();
        $('.you .name-avatar').children('span').text('Online');
      },3000);
    }

  });

  $('#text-add').keypress(function(event){
    var messageAdd = $('#text-add').val();
    if (messageAdd.length !=0) {
      if ( event.which === 13 || event.keyCode === 13 ) {
        sendMessage();
        $('.you .name-avatar').children('span').text('sta scrivendo...');
        setTimeout(function (){
          receivedMessage();
          $('.you .name-avatar').children('span').text('Online');
       },3000);
      }
    }
  });

  function searchName(){
    var valueNameInput = $('#search').val().toLowerCase();

    if (valueNameInput.length != 0 ) {
      $('.js-contact-name').each(function (){
        var eachName = $(this).find('.singol-contact').text().toLowerCase();
        if (eachName.includes(valueNameInput)) {
          $(this).show();
        }else {
          $(this).hide();
        }
      });
    }else {
      $('.contact-name').show();
    }
  }

  function dateNow(){
    var d = new Date();
    var minutes = d.getMinutes();
    var hours = d.getHours();

    if (minutes < 10) {
      var timeIs = hours + ':' +  '0' + minutes;
      return timeIs;
    }
    var timeIs = hours + ':' +  minutes;
    return timeIs;
  }

  function receivedMessage() {
    var textAdd = $('#text-add').val();
    var template = $('.template > .message-template').clone();
    template.children('.text').text('ok');
    var timeAdd = dateNow();
    template.children('.time').text(timeAdd);

    template.addClass('msg-received');

    if ($('.js-chat').hasClass('visible')) {
     $('.js-chat.visible').append(template);
    }

    $('.js-chat').scrollTop($('.js-chat').height());
  }

  function sendMessage(){
    var textAdd = $('#text-add').val();
    if (textAdd.length != 0) {
      var template = $('.template > .message-template').clone();
      var timeAdd = dateNow();
      template.children('.text').text(textAdd);
      template.children('.time').text(timeAdd);
      template.addClass('msg-send');

      if ($('.js-chat').hasClass('visible')) {
       $('.js-chat.visible').append(template);
      }
      $('.js-chat').scrollTop($('.js-chat').height());
      $('#text-add').val('');
    }

  }
 });
