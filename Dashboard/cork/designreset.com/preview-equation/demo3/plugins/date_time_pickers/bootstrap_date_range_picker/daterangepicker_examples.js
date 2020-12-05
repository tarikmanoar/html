  // Date Range Picker

            $('input[name="daterange1"]').daterangepicker({
                // drops: 'up'
            });

            // Date and Time

            $('input[name="daterange2"]').daterangepicker({
                timePicker: true,
                timePickerIncrement: 30,
                locale: {
                    format: 'MM/DD/YYYY h:mm A'
                },
                // drops: 'up'
            });

            // Single Date Picker

            $('input[name="birthdate"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                // drops: 'up'
            }, 
            function(start, end, label) {
                var years = moment().diff(start, 'years');
                alert("You are " + years + " years old.");
            });


            // Input Initially Empty

             $('input[name="datefilter"]').daterangepicker({
                  autoUpdateInput: false,
                  locale: {
                      cancelLabel: 'Clear'
                  }
              });

              $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
                  $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
              });

              $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
                  $(this).val('');
              });


              // Predefined Ranges

              var start = moment().subtract(29, 'days');
                var end = moment();

                function cb(start, end) {
                    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                }

                $('#reportrange').daterangepicker({
                    startDate: start,
                    endDate: end,
                    ranges: {
                       'Today': [moment(), moment()],
                       'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                       'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                       'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                       'This Month': [moment().startOf('month'), moment().endOf('month')],
                       'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    }
                }, cb);

                cb(start, end);

                // Day Limit

                $('input[name="daylimit"]').daterangepicker({
                    dateLimit: {
                        "days": 7
                    },
                    opens: 'left',
                    startDate: "04/18/2017",
                    endDate: "04/24/2017"
                 });



                // Configuration Builder

                 $('#config-text').keyup(function() {
                      eval($(this).val());
                    });
                    
                    $('.configurator input, .configurator select').change(function() {
                      updateConfig();
                    });

                    $('.demo i').click(function() {
                      $(this).parent().find('input').click();
                    });

                    $('#startDate').daterangepicker({
                      singleDatePicker: true,
                      startDate: moment().subtract(6, 'days')
                    });

                    $('#endDate').daterangepicker({
                      singleDatePicker: true,
                      startDate: moment()
                    });

                    updateConfig();

                    function updateConfig() {
                      var options = {};

                      if ($('#singleDatePicker').is(':checked'))
                        options.singleDatePicker = true;
                      
                      if ($('#showDropdowns').is(':checked'))
                        options.showDropdowns = true;

                      if ($('#showWeekNumbers').is(':checked'))
                        options.showWeekNumbers = true;

                      if ($('#showISOWeekNumbers').is(':checked'))
                        options.showISOWeekNumbers = true;

                      if ($('#timePicker').is(':checked'))
                        options.timePicker = true;
                      
                      if ($('#timePicker24Hour').is(':checked'))
                        options.timePicker24Hour = true;

                      if ($('#timePickerIncrement').val().length && $('#timePickerIncrement').val() != 1)
                        options.timePickerIncrement = parseInt($('#timePickerIncrement').val(), 10);

                      if ($('#timePickerSeconds').is(':checked'))
                        options.timePickerSeconds = true;
                      
                      if ($('#autoApply').is(':checked'))
                        options.autoApply = true;

                      if ($('#dateLimit').is(':checked'))
                        options.dateLimit = { days: 7 };

                      if ($('#ranges').is(':checked')) {
                        options.ranges = {
                          'Today': [moment(), moment()],
                          'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                          'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                          'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                          'This Month': [moment().startOf('month'), moment().endOf('month')],
                          'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                        };
                      }

                      if ($('#locale').is(':checked')) {
                        $('.rtl-wrap').show();
                        options.locale = {
                          direction: $('.rtl-wrap').is(':checked') ? 'rtl' : 'ltr',
                          format: 'MM/DD/YYYY HH:mm',
                          separator: ' - ',
                          applyLabel: 'Apply',
                          cancelLabel: 'Cancel',
                          fromLabel: 'From',
                          toLabel: 'To',
                          customRangeLabel: 'Custom',
                          daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
                          monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                          firstDay: 1
                        };
                      } else {
                        $('.rtl-wrap').hide();
                      }

                      if (!$('#linkedCalendars').is(':checked'))
                        options.linkedCalendars = false;

                      if (!$('#autoUpdateInput').is(':checked'))
                        options.autoUpdateInput = false;

                      if (!$('#showCustomRangeLabel').is(':checked'))
                        options.showCustomRangeLabel = false;

                      if ($('#alwaysShowCalendars').is(':checked'))
                        options.alwaysShowCalendars = true;

                      if ($('#parentEl').val().length)
                        options.parentEl = $('#parentEl').val();

                      if ($('#startDate').val().length) 
                        options.startDate = $('#startDate').val();

                      if ($('#endDate').val().length)
                        options.endDate = $('#endDate').val();
                      
                      if ($('#minDate').val().length)
                        options.minDate = $('#minDate').val();

                      if ($('#maxDate').val().length)
                        options.maxDate = $('#maxDate').val();

                      if ($('#opens').val().length && $('#opens').val() != 'right')
                        options.opens = $('#opens').val();

                      if ($('#drops').val().length && $('#drops').val() != 'down')
                        options.drops = $('#drops').val();

                      if ($('#buttonClasses').val().length && $('#buttonClasses').val() != 'btn btn-sm')
                        options.buttonClasses = $('#buttonClasses').val();

                      if ($('#applyClass').val().length && $('#applyClass').val() != 'btn-success')
                        options.applyClass = $('#applyClass').val();

                      if ($('#cancelClass').val().length && $('#cancelClass').val() != 'btn-default')
                        options.cancelClass = $('#cancelClass').val();

                      $('#config-text').val("$('#demo').daterangepicker(" + JSON.stringify(options, null, '    ') + ", function(start, end, label) {\n  console.log(\"New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')\");\n});");

                      $('#config-demo').daterangepicker(options, function(start, end, label) { console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')'); });
                      
                    }