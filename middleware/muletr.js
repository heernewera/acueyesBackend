const multer = require('multer');
const path = require('path');
const fs = require('fs');
const imgpath = path.join('upload');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '..', imgpath));
    },
    filename: (req, file, cb) => {
        // cb(null, file.fieldname+'_'+Date.now());
        const uniqueSuffix = Date.now() + '-' + path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
})



const imgupload = multer({ storage: storage }).single('image');
module.exports = imgupload;
