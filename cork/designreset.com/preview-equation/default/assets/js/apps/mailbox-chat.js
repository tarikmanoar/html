(function() {
  var Message;

  Message = function(arg) {
    this.text = arg.text, this.message_side = arg.message_side;
    this.draw = (function(_this) {
      return function() {
        var $message;
        $message = $($('.message_template').clone().html());
        $message.addClass(_this.message_side).find('.text').html(_this.text);
        $('.chat-messages').append($message);
        return setTimeout(function() {
          return $message.addClass('appeared');
        }, 0);
      };
    })(this);
    return this;
  };

  $(function() {
    var getMessageText, message_side, sendMessage;
    message_side = 'right';
    getMessageText = function() {
      var $message_input;
      $message_input = $('.message_input');
      return $message_input.val();
    };
    sendMessage = function(text) {
      var $messages, message;
      if (text.trim() === '') {
        return;
      }
      $('.message_input').val('');
      $messages = $('.chat-messages');
      message_side = message_side === 'left' ? 'right' : 'left';
      message = new Message({
        text: text,
        message_side: message_side
      });
      message.draw();
      return $messages.animate({
        scrollTop: $messages.prop('scrollHeight')
      }, 300);
    };
    $('.send_message').click(function(e) {
      return sendMessage(getMessageText());
    });
    $('.message_input').keyup(function(e) {
      if (e.which === 13) {
        return sendMessage(getMessageText());
      }
    });
    sendMessage('Hello Marry! :)');
    setTimeout(function() {
      return sendMessage('Hi John! How are you?');
    }, 1000);
    setTimeout(function() {
      return sendMessage('I\'m fine and u');
    }, 2000);
    setTimeout(function() {
      return sendMessage('Me too');
    }, 3000);
    setTimeout(function() {
      return sendMessage('How is the project coming along?');
    }, 4000);

    setTimeout(function() {
      return sendMessage('Project has been already finished and I have results to show you.');
    }, 4000);

    setTimeout(function() {
      return sendMessage('Have you faced any problems at the last phase of the project?');
    }, 4000);

    setTimeout(function() {
      return sendMessage('Actually everything was fine. I\'m very excited to show this to our team.');
    }, 4000);

  });

}).call(this);