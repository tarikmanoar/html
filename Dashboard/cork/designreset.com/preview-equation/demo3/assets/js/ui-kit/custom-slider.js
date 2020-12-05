
function dropValueToInput(value, slider){
    $("#slider_input").val(value);
}

//      Ion RANGE SLIDER

$("#range_01").ionRangeSlider();

$("#range_02").ionRangeSlider({
    type: "double",
    grid: true,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    prefix: "$"
});

$("#range_03").ionRangeSlider({
    type: "double",
    grid: true,
    min: -1000,
    max: 1000,
    from: -500,
    to: 500
});

$("#range_04").ionRangeSlider({
    grid: true,
    from: 3,
    values: [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ]
});

$("#range_05").ionRangeSlider({
    type: "double",
    min: 0,
    max: 100,
    from: 20,
    from_min: 10,
    from_max: 30,
    from_shadow: true,
    to: 80,
    to_min: 70,
    to_max: 90,
    to_shadow: true,
    grid: true,
    grid_num: 10
});

// NO UI SLIDER
    
var html5Slider = document.getElementById('html5');

noUiSlider.create(html5Slider, {
    start: [ 10, 30 ],
    connect: true,
    tooltips: true,
    range: {
        'min': -20,
        'max': 40
    }
});

// Select field

var select = document.getElementById('input-select');

// Append the option elements

for ( var i = -20; i <= 40; i++ ){

    var option = document.createElement("option");
        option.text = i;
        option.value = i;

    select.appendChild(option);
}

// input number field

var inputNumber = document.getElementById('input-number');

html5Slider.noUiSlider.on('update', function( values, handle ) {

    var value = values[handle];

    if ( handle ) {
        inputNumber.value = value;
    } else {
        select.value = Math.round(value);
    }
});

select.addEventListener('change', function(){
    html5Slider.noUiSlider.set([this.value, null]);
});

inputNumber.addEventListener('change', function(){
    html5Slider.noUiSlider.set([null, this.value]);
});

/*--------Non linear slider----------*/

var nonLinearSlider = document.getElementById('nonlinear');

noUiSlider.create(nonLinearSlider, {
    connect: true,
    behaviour: 'tap',
    tooltips: true,
    start: [ 500, 4000 ],
    range: {
        // Starting at 500, step the value by 500,
        // until 4000 is reached. From there, step by 1000.
        'min': [ 0 ],
        '10%': [ 500, 500 ],
        '50%': [ 4000, 1000 ],
        'max': [ 10000 ]
    }
});

var nodes = [
    document.getElementById('lower-value'), // 0
    document.getElementById('upper-value')  // 1
];

// Display the slider value and how far the handle moved
// from the left edge of the slider.
nonLinearSlider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
    nodes[handle].innerHTML = values[handle] + ', ' + positions[handle].toFixed(2) + '%';
});


/*-----Locking sliders together-----*/

// setting up button clicks

// Store the locked state and slider values.

var lockedState = false,
    lockedSlider = false,
    lockedValues = [60, 80],
    slider1 = document.getElementById('slider1'),
    slider2 = document.getElementById('slider2'),
    lockButton = document.getElementById('lockbutton'),
    slider1Value = document.getElementById('slider1-span'),
    slider2Value = document.getElementById('slider2-span');

// When the button is clicked, the locked
// state is inverted.

lockButton.addEventListener('click', function(){
    lockedState = !lockedState;
    this.textContent = lockedState ? 'unlock' : 'lock';
});


// cross updating

function crossUpdate ( value, slider ) {

    // If the sliders aren't interlocked, don't
    // cross-update.
    if ( !lockedState ) return;

    // Select whether to increase or decrease
    // the other slider value.
    var a = slider1 === slider ? 0 : 1, b = a ? 0 : 1;

    // Offset the slider value.
    value -= lockedValues[b] - lockedValues[a];

    // Set the value
    slider.noUiSlider.set(value);
}

// initializing silders

noUiSlider.create(slider1, {
    start: 60,
    // Disable animation on value-setting,
    // so the sliders respond immediately.
    animate: false,
    tooltips: true,
    range: {
        min: 50,
        max: 100
    }
});

noUiSlider.create(slider2, {
    start: 80,
    animate: false,
    tooltips: true,
    range: {
        min: 50,
        max: 100
    }
});

slider1.noUiSlider.on('update', function( values, handle ){
    slider1Value.innerHTML = values[handle];
});

slider2.noUiSlider.on('update', function( values, handle ){
    slider2Value.innerHTML = values[handle];
});

// linking sliders together

function setLockedValues ( ) {
    lockedValues = [
        Number(slider1.noUiSlider.get()),
        Number(slider2.noUiSlider.get())
    ];
}

slider1.noUiSlider.on('change', setLockedValues);
slider2.noUiSlider.on('change', setLockedValues);

// The value will be send to the other slider,
// using a custom function as the serialization
// method. The function uses the global 'lockedState'
// variable to decide whether the other slider is updated.

slider1.noUiSlider.on('slide', function( values, handle ){
    crossUpdate(values[handle], slider2);
});


/* 
    =====================
    BOOTSTRAP RANGESLIDER
    =====================
*/
$('#ex1').slider({
    formatter: function(value) {
        return '$ ' + value[0] + " - " + '$ ' + value[1];
    }
});
$('#ex2').slider();