const express = require('express')
const route = express.Router()
const { getPostsService, addPostService } = require('../application/service')

route.get('/posts', async (req, res) => {
  try {
    const posts = await getPostsService()
    res.json(posts)
  } catch (error) {
    res.json(error)
  }
})

route.post('/posts', async (req, res) => {
  const post = req.body
  await addPostService(post)
  res.json({ message: "Post successfully added" })
})

module.exports = route