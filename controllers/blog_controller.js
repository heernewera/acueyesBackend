const blog = require('../models/blog_model');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { get } = require('http');
const imgpath = path.join('upload');
// const s3 = require('@aws-sdk/client-s3');


// const blogadd = async (req, res) => {
//     try {
//         const { mainHeading, Introduction, Conclusion,category, subheadings } = req.body;

//         // Check if an image was uploaded
//         if (!req.file) {
//             return res.status(400).json({ error: 'Please upload an image.' });
//         }

//         // Create a URL for the image
//         const image = `${req.protocol}://${req.get('host')}/${imgpath}/${req.file.filename}`;

//         const newBlog = new blog({
//             mainHeading,
//             Introduction,
//             Conclusion,
//             category,
//             image,
//             subheadings,
//         });

//         // Save the blog post to the database
//         const savedBlog = await newBlog.save();
//         res.status(201).json(savedBlog);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to save the blog post.' });
//     }
// }


const blogadd = async (req, res) => {
    try {
        const { mainHeading, Introduction, Conclusion, category, subheadings } = req.body;

        // Check if an image was uploaded
        if (!req.file) {
            return res.status(400).json({ error: 'Please upload an image.' });
        }

        // Create a URL for the image
        const imageUrl = `http://acueyessolutions.com/imgpath/${req.file.originalname}`;

        const newBlog = new blog({
            mainHeading,
            Introduction,
            Conclusion,
            category,
            image: imageUrl,
            subheadings,
        });

        // Save the blog post to the database
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to save the blog post.' });
    }
};


// const blogadd = async (req, res) => {
//     try {
//         const { mainHeading, Introduction, Conclusion, category, subheadings } = req.body;

//         // Check if an image was uploaded
//         if (!req.file) {
//             return res.status(400).json({ error: 'Please upload an image.' });
//         }

//         // Replace 'your-cloud-storage-base-url' with the actual base URL of your cloud storage service
//         const cloudStorageBaseUrl = 'https://your-cloud-storage-base-url';

//         // Create a URL for the image using the cloud storage base URL and the filename from req.file
//         const image = `${cloudStorageBaseUrl}/${imgpath}/${req.file.filename}`;

//         const newBlog = new blog({
//             mainHeading,
//             Introduction,
//             Conclusion,
//             category,
//             image,
//             subheadings,
//         });

//         // Save the blog post to the database
//         const savedBlog = await newBlog.save();
//         res.status(201).json(savedBlog);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Failed to save the blog post.' });
//     }
// }



const getall = async (req, res) => {
    const data = await blog.find({});
    res.status(200).json({ msg: 'blog comment', data: data })
}



module.exports = { blogadd, getall };

