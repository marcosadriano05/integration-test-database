const { Post } = require('../../../src/domain')
const { getPostsService } = require('../../../src/application/service')

const axios = require('axios')

const api = axios.create({
  baseURL: 'http://localhost:3333'
})

describe('Posts route', () => {
  test('Should add a new post in route POST', async () => {
    const post1 = Post('titulo1', 'comment1')

    await api.post('/posts', post1)

    const { data } = await api.get('/posts')
    
    const isPostAdded = data.some(post => post.title === post1.title)

    expect(isPostAdded).toBe(true)
  })
})