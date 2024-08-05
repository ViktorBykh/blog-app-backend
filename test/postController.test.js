import mongoose from 'mongoose'
import { expect } from 'chai'
import request from 'supertest'
import app from '../index.js'

describe('post Controller', () => {
  before(async () => {
    await mongoose.connect(
      process.env.MONGODB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
    )
  })

  after(async () => {
    await mongoose.connection.close()
  })

  let postId

  it('should create a new post', async () => {
    const res = await request(app)
      .post('/posts')
      .send({ title: 'Test Title', content: 'Test Content', author: 'Test Author' })
    expect(res.status).to.equal(201)
    expect(res.body).to.have.property('_id')
    expect(res.body.title).to.equal('Test Title')
    postId = res.body._id
  })

  it('should get all posts', async () => {
    const res = await request(app).get('/posts')
    expect(res.status).to.equal(200)
    expect(res.body).to.be.an('array')
  })

  it('should get a post by id', async () => {
    const res = await request(app).get(`/posts/${postId}`)
    expect(res.status).to.equal(200)
    expect(res.body).to.have.property('_id')
    expect(res.body._id).to.equal(postId)
  })

  it('should update a post', async () => {
    const res = await request(app)
      .put(`/posts/${postId}`)
      .send({ title: 'Updated Title' })
    expect(res.status).to.equal(200)
    expect(res.body.title).to.equal('Updated Title')
  })

  it('should delete a post', async () => {
    const res = await request(app).delete(`/posts/${postId}`)
    expect(res.status).to.equal(200)
    expect(res.body).to.have.property('message', 'Post deleted successfully')
  })

  it('should return 404 for non-existing post', async () => {
    const res = await request(app).get(`/posts/60c72b1f9b1e8e5d6c5b8e9b`)
    expect(res.status).to.equal(404)
  })
})
