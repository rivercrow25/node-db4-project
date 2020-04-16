const express = require('express')

const server = express()

server.use(express.json())

const route = require('./api/recipeRouter')

server.use('/api/recipe', route)

module.exports = server