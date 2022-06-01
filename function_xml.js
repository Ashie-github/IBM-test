// WARNING: For POST requests, body is set to null by browsers.
function api_call() {
  var data =
    "grant_type=urn%3Aibm%3Aparams%3Aoauth%3Agrant-type%3Aapikey&apikey=VXrWITZG8dZYnY7ahWdhfjrWRkPELL1mAo0HC1tHWdWI";

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      // console.log(this.responseText);
      message.innerHTML = this.responseText;
    }
  });

  xhr.open("POST", "https://iam.cloud.ibm.com/identity/token");
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

  xhr.send(data);
}
