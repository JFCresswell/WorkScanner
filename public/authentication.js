
function OnAuthenticateClick(){
    const http = new XMLHttpRequest();
    const url='http://localhost:3000/api/authentication';
    http.open("GET", url);
    http.send();
    
     http.onreadystatechange= function() {
         var result = document.getElementById("getResults");
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
