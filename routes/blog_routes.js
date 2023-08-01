const express = require('express');
const routes = express.Router();
const controller = require('../controllers/blog_controller');
const imgupload = require('../middleware/muletr');

// console.log('route');

routes.post('/addblog', imgupload, controller.blogadd);
routes.get('/viewall', controller.getall);

module.exports = routes;






// app.post('/posts/:postId/like', async (req, res) => {
//     try {
//       const postId = req.params.postId;
//       const post = await Post.findById(postId);

//       if (!post) {
//         return res.status(404).json({ message: 'Post not found' });
//       }

//       // Simulate authentication by using a dummy user ID (replace it with your actual user ID)
//       const userId = 'dummy-user-id';

//       // Check if the user has already liked the post
//       if (post.likes.includes(userId)) {
//         return res.status(400).json({ message: 'You have already liked this post' });
//       }

//       // Add the user ID to the likes array
//       post.likes.push(userId);
//       await post.save();

//       res.json({ message: 'Post liked successfully' });
//     } catch (err) {
//       console.error('Error liking post:', err);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });