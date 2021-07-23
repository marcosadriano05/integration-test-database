const { deletePost } = require('../repository')

module.exports = async (id) => await deletePost(id)