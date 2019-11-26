const express = require('express');
const router = express.Router();

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 100000
  }
});

router.post('/file', upload.single('upfile'), (req, res, next) => {
  console.log("The postfiles route is connected.")
  res.json({
    message0: "The postfiles route is connected.",
    filename: req.file.originalname,
    filesize: req.file.size
  })
});

module.exports = router;