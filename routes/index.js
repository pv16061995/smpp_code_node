
const express = require('express');
// const multer = require('multer');
const router = express.Router();
// const cronRoute = require('./cron');
// const fileRoute = require('./file');
// const cronRoute = require('./cron');
// const downloadRoute = require('./download');

// const storage  = require("../lib/customFunction");


// router.use('/cron', cronRoute);

// const upload = multer({ storage })

// router.use("/file", upload.single('file'), async (req, res, next) => {
//     const file = req.file
//     if (!file)
//         res.status(400).json({ statusCode: 400, success: false, message: "Please upload valid file!", data: {} });
//     req.file = file;
//     next();
// });

// router.use('/file/getFileData', fileRoute);
// router.use('/storeContact', fileRoute);
// router.use('/sms', cronRoute);
// router.use('/download',downloadRoute);



module.exports = router;