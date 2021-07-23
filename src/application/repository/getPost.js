const { database } = require('../../infra/database')

module.exports = async (id) => {
  const db = await database()

  const data = await db.run(`SELECT * FROM posts WHERE id = ${id}`)

  await db.close()

  return data
}