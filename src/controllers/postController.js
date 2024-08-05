import Post from '../models/postModel.js'

function sendResponse(res, status, data) {
  res.status(status).json(data)
}

function handleError(res, error, status = 500) {
  res.status(status).json({ message: error.message })
}

export async function getPosts(_req, res) {
  try {
    const posts = await Post.find()
    sendResponse(res, 200, posts)
  }
  catch (error) {
    handleError(res, error, 404)
  }
}

export async function getPostById(req, res) {
  const { id } = req.params
  try {
    const post = await Post.findById(id)
    if (!post) {
      return sendResponse(res, 404, { message: 'Post not found' })
    }
    sendResponse(res, 200, post)
  }
  catch (error) {
    handleError(res, error, 404)
  }
}

export async function createPost(req, res) {
  const post = req.body
  const newPost = new Post(post)
  try {
    await newPost.save()
    sendResponse(res, 201, newPost)
  }
  catch (error) {
    handleError(res, error, 409)
  }
}

export async function updatePost(req, res) {
  const { id } = req.params
  try {
    const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true })
    if (!updatedPost) {
      return sendResponse(res, 404, { message: 'Post not found' })
    }
    sendResponse(res, 200, updatedPost)
  }
  catch (error) {
    handleError(res, error, 409)
  }
}

export async function deletePost(req, res) {
  const { id } = req.params
  try {
    const post = await Post.findByIdAndDelete(id)
    if (!post) {
      return sendResponse(res, 404, { message: 'Post not found' })
    }
    sendResponse(res, 200, { message: 'Post deleted successfully' })
  }
  catch (error) {
    handleError(res, error, 409)
  }
}
