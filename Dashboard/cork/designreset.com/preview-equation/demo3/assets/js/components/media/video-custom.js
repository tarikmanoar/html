$('#link').click(function () {
    var src = 'https://www.youtube.com/embed/YE7VzlLtp-4';
    $('#exampleModal').modal('show');
    $('<iframe>').attr({
        'src': src,
        'width': '560',
        'height': '315',
        'allow': 'encrypted-media'
    }).css('border', '0').appendTo('#exampleModal .video-container');
});

$('#exampleModal button').click(function () {
    $('#exampleModal iframe').removeAttr('src');
});