const { createPostsTable } = require('./infra/database')

const app = require('./app')

{
  (async () => await createPostsTable())()
}
  
app.listen(3333, () => console.log('Server on'))