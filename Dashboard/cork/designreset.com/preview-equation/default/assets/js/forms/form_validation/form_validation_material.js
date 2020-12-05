function no_submit(){
    return false;
}

function notifyOnErrorInput(input){
    var message = input.data('validateHint');
    $.Notify({
        caption: 'Error',
        content: message,
        type: 'alert'
    });
}
function submit(form){
    console.log(form);
    return true;
}