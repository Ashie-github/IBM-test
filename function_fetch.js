function api_call() {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Access-Control-Allow-Origin", "*");

  var urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "urn:ibm:params:oauth:grant-type:apikey");
  urlencoded.append("apikey", "VXrWITZG8dZYnY7ahWdhfjrWRkPELL1mAo0HC1tHWdWI");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("https://iam.cloud.ibm.com/identity/token", requestOptions)
    .then((response) => response.text())
    // .then((result) => console.log(result))
    .then((result) => (message.innerHTML = result))
    .catch((error) => console.log("error", error));
}
