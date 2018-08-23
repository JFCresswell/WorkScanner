
const url='http://localhost:3000/api/authentication';

function OnAuthenticatePasswordClick(){
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    
    var payload = {};
    payload.authentication_request ="hash_add_from_password";

    payload.uid = document.getElementById('uid').value;
    payload.pwd = document.getElementById('pwd').value;

    var json = JSON.stringify(payload);

    http.send(json);
 
    http.onload = function () {
        var result = document.getElementById("postResults");
        result.innerText = http.responseText.length > 0 
                            ? http.responseText : result.innerText;
    }
    // can't do this yet as ECMAScript 6 not supported yet in our
    // Chromium

    // fetch(url)
    // .then(function(response) {
    //     return response.json();
    // })
    // .then(function(myJson) {
    //     document.getElementById('getResults').innerHTML =
    //         JSON.stringify(myJson);
    // });
}

function OnAuthenticateClientIDClick(){
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    
    var payload = {};
    payload.authentication_request ="hash_add_from_clientid";

    payload.clientid = document.getElementById('clientid').value;
    payload.clientname = document.getElementById('clientname').value;
    payload.servername = document.getElementById('servername').value;
    
    var json = JSON.stringify(payload);

    http.send(json);
 
    http.onload = function () {
        var result = document.getElementById("postResults");
        result.innerText = http.responseText.length > 0 
                            ? http.responseText : result.innerText;
    }
    
}

function OnVerifyTokenClick(){
    const http = new XMLHttpRequest();
    http.open("POST", url, true);
    http.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    
    var payload = {};
    payload.authentication_request ="verify_token";

    payload.token_in = document.getElementById('token').value;
 
    var json = JSON.stringify(payload);

    http.send(json);
 
    http.onload = function () {
        var result = document.getElementById("postResults");
        result.innerText = http.responseText.length > 0 
                            ? http.responseText : result.innerText;
    }
}

