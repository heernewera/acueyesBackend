const mongoose = require('mongoose');
const commentschema = mongoose.Schema({
    blog :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blog',
        required: true, 
    },
    comment: {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    }
});

const comment = mongoose.model('comment', commentschema);
module.exports = comment;