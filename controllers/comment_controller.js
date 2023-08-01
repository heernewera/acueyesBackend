const comment = require('../models/comment_model');
const blogmodel = require('../models/blog_model');

const commentadd = async (req, res) => {
    const { blog } = req.body;
    const blogid = await blogmodel.findById(blog);
    const data = await comment.create({ ...req.body, blog: blogid.id });
    if (data) {
        return res.json({ status: 200, msg: 'successful', data: data });
    }
    return res.json({ status: 200, msg: 'no successful' });
}


const view = async (req, res) => {
    const data = await comment.find({});
    res.status(200).json({ msg: 'blog comment', data: data })
}

module.exports = { commentadd, view };