function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  let nameEQ = name + "=";
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) == " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) == 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

document
  .getElementById("cookieForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let days = document.getElementById("days").value;
    setCookie("name", name, days);
    setCookie("age", age, days);
    document.write("Name: " + getCookie("name") + "<br>");
    document.write("Age: " + getCookie("age"));
  });
