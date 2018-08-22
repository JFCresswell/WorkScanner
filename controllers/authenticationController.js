
var authenticationController = function(){

    var post = function(req, res){
        
        var payload = req.body;
        //res.status(200).send({'result': 'posted json: '});
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

module.exports = authenticationController;