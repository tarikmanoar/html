$(document).ready(function () {
    // Main Navigation Tab
    $('#mainNavTab a').on('click', function (e) {
        e.preventDefault()
        $(this).tab('show');
    })
    
    // Layout Click Events
    $('#chats-tab').on('click', function (e) {
        e.preventDefault()
        $("body").removeClass("calls-tab-open friends-tab-open profile-tab-open");
        $("body").addClass("chats-tab-open");
    })
    $('#calls-tab').on('click', function (e) {
        e.preventDefault()
        $("body").removeClass("chats-tab-open friends-tab-open profile-tab-open");
        $("body").addClass("calls-tab-open");
    })
    $('#friends-tab').on('click', function (e) {
        e.preventDefault()
        $("body").removeClass("calls-tab-open chats-tab-open profile-tab-open");
        $("body").addClass("friends-tab-open");
    })
    $('#profile-tab').on('click', function (e) {
        e.preventDefault()
        $("body").removeClass("calls-tab-open friends-tab-open chats-tab-open");
        $("body").addClass("profile-tab-open");
    })

    //Chat Info
    $('[data-chat-info-toggle]').on('click', function (e) {
        e.preventDefault()
        $(".chat-info").addClass("chat-info-visible");
    })
    $('[data-chat-info-close]').on('click', function (e) {
        e.preventDefault()
        $(".chat-info").removeClass("chat-info-visible");
    })


    $('.contacts-list .contacts-link').on('click', function () {
        $(".main").addClass("main-visible");
    })
    $('.contacts-list .media-link').on('click', function () {
        $(".main").addClass("main-visible");
    })
    $('[data-profile-edit]').on('click', function () {
        $(".main").addClass("main-visible");
    })

    // Toggle chat
    $('[data-close]').on('click', function (e) {
        e.preventDefault()
        $(".main").removeClass("main-visible");
    })

    //Popup Gallery
    $('.chat-content').magnificPopup({
        delegate: 'a.popup-media',
        type: 'image',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        }
    });
      
    //Chat Dropdown Filter
    $('[data-chat-filter]').on('click', function () {
        let selectedOption = $(this).data('select');
        $('[data-chat-filter-list]').text($(this).text());
        if (selectedOption === 'all-chats') {
          $('[data-chat-list]').find('li').each(function () {
            $(this).show();
          });
        } else {
          $('[data-chat-list]').find('li').each(function () {
            $(this).hide();
          });
          $('[data-chat-list] li.' + selectedOption).show();
        }
    });
    
    //Call Dropdown Filter
    $('[data-call-filter]').on('click', function () {
        let selectedOption = $(this).data('select');
        $('[data-call-filter-list]').text($(this).text());
        if (selectedOption === 'all-calls') {
          $('[data-call-list]').find('li').each(function () {
            $(this).show();
          });
        } else {
          $('[data-call-list]').find('li').each(function () {
            $(this).hide();
          });
          $('[data-call-list] li.' + selectedOption).show();
        }
    });

    // Create Group
    $('#createGroup').modalSteps({
        btnNextHtml: "Next",
        btnLastStepHtml: "Finish",
        disableNextButton: false,
        completeCallback: function () {},
        callbacks: {},
        getTitleAndStep: function () {}
    });

    // File Input
    $(document).on('change', '.custom-file-input', function (event) {
        $(this).next('.custom-file-label').html(event.target.files[0].name);
    })

    
    // SVG File Inject
    SVGInject(document.getElementsByClassName('injectable'));


    //Toggle Appbar
    $('#appNavTab .nav-link').on('click', function () {
        $(".backdrop").addClass("backdrop-visible");
        $(".appnavbar-content").addClass("appnavbar-content-visible");
        $("#appNavTab .nav-link").removeClass("active");
        $(".chat-info").removeClass("chat-info-visible");
    })

    //Backdrop
    $('.backdrop').on('click', function () {
        $(".backdrop").removeClass("backdrop-visible");
        $(".appnavbar-content").removeClass("appnavbar-content-visible");
        $("#appNavTab .nav-link").removeClass("active");
    })

    //App Closer
    $('[data-apps-close]').on('click', function (e) {
        e.preventDefault()
        $("body").removeClass("apps-visible");
        $(".appbar").toggleClass("appbar-hidden");
        $(".backdrop").removeClass("backdrop-visible");
    })

    // Appbar toggler
    $('[data-toggle-appbar]').on('click', function (e) {
        e.preventDefault()
        $(".appbar").removeClass("appbar-hidden");
        $(".backdrop").addClass("backdrop-visible");
    })

    // Appcontent Close
    $('[data-appcontent-close]').on('click', function (e) {
        e.preventDefault()
        $(".backdrop").removeClass("backdrop-visible");
        $(".appnavbar-content").removeClass("appnavbar-content-visible");
        $("#appNavTab .nav-link").removeClass("active");
    })

    
    // Todo task done
    $('.todo-item input[type="checkbox"]').click(function () {
        if ($(this).is(":checked")) {
            $(this).parents('.todo-item').addClass('todo-task-done');
        } else if ($(this).is(":not(:checked)")) {
            $(this).parents('.todo-item').removeClass('todo-task-done');
        }
    });

    // Responsive media query to remove appbar in smaller screen on initial load & resize
    function checkSize(){
        if ($(window).width() <= 1200){	
            $(".appbar").addClass("appbar-hidden");
        } else{
            $(".appbar").removeClass("appbar-hidden");
        }
    }
    checkSize();
    $(window).resize(checkSize);


    // Emojione Area
    $("#messageInput").emojioneArea();

});


