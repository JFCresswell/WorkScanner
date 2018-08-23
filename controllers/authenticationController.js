
var tokens = [];

var authenticationController = function(){

    var post = function(req, res){
        
        var payload = req.body;
        var token = '';

        if (payload.authentication_request === "hash_add_from_password"){
            token = simpleHash(payload.uid + payload.pwd);

            tokens.push(token);
            payload.token = token;
        }
        else if (payload.authentication_request === 'hash_add_from_clientid'){
            token = simpleHash(payload.clientid + payload.clientname +
                payload.servername);

            tokens.push(token);
            payload.token = token;

        }
        else if (payload.authentication_request === "verify_token"){
            token = parseInt(payload.token_in);

            payload.token_verified = tokens.indexOf(token) != -1 ? true : false;
        }

        res.status(200).send(JSON.stringify(payload));
    }

    var get = function(req,res){

        res.status(200).send({'result': 'retrieved authentication parms'});
     }

    return {
        post: post,
        get:get
    }
}

var simpleHash = function (str){
  var hash = 0, i, chr;
 
  for (i = 0; i < str.length; i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }

  return hash;
}

module.exports = authenticationController;