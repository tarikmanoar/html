// Basic editors
    // ------------------------------
tinymce.init({
    selector: 'textarea.composer-editor',
    height: 600,
    menubar: false,
    statusbar: false,
    branding: false,
    auto_focus : "editor-composer",
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table contextmenu paste code'
    ],
    toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
});