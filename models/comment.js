const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
})

commentSchema.post('findByIdAndDelete', function () {
    Comment.delete({ comment: this._conditions._id }).then(deleteStatus => {
        console.log(deleteStatus)
    })
})

module.exports = mongoose.model('Comment', commentSchema)