const { database } = require('../../infra/database')

module.exports = async (post) => {
  const db = await database()

  const data = await db.run(`INSERT INTO posts (
    title,
    comments,
    creation_date
  ) VALUES (
    '${post.title}',
    '${post.comments}',
    ${Date.now()}
  )`)

  await db.close()

  return data
}