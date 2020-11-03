var SessionTimeout=function() {
    var e=function() {
        $.sessionTimeout( {
            title:"Session Timeout Notification", 
            message:"Your session is about to expire.", 
            keepAliveUrl:"", 
            redirUrl:"user_lockscreen_1.html", 
            logoutUrl:"user_login_1.html", 
            warnAfter:3e3, 
            redirAfter:15e3, 
            ignoreUserActivity:!0, 
            countdownMessage:"Redirecting in {timer} seconds.", 
            countdownBar: !0
        }
        )
    };
    return {
        init:function() {
            e()
        }
    }
}

();
jQuery(document).ready(function() {
    SessionTimeout.init()
}
);