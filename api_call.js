function api_call() {
  
  // XML //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//   const message = document.getElementById("message");
//   var body = {
//     grant_type: "urn:ibm:params:oauth:grant-type:apikey",
//     apikey: "VXrWITZG8dZYnY7ahWdhfjrWRkPELL1mAo0HC1tHWdWI",
//   };
//   var postbody = [];
//   for (var element in body) {
//     var encodedkey = encodeURIComponent(element);
//     var encodedvalue = encodeURIComponent(body[element]);
//     postbody.push(encodedkey + "=" + encodedvalue);
//   }
//   postbody = postbody.join("&");

//   var req = new XMLHttpRequest();
//   req.open("POST", "https://iam.cloud.ibm.com/identity/token", false);
//   req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   req.setRequestHeader("Access-Control-Allow-Origin", "*");
//   req.send(postbody);
//   console.log(req)
//   if (req.status == 200) {
//     message.innerHTML = req.responseText;
//   }

  // XML POSTMAN //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // WARNING: For POST requests, body is set to null by browsers.

    var data =
      "grant_type=urn%3Aibm%3Aparams%3Aoauth%3Agrant-type%3Aapikey&apikey=VXrWITZG8dZYnY7ahWdhfjrWRkPELL1mAo0HC1tHWdWI";

    console.log(data);
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("POST", "https://iam.cloud.ibm.com/identity/token");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");

    xhr.send(data);

  
  // FETCH //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     var data =
//       "grant_type=urn%3Aibm%3Aparams%3Aoauth%3Agrant-type%3Aapikey&apikey=VXrWITZG8dZYnY7ahWdhfjrWRkPELL1mAo0HC1tHWdWI";

//     const res = await fetch("https://iam.cloud.ibm.com/identity/token", {
//       method: "POST",
//       mode: "no-cors",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: data,
//     });
//     const jsonResult = await res;
//     console.log(jsonResult);
}
