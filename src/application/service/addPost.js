const { addPost } = require('../repository')

module.exports = async (post) => await addPost(post)