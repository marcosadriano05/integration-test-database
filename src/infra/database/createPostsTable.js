const database = require('./connect')

module.exports = async () => {
  const db = await database()

  await db.exec(`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    comments TEXT,
    creation_date DATETIME
  )`)

  await db.close()
}