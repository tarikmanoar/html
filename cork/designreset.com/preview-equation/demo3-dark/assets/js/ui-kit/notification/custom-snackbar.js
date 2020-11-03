// Default

$('.default').click(function() {
   Snackbar.show({text: 'Example notification text.', duration: 100000});
});

// Position

$('.top-left').click(function() {
    Snackbar.show({
        text: 'Example notification text.',
        pos: 'top-left'
    });
});

$('.top-center').click(function() {
    Snackbar.show({
        text: 'Example notification text.',
        pos: 'top-center'
    });
});

$('.top-right').click(function() {
    Snackbar.show({
        text: 'Example notification text.',
        pos: 'top-right'
    });
});

$('.bottom-left').click(function() {
    Snackbar.show({
        text: 'Example notification text.',
        pos: 'bottom-left'
    });
});

$('.bottom-center').click(function() {
    Snackbar.show({
        text: 'Example notification text.',
        pos: 'bottom-center'
    });
});

$('.bottom-right').click(function() {
    Snackbar.show({
        text: 'Example notification text.',
        pos: 'bottom-right'
    });
});


// Action Button

$('.no-action').click(function() {
    Snackbar.show({
        showAction: false
    });
});


// Action Text

$('.action-text').click(function() {
    Snackbar.show({
        actionText: 'Thanks!'
    });
});


// Text Color

$('.text-color').click(function() {
    Snackbar.show({
        actionTextColor: '#e9b02b',
    });
});


// Click Callback

$('.click-callback').click(function() {
    Snackbar.show({
        text: 'Custom callback when action button is clicked.',
        width: 'auto',
        onActionClick: function(element) {
            //Set opacity of element to 0 to close Snackbar 
            $(element).css('opacity', 0);
            Snackbar.show({
                text: 'Thanks for clicking the  <strong>Dismiss</strong>  button!',
                showActionButton: false
            });
        }
    });
});


// Duration

$('.duration').click(function() {
    Snackbar.show({
        text: 'Duration set to 5s',
        duration: 5000,
    });
});


// Custom Background

$('.snackbar-bg-primary').click(function() {
    Snackbar.show({
        text: 'Primary',
        actionTextColor: '#fff',
        backgroundColor: '#1a73e9'
    });
});

$('.snackbar-bg-info').click(function() {
    Snackbar.show({
        text: 'Info',
        actionTextColor: '#fff',
        backgroundColor: '#00b1f4'
    });
});

$('.snackbar-bg-success').click(function() {
    Snackbar.show({
        text: 'Success',
        actionTextColor: '#fff',
        backgroundColor: '#1abc9c'
    });
});

$('.snackbar-bg-warning').click(function() {
    Snackbar.show({
        text: 'Warning',
        actionTextColor: '#fff',
        backgroundColor: '#e9b02b'
    });
});

$('.snackbar-bg-danger').click(function() {
    Snackbar.show({
        text: 'Danger',
        actionTextColor: '#fff',
        backgroundColor: '#e7515a'
    });
});

$('.snackbar-bg-dark').click(function() {
    Snackbar.show({
        text: 'Dark',
        actionTextColor: '#fff',
        backgroundColor: '#4f5163'
    });
});


// Custom Text

$('.snackbar-txt-primary').click(function() {
    Snackbar.show({
        text: 'Primary',
        textColor: '#1a73e9',
        actionTextColor: '#1a73e9',
        backgroundColor: '#fff'
    });
});

$('.snackbar-txt-info').click(function() {
    Snackbar.show({
        text: 'Info',
        textColor: '#00b1f4',
        actionTextColor: '#00b1f4',
        backgroundColor: '#fff'
    });
});

$('.snackbar-txt-success').click(function() {
    Snackbar.show({
        text: 'Success',
        textColor: '#1abc9c',
        actionTextColor: '#1abc9c',
        backgroundColor: '#fff'
    });
});

$('.snackbar-txt-warning').click(function() {
    Snackbar.show({
        text: 'Warning',
        textColor: '#e9b02b',
        actionTextColor: '#e9b02b',
        backgroundColor: '#fff'
    });
});

$('.snackbar-txt-danger').click(function() {
    Snackbar.show({
        text: 'Danger',
        textColor: '#e7515a',
        actionTextColor: '#e7515a',
        backgroundColor: '#fff'
    });
});

$('.snackbar-txt-dark').click(function() {
    Snackbar.show({
        text: 'Dark',
        textColor: '#4f5163',
        actionTextColor: '#4f5163',
        backgroundColor: '#fff'
    });
});
