const express = require('express')

const serverless = require('serverless-http')

const app = express()

const router = express.Router()

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers':
    'Origin, X-Requested-With, Content-Type, Accept',
}

router.get('/', (req, res) => {
  res.set({
    'Content-Type': 'application/json',
    "access-control-allow-origin": "*"
  }
  )
  res.json({
    'hello': 'hi!'
  })
})

router.get('/test', (req, res) => {
  res.json({
    'hello': 'test'
  })
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)

