const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')
const configDatabase = require('./config/database')

const port = process.env.PORT || 3000
const mongoUrl = (process.env.MONGO_URL || configDatabase.db_url) + configDatabase.db_name

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const mongoOptions = {
  useNewUrlParser: true,
  auto_reconnect: true
}

mongoose.connect(mongoUrl, mongoOptions,
  () => console.info('Mongoose connected to the database'),
  err => console.error('Mongoose connection error', err))

app.listen(port, () => console.info('Example app listening on port ' + port + '!'))
