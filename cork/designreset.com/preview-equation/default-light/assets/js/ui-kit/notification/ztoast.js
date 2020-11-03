(function ($) {
    'use strict';
    var containerId = 'ztoast-container';
    var styleId = 'ztoast-stylesheet';
    var contentClass = 'ztoast-content';
    var fadeTime = 500;
    var defaultDuration = 2000;
    var onClickClose = true;
    function createContainer() {
        return $('<div>').attr('id', containerId).appendTo('body');
    }
    function addStylesheet() {
        var css = '\n            #ztoast-container{\n       width: 100%;\n          max-width: 279px;\n              position: fixed;\n              right: 10px;\n              bottom: 0;\n              cursor: default;\n              color: #fff;\n              font-size: 14px;\n              z-index: 9999;\n              line-height: 20px;\n              font-family: \'Roboto\', \'Open sans\', arial, sans-serif;\n            }\n            .ztoast-content{\n              padding: 14px 10px;\n              margin-bottom: 10px;\n              background: #888ea8;\n              border-radius: 2px;\n              box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n            }';
        $('<style>').attr('id', styleId).text(css).appendTo('head');
    }
    function isStylesheetAdded() {
        return !!$('#' + styleId).length;
    }
    function getContainer() {
        var container = $('#' + containerId);
        if (!isStylesheetAdded()) {
            addStylesheet();
        }
        if (!container.length) {
            return createContainer();
        } else {
            return container;
        }
    }
    function createToast(text) {
        return $('<div>').addClass(contentClass).text(text);
    }
    function showToast(text, duration) {
        var toast = createToast(text);
        var container = getContainer();
        duration = duration || defaultDuration;
        toast.css('display', 'none').appendTo(container);
        var closeToast = function closeToast() {
            closeAndRemoveToast(toast);
        };
        var timeout = void 0;
        toast.fadeIn(fadeTime, function () {
            timeout = setTimeout(closeToast, duration);
        });
        if (onClickClose) {
            toast.click(closeToast);
            clearTimeout(timeout);
        }
        return { close: closeToast };
    }
    function closeAndRemoveToast(toastElement) {
        toastElement.fadeOut(fadeTime, function () {
            toastElement.remove();
        });
    }
    $.toast = function () {
        showToast.apply(undefined, arguments);
    };
}(jQuery));