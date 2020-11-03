// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('simple-example');
    var invalid = $('.simple-example .invalid-feedback');
    // var btn = document.getElementsByClassName("submit-fn");
 
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          // console.log('slfkj')
            invalid.css('display', 'block');
        } else {

            invalid.css('display', 'none');

            form.classList.add('was-validated');
            // console.log('lssjkl')
        }
      }, false);
    });

  }, false);

  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('email');
    var invalid = $('.email .invalid-feedback');
    // var btn = document.getElementByClassName("myBtn");

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          // console.log('slfkj')
            invalid.css('display', 'block');
        } else {
            invalid.css('display', 'none');
            form.classList.add('was-validated');
            // console.log('lssjkl')
        }
      }, false);
    });
  }, false);


    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('select');
    var invalid = $('.select .invalid-feedback');

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          // console.log('slfkj')
            invalid.css('display', 'block');
        } else {
            invalid.css('display', 'none');
            form.classList.add('was-validated');
            // console.log('lssjkl')
        }
      }, false);
    });
  }, false);

})();