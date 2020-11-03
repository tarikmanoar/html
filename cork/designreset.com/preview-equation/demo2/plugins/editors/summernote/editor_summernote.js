$(function() {

    // Basic editors
    // ------------------------------

    // Default initialization
    $('.summernote').summernote();


    // Control editor height
    $('.summernote-height').summernote({
        height: 400
    });


    // Click to edit
    // ------------------------------

    // Edit
    $('#edit').on('click', function() {
        $('.click2edit').summernote({focus: true});
    })

    // Save
    $('#save').on('click', function() {
        var aHTML = $('.click2edit').summernote('code'); //save HTML If you need(aHTML: array).
        console.log(aHTML);
        $('.click2edit').summernote('destroy');
    })

});
