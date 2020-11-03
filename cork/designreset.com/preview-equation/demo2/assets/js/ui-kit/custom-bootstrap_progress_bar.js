// Event Progress Bar       ( Custom Script )

 var interval1;
function runPB1(){
    clearInterval(interval1);
    var pb = $("#pb1").data('progress');
    var val = 0;
    interval1 = setInterval(function(){
        val += 1;
        pb.set(val);
        if (val >= 100) {
            val = 0;
            clearInterval(interval1);
        }
    }, 100);
}

function flashPB1(){
    clearInterval(interval1);
    var pb = $("#pb1").data('progress');
    pb.set(0);
}

function stopPB1(){
    clearInterval(interval1);
}
var interval2;
function runPB2(){
    clearInterval(interval2);
    var pb = $("#pb2").data('progress');
    var val = 0;
    interval2 = setInterval(function(){
        val += 2;
        pb.set(val);
        if (val >= 100) {
            val = 0;
            clearInterval(interval2);
        }
    }, 100);
}

function flashPB2(){
    clearInterval(interval2);
    var pb = $("#pb2").data('progress');
    pb.set(0);
}

function stopPB2(){
    clearInterval(interval2);
}

// Progressbar.js       ( Custom Script )

// Line Progressbars

var bar = new ProgressBar.Line('#basic-line', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#e95f2b',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}
});

bar.animate(1.0);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Line('#line-percent', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#25d5e4',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      // Text color.
      // Default: same as stroke color (options.color)
      color: '#000',
      position: 'absolute',
      right: '0',
      top: '18px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: function (state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Line('#line-color-animation', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#000',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#ffbb44'},
  to: {color: '##816cfd'},
  step: function (state, bar) {
    bar.path.setAttribute('stroke', state.color);
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0


// Circle Progressbar

var bar = new ProgressBar.Circle('#basic-circle', {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#07e0c4',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(1.0);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#bounce-easing', {
  color: '#ee3d50',
  trailColor: '#eee',
  trailWidth: 1,
  duration: 1400,
  easing: 'bounce',
  strokeWidth: 6,
  from: {color: '#FFEA82', a:0},
  to: {color: '#ee3d50', a:1},
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
  }
});

bar.animate(1.0);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#multi-property', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 3,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#3232b7', width: 3 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
;
bar.text.style.fontSize = '1rem';

bar.animate(1.0);  // Number from 0.0 to 1.0


// Semi Circle Progressbar

var bar = new ProgressBar.SemiCircle('#basic-semicircle', {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#ffbb44',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(1.0);  // Number from 0.0 to 1.0


var bar = new ProgressBar.SemiCircle('#semi-c-container', {
  strokeWidth: 6,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  svgStyle: null,
  text: {
    value: '',
  },
  from: {color: '#FFEA82'},
  to: {color: '#8ac148'},
  // Set default step function for all animate calls
  step: function (state, bar) {
    bar.path.setAttribute('stroke', state.color);
    var value = Math.round(bar.value() * 100);
    if (value === 0) {
      bar.setText('');
    } else {
      bar.setText(value);
    }
    bar.text.style.color = state.color;
  }
});
bar.text.style.fontSize = '1rem';

bar.animate(1.0);  // Number from 0.0 to 1.0


// Custom Progressbar

var bar = new ProgressBar.Path('#heart-path', {
  easing: 'easeInOut',
  duration: 1400
});

bar.set(0);
bar.animate(1.0);  // Number from 0.0 to 1.0
