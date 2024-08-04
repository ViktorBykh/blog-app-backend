import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

const Post = mongoose.model('Post', postSchema)

export default Post
