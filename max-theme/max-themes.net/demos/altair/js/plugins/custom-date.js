jQuery('#start_date, #end_date').datepicker({
    dateFormat:'yy-mm-dd',
    numberOfMonths: 1,
    onSelect: function(){
    	var myDate = new Date(this.value);
    	var myDateRaw = myDate.setDate(myDate.getDate());
    	jQuery('#'+jQuery(this).attr('id')+'_raw').attr('value', myDateRaw);
    }
});