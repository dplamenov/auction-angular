const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

function createProduct(req, res, next) {
    const form = formidable({multiples: true});

    form.parse(req, (err, fields, files) => {
        if (err) {
            return next(err.message);
        }

        const {image} = files;
        fs.rename(image.path, path.resolve('public/images', image.name), err => {
            if(err){
                return next(err.message);
            }

            res.json({fields, files});
        });
    });

}


module.exports = {createProduct};