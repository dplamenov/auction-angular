const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const Product = require('../models/product');
const {getUserId} = require('../auth');

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

            const product = {
                title: fields.title,
                description: fields.description,
                creator: getUserId(req),
                imageName: image.name
            };

            Product.create(product)
                .then(res.json.bind(res))
                .catch(next);
        });
    });

}


module.exports = {createProduct};