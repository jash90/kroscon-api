var express = require("express");
var router = express.Router();
const multer = require('multer');
const path = require('path');
const formidable = require('formidable')

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './image/uploads/',
  filename: function(req, file, cb){
    console.log(req.body);
    cb(null,Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('photo');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}


router.post('/', (req, res) => {
  upload(req, res, (err) => {
    console.log(req.body);
    if(err){
      res.json({
         err
      });
    } else {
      if(req.file == undefined){
        res.json({
          msg: 'Error: No File Selected!'
        });
      } else {
        console.log(req.file);
        res.json({
          msg: 'File Uploaded!',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});


module.exports = router;