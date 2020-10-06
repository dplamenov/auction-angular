const formidable = require('formidable');
const fs = require('fs');

function createProduct(req, res){
    // const {title, description, image} = req.body;
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields, files) => {
        if(err){
            console.log(err);
        }

        res.json({fields, files});
    });

}


module.exports = {createProduct};