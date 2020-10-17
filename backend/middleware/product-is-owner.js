const User = require('../models/user');

function isOwner(){
    return function (req, res, next){
        const {id: productId} = req.params;
        console.log(productId);
    }
}


module.exports = isOwner;
