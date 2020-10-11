const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const Product = require('../models/product');

function createProduct(req, res, next) {
    const form = formidable({multiples: true});

    form.parse(req, (err, fields, files) => {
        if (err) {
            return next(err.message);
        }

        const {image} = files;
        const newPath = path.resolve('public/images', image.name);
        fs.rename(image.path, newPath, err => {
            if (err) {
                return next(err.message);
            }

            const result = {
                imageName: image.name
            };

            Product.create()

            res.json({fields, files, result});
        });
    });

}


module.exports = {createProduct};