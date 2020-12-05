$(document).ready(function($) {
    //Default Action                 
    $(".tab_content").hide(); //Hide all content                 
    $("ul.tabs li:first").addClass("active").show().find("label input:radio").attr("checked", ""); //Activate first tab                 
    $(".tab_content:first").show(); //Show first tab content                  
    //On Click Event                 
    $("ul.tabs li").click(function() {
        $("ul.tabs li").removeClass("active");
        $("ul.tabs li").find("label input:radio").attr("checked", "");
        $(this).addClass("active").find("label input:radio").attr("checked", "checked");
        $(".tab_content").hide(); //Hide all tab content                     
        var activeTab = $(this).find("label input:radio").val();
        $('#' + activeTab).show();
    });
});