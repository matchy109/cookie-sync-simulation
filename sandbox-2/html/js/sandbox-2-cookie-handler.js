function setCookie(name, value, expiredays){

    var path = location.pathname;
    var paths = new Array();
    paths = path.split("/");
    if(paths[paths.length-1] != ""){
        paths[paths.length-1] = "";
        path = paths.join("/");
    }

    var now        = new Date().getTime();
    var clear_time = new Date(now + (60*60*24*1000*expiredays));
    var expires    = clear_time.toUTCString();

    document.cookie = name + "=" + escape(value) + "; path=" + path + "; expires=" + expires;
}

function redirect(){
    location.href='http://www.sandbox-1.com';
}

window.onload = function() { 
	setCookie('cookie-sync', Math.random().toString(36).slice(-10), 7);
	setTimeout("redirect()", 5000);
}
