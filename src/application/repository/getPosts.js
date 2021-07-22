const { database } = require('../../infra/database')

module.exports = async () => {
  const db = await database()

  const data = await db.all('SELECT * FROM posts')

  await db.close()

  return data
}