
var authenticationController = function(){

    var post = function(req, res){

        res.status(200).send('Authorized');
    }

    var get = function(req,res){

        res.status(200).send('just a placeholder');
     }

    return {
        post: post,
        get:get
    }
}

module.exports = authenticationController;