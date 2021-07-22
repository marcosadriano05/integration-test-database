const database = require('./connect')
const createPostsTable = require('./createPostsTable')

module.exports = {
  database,
  createPostsTable
}