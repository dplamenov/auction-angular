const formidable = require('formidable');
const fs = require('fs');
const path = require('path');

function createProduct(req, res) {
    const form = formidable({multiples: true});

    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log(err);
        }

        const {image} = files;
        fs.rename(image.path, path.resolve('public/images', image.name), err => {
            console.log(err)
        });
        res.json({fields, files});
    });

}


module.exports = {createProduct};