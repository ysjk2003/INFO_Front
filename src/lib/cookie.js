function setCookie(name, value, exp) {
    let expires = '';
    if (exp) {
        let date = new Date();
        date = date.setTime(date.getTime() + exp*24*60*60*1000);
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + ';expires=' + expires + ';path=/';
}

function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
}

export { setCookie, getCookie, deleteCookie };