const express = require('express')
const route = express.Router()
const { 
  getPostsService, 
  addPostService, 
  getPostService, 
  deletePostService 
} = require('../application/service')

route.get('/posts', async (req, res) => {
  try {
    const posts = await getPostsService()
    res.json(posts)
  } catch (error) {
    res.json(error)
  }
})

route.get('/posts/:id', async (req, res) => {
  const { id } = req.params

  try {
    const post = await getPostService(id)
    res.json(post)
  } catch (error) {
    res.json(error)
  }
})

route.post('/posts', async (req, res) => {
  try {
    const post = req.body

    if (req.body.title === undefined || req.body.title === null) {
      return res.status(404).json({ message: 'Title param has incorrect format' })
    }

    const postCreated = await addPostService(post)
    const postDTO = {
      id: postCreated.lastID,
      title: post.title,
      comments: post.comments
    }

    return res.status(201).json(postDTO)
  } catch (error) {
    return res.json(error)
  }
})

route.delete('/posts/:id', async (req, res) => {
  const { id } = req.params

  try {
    await deletePostService(id)
    res.json({ message: "Post successfully deleted" })
  } catch (error) {
    res.json(error)
  }
})

module.exports = route