const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 4000
const db = require('./db')
const imageRouter = require('./image/router')
const corsMiddleware = cors()
app.use(corsMiddleware)
const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(imageRouter)

app.listen(port, ()=> console.log(`Listen on port: ${port}`))