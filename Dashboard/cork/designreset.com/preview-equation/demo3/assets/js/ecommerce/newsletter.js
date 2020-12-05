var bar = new ProgressBar.Circle('#n-progress-send', {
	  color: "#aaa",
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 3,
	  trailWidth: 3,
	  easing: "easeInOut",
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: "#f8538d", width: 2 },
	  to: { color: '#f8538d', width: 2 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value+"%");
	    }

	  }
	});
	;
	bar.text.style.fontSize = "1.5rem";
	bar.text.style.fontWeight = "600";
	bar.text.style.color = "#000";

	bar.animate(0.84);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#n-progress-received', {
	  color: "#aaa",
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 3,
	  trailWidth: 3,
	  easing: "easeInOut",
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: "#6156ce", width: 2 },
	  to: { color: '#6156ce', width: 3 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value+"%");
	    }

	  }
	});
	;
	bar.text.style.fontSize = "1.5rem";
	bar.text.style.fontWeight = "600";
	bar.text.style.color = "#000";

	bar.animate(0.53);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#multi-property', {
	  color: "#aaa",
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 3,
	  trailWidth: 3,
	  easing: "easeInOut",
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: "#24ccda", width: 2 },
	  to: { color: '#24ccda', width: 3 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value+"%");
	    }

	  }
	});
	;
	bar.text.style.fontSize = "1.5rem";
	bar.text.style.fontWeight = "600";
	bar.text.style.color = "#000";

	bar.animate(0.4);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle('#n-progress-success-read', {
	  color: "#aaa",
	  // This has to be the same size as the maximum width to
	  // prevent clipping
	  strokeWidth: 3,
	  trailWidth: 3,
	  easing: "easeInOut",
	  duration: 1400,
	  text: {
	    autoStyleContainer: false
	  },
	  from: { color: "#e95f2b", width: 2 },
	  to: { color: '#e95f2b', width: 3 },
	  // Set default step function for all animate calls
	  step: function(state, circle) {
	    circle.path.setAttribute('stroke', state.color);
	    circle.path.setAttribute('stroke-width', state.width);

	    var value = Math.round(circle.value() * 100);
	    if (value === 0) {
	      circle.setText('');
	    } else {
	      circle.setText(value+"%");
	    }

	  }
	});
	;
	bar.text.style.fontSize = "1.5rem";
	bar.text.style.fontWeight = "600";
	bar.text.style.color = "#000";

	bar.animate(0.19);  // Number from 0.0 to 1.0


/* Table */


$('#newsletter-report tfoot th').each( function () {
    var title = $(this).text();
    $(this).html( '<input type="text" class="form-control" placeholder="Search '+title+'" />' );
} );

// DataTable
var table = $('#newsletter-report').DataTable({
    "lengthMenu": [ 5, 10, 20, 50, 100 ],
    buttons: {
        buttons: [
            { extend: 'copy', className: 'btn btn-default btn-rounded btn-sm mb-4' },
            { extend: 'csv', className: 'btn btn-default btn-rounded btn-sm mb-4' },
            { extend: 'excel', className: 'btn btn-default btn-rounded btn-sm mb-4' },
            { extend: 'print', className: 'btn btn-default btn-rounded btn-sm mb-4' }
        ]
    },
    headerCallback:function(e, a, t, n, s) {
	    e.getElementsByTagName("th")[0].innerHTML='<label class="new-control new-checkbox checkbox-primary m-auto">\n<input type="checkbox" class="new-control-input chk-parent select-customers-info" id="customer-all-info">\n<span class="new-control-indicator"></span><span style="visibility:hidden">c</span>\n</label>'
	},
	columnDefs:[ {
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
// Apply the search
table.columns().every( function () {
    var that = this;

    $( 'input', this.footer() ).on( 'keyup change', function () {
        if ( that.search() !== this.value ) {
            that
                .search( this.value )
                .draw();
        }
    } );
} );

multiCheck(table);
