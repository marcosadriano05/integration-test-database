const express = require('express')
const cors = require('cors')
const route = require('./route/postsRoute')
const { createPostsTable } = require('./infra/database')
const app = express()

app.use(cors())
app.use(express.json())
app.use(route)

try {
  (async () => await createPostsTable())()
} catch (error) {
  console.log(error)
}

app.listen(3333, () => console.log('Server on'))