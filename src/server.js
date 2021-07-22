const express = require('express')
const cors = require('cors')
const route = require('./route/postsRoute')
const { createPostsTable } = require('./infra/database')
const app = express()

app.use(cors())
app.use(express.json())
app.use(route)

{
  (async () => await createPostsTable())()
}
  
app.listen(3333, () => console.log('Server on'))