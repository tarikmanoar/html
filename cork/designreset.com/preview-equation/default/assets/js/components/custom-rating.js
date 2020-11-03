function demo_func_onRate(value, star, widget){
    if (value < 3) {
        alert('Please rate as more then 3');
        return false;
    }
    alert('Good rate');
    return true;
}
function demo_func_onRated(value, star, widget){
    alert('You rated this as ' + value);
}
function demo_rating1_get_value(){
    var rating = $('#demo_rating_1').data('rating');
    alert(rating.value());
}

function demo_rating1_set_value(){
    var value = $('#new_value_for_demo_rating_1').val();
    var rating = $('#demo_rating_1').data('rating');

    if (value < 0 || value > 5) {
        alert('You can set value in range 0...5');
        return false;
    }

    rating.value(value);
}