
function OnAuthenticateClick(){
    const http = new XMLHttpRequest();
    const url='http://localhost:3000/api/authentication';
    http.open("GET", url);
    http.send();
    
    http.onreadystatechange=(e)=>{
        alert(http.responseText)
    }
}
