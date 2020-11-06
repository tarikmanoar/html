jQuery(document).ready(function () {
    jQuery('.tw-coming-soon').each(function(){
        var currCountDown=jQuery(this);
        var $years   = parseInt(currCountDown.data('years')  , 10);
        var $months  = parseInt(currCountDown.data('months') , 10);
        var $days    = parseInt(currCountDown.data('days')   , 10);
        var $hours   = parseInt(currCountDown.data('hours')  , 10);
        var $minutes = parseInt(currCountDown.data('minutes'), 10);
        var $seconds = parseInt(currCountDown.data('seconds'), 10);
        var twCountInt=setInterval(function(){
            var $endDate = new Date($years, $months, $days, $hours, $minutes, $seconds, 00);
            var $thisDate  = new Date();
            $thisDate  = new Date($thisDate.getFullYear(), $thisDate.getMonth() + 1, $thisDate.getDate(), $thisDate.getHours(), $thisDate.getMinutes(), $thisDate.getSeconds(), 00, 00);

            var $daysLeft    = parseInt(($endDate-$thisDate)/86400000, 10);
            var $hoursLeft   = parseInt(($endDate-$thisDate)/3600000 , 10); 
            var $minutsLeft  = parseInt(($endDate-$thisDate)/60000   , 10);
            var $secondsLeft = parseInt(($endDate-$thisDate)/1000    , 10);

            var $prSeconds = $minutsLeft*60;
            $prSeconds = $secondsLeft-$prSeconds;

            var $prMinutes = $hoursLeft*60;
            var $prMinutes = $minutsLeft-$prMinutes;

            var $prHours = $daysLeft*24;
            $prHours = ($hoursLeft-$prHours) < 0 ? 0 : $hoursLeft-$prHours;

            var $prDays = $daysLeft;

            jQuery('>.days>.count'   ,currCountDown).text($prDays);
            jQuery('>.hours>.count'  ,currCountDown).text($prHours);
            jQuery('>.minutes>.count',currCountDown).text($prMinutes);
            jQuery('>.seconds>.count',currCountDown).text($prSeconds);
            if($thisDate>=$endDate){clearInterval(twCountInt);}
        },1000);
    });
});