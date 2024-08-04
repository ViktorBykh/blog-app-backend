import Post from '../models/postModel.js'

export async function getPosts(req, res) {
  try {
    const posts = await Post.find()
    res.status(200).json(posts)
  }
  catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export async function getPostById(req, res) {
  const { id } = req.params
  try {
    const post = await Post.findById(id)
    res.status(200).json(post)
  }
  catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export async function createPost(req, res) {
  const post = req.body
  const newPost = new Post(post)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  }
  catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export async function updatePost(req, res) {
  const { id } = req.params
  const post = req.body
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true })
    res.status(200).json(updatedPost)
  }
  catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export async function deletePost(req, res) {
  const { id } = req.params
  try {
    await Post.findByIdAndRemove(id)
    res.status(200).json({ message: 'Post deleted successfully' })
  }
  catch (error) {
    res.status(409).json({ message: error.message })
  }
}
