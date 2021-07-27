const express = require('express')
const cors = require('cors')
const route = require('./route/postsRoute')
const app = express()

app.use(cors())
app.use(express.json())
app.use(route)

module.exports = app