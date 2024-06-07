const express = require('express');
const multer = require('multer');
const authMiddleware = require('../middleware');
const router = express.Router();


const upload = multer({ dest: 'uploads/' });

// Handle file upload
router.post('/upload/:id',authMiddleware, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    
    // Create a new instance of Image model
    const newImage = new Image({
      filename: req.file.filename,
      path: req.file.path // You may want to store this path in MongoDB
    });

    // Save the image to MongoDB
    const savedImage = await newImage.save();

    res.status(200).json({ message: 'File uploaded successfully', image: savedImage });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;