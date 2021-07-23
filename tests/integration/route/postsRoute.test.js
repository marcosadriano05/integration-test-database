const { Post } = require('../../../src/domain')

const axios = require('axios')

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

describe('Posts route', () => {
  test('Should add a new post in route POST', async () => {
    const post1 = Post('titulo1', 'comment1')

    await api.post('/posts', post1)

    const { data } = await api.get('/posts')

    data.forEach(async post => await api.delete(`/posts/${post.id}`))
    
    const isPostAdded = data.some(post => post.title === post1.title)

    expect(isPostAdded).toBe(true)
  })
})