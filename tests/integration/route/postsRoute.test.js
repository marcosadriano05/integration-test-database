const { Post } = require('../../../src/domain')
const app = require('../../../src/app')

const axios = require('axios')
const request = require('supertest')

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

describe('Posts route', () => {
  test('Should add a new post in route POST', (done) => {
    const post = Post('titulo', 'comment')

    request(app)
      .post('/posts')
      .send(post)
      .set('Accept', 'application/json')
      .expect(201)
      .then(res => {
        expect(res.body).toHaveProperty('id')
        expect(res.body.title).toBe(post.title)
        expect(res.body.comments).toBe(post.comments)
        return done()
      })
      .catch(err => done(err))
  })

  test.skip('Should receive a message "Post successfully added" route POST has success', async () => {
    const post1 = Post('titulo1', 'comment1')

    const { status, data } = await api.post('/posts', post1)

    const posts = await api.get('/posts')

    posts.data.forEach(async post => await api.delete(`/posts/${post.id}`)) 
    
    expect(status).toBe(200)
    expect(data.message).toBe('Post successfully added')
  })

  test.skip('Should receive a message "Title param has incorrect format" if incorrect Post title is null or undefined', async () => {
    const { status, data } = await api.post('/posts', { title: null, comments: "comments" })
    
    expect(status).reject.toBe(404)
    expect(data.message).reject.toBe('Title param has incorrect format')
  })

  test('Should GET route returns a list of posts', (done) => {
    request(app)
      .get('/posts')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, done)
  })
})