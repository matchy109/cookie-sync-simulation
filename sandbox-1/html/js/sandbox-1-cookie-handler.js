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

window.onload = function() {
  var xhr = new XMLHttpRequest();

  setCookie('cookie-sync', Math.random().toString(36).slice(-10), 7)
  target = document.getElementById("sandbox-1-cookie");
  target.innerHTML = document.cookie.split("=")[1];

  xhr.open("GET", "http://www.sandbox-2.com/cookie-sync", true);
  xhr.withCredentials = true;
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
      var data = xhr.responseText;
      target = document.getElementById("sandbox-2-cookie");
      target.innerHTML = data.split("=")[1];
    }
  }
  xhr.send();
}
