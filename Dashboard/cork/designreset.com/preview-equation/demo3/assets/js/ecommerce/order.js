var ol = $('#ecommerce-order-list').DataTable({
    "lengthMenu": [ 5, 10, 20, 50, 100 ],
    headerCallback:function(e, a, t, n, s) {
      e.getElementsByTagName("th")[0].innerHTML='<label class="new-control new-checkbox checkbox-primary m-auto">\n<input type="checkbox" class="new-control-input chk-parent select-customers-info" id="customer-all-info">\n<span class="new-control-indicator"></span><span style="visibility:hidden">c</span>\n</label>'
    },
    columnDefs:[{
        targets:0, width:"30px", className:"", orderable:!1, render:function(e, a, t, n) {
            return'<label class="new-control new-checkbox checkbox-primary  m-auto">\n<input type="checkbox" class="new-control-input child-chk select-customers-info" id="customer-all-info">\n<span class="new-control-indicator"></span><span style="visibility:hidden">c</span>\n</label>'
        }
    }],
    "language": {
        "paginate": {
          "previous": "<i class='flaticon-arrow-left-1'></i>",
          "next": "<i class='flaticon-arrow-right'></i>"
        },
        "info": "Showing page _PAGE_ of _PAGES_"
    }
});
// checkall('select-all-orders', 'select-orders');

multiCheck(ol);

var bar = new ProgressBar.Circle('#o-progress-order-placed', {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  color: '#00b1f4',
  trailColor: '#00b1f4',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(0.75);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#o-progress-preparing', {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  color: '#f8538d',
  trailColor: '#f8538d',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(0.56);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#o-progress-shipped', {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  color: '#7d56ce',
  trailColor: '#ab5bd6',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(0.41);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#o-progress-delivered', {
  strokeWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  color: '#18d17f',
  trailColor: '#41c3ac',
  trailWidth: 1,
  svgStyle: null
});

bar.animate(0.29);  // Number from 0.0 to 1.0