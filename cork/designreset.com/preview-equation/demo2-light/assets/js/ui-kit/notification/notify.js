function notifi(options) {

    /**
     * Set the option in this object.
     *
     * @type {object}
     */
    this.options = $.extend({
        style: 'default',
        title: '',
        message: '',
        icon: '',
        theme: null,
        timeout: null,
        close_button: true
    }, options || {});

    this.config = $.extend({
        theme: 'default'
    }, window.JSNOTIFY_CONFIG || {});

    /**
     * The id to identify the notification.
     *
     * @type {string}
     */
    this.id = "";

    /**
     * Show the notification.
     */
    this.show = function() {

        var notification = this.buildNotification();
        notification.animate({
          'right': '15px',
          'opacity': 1
        }, 500);

    };

    /**
     * Show the notification.
     */
    this.buildNotification = function() {

        var id = this.getNotificationId();
        var classes = this.getNotificationClass();
        var title = this.getNotificationTitle();
        var message = this.getNotificationMessage();
        var icon = this.getNotificationIcon();
        var timeout = this.getNotificationTimeout();
        var close_button = this.getNotificationClose();

        if(message === null) {
            console.error('Message not set in notification');
            return false;
        }

        if(title !== null) {
            title = '<span class="notify-body-title">' + title + '</span>';
        } else {
            title = '';
        }
      
        if(icon !== null) {
            icon = '<div class="notification-body-icon">' + icon + '</div>';
        } else {
            icon = '';
        }

        if(close_button === true) {
            close_button =  '<div class="notify-action-buttons">' +
                                '<a href="#" class="notify-square-button notify-close-button"></a>' +
                            '</div>';
        } else {
            close_button = '';
        }

        var html =  '<div id="' + id + '" class="' + classes + '">' +
                        '<div class="notify-body-wrapper">' +
                            '<div class="notify-body">' +
                                icon + 
                                title +
                                '<div class="notify-body-text">' +
                                  message +
                                '</div>' +
                            '</div>' +
                            close_button +
                        '</div>' +
                    '</div>';
              
        if($('#notify-holster').length === 0)
          $('body').append('<div id="notify-holster"></div>');
        
        $('#notify-holster').prepend(html);
      
        var notification = $('#' + id);
      
        notify_body = notification.find('.notify-body');
        notify_body.find('.notification-body-icon').css({
          'height': notify_body.height()
        });
      
        var self = this;
      

        if(close_button.length > 0) {

            var notify_close = notification.find('.notify-close-button');

        } else {

            var notify_close = notification;

        }

        notify_close.on('click', function(e) {

            e.preventDefault();

            self.hide();

        });

        if(timeout !== null) {
            setTimeout(function() {

                notify_close.click();

            }, timeout);
        }

        return notification;

    };


    /**
     * Hide the notification.
     */
    this.hide = function() {
      
      var notification = $('#' + this.getNotificationId());
      
      var self = this;
      
      notification.animate({
        'right': '-360px',
        'opacity': 0
      }, 500, function () {
        self.destroy();
      });
      
    };

    /**
     * Destroy the notification.
     */
    this.destroy = function() {
      
      var notification = $('#' + this.getNotificationId());
      
      notification.remove();
      
      if($('#notify-holster').children().length === 0)
        $('#notify-holster').remove();
      
    };
    
    /**
     * Get the notification icon
     *
     * returns {mixed}
     */
    this.getNotificationIcon = function () {
      
      if(this.options.icon.length === 0)
        return null;
      
      return '<i class="flaticon-' + this.options.icon + '"></i>';
      
    };

    /**
     * Get the notification close button.
     *
     * @returns {string}
     */
    this.getNotificationClose = function() {

        return this.options.close_button;

    };

    /**
     * Get the notification existance timeout.
     *
     * @returns {mixed}
     */
    this.getNotificationTimeout = function() {

       return this.options.timeout

    };

  
    /**
     * Get the notification title.
     *
     * @returns {mixed}
     */
    this.getNotificationTitle = function() {

        if(this.options.title.length === 0)
            return null;

        return this.options.title;

    };

    /**
     * Get the notification message body.
     *
     * @returns {mixed}
     */
    this.getNotificationMessage = function () {

        if(this.options.message.length === 0)
            return null;

        return this.options.message;

    };

    /**
     * Get the notification style class.
     *
     * @returns {string}
     */
    this.getNotificationClass = function() {

        var classes = 'notify notify-' + this.options.style;
      
        if(this.getNotificationIcon() !== null)
          classes = classes + ' notify-with-icon';

        if(this.options.theme === null)
            classes = classes + ' notify-theme-' + this.config.theme;
        else
            classes = classes + ' notify-theme-' + this.options.theme;
      
        return classes;

    };

    /**
     * Get this notification ID.
     *
     * @returns {string};
     */
    this.getNotificationId = function() {

        if(this.id.length === 0)
            this.id = this.makeId()

        return this.id;

    };

    /**
     * Make a random ID
     *
     * @returns {string}
     */
    this.makeId = function() {

        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for(var i=0; i < 32; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return "notifyjs-" + text;

    }
    
    return this;

}