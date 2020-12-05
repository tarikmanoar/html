$(function () {
    'use strict';

    var byId = function (id) { return document.getElementById(id); }

    var editableList = byId('editable');

    function removeTasks() {
        $(".js-remove").on('click', function(event) {
            event.preventDefault();
            $(this).parent('li').remove();
            console.log('clicked');
        });
    }

    $(window).on('load', function(event) {
        event.preventDefault();
        /* Act on the event */
        removeTasks();
    });

    byId('addUser').onclick = function () {
        Ply.dialog('prompt', {
            title: 'Add',
            form: { name: 'name' },
        }).done(function (ui) {
            var el = document.createElement('li');
            el.innerHTML = ui.data.name + '<i class="js-remove">X</i>';
            editableList.appendChild(el);
            removeTasks();
            // Fix for ie 11
            $('body').css('overflow-y', 'auto');
        })
    };
});