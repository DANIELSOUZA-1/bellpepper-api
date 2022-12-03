const express = require('express')

const serverless = require('serverless-http')

const app = express()

const router = express.Router()

var recipes = [
  {
    'title': 'Lasanha de Berinjela',
    'ingredients': [
      '2 Berinjelas médias em fatias finas',
      'Óleo de girassol para fritar',
      '100g de ricota amassadinha',
      '2 tomates grandes sem pele em rodelas finas',
      'Sal a gosto',
      '4 colheres (sopa) de parmesão ralado para polvilhar',
      '1/2 cebelo média ralada',
      '1 colher (chá) de folhas de manjericão',
      '1 colher (café) de orégano'
    ],
    'preparation': [
      'Frite as fatias de berinjela em uma frigideira antiaderente untada com 1 fio de óleo até dourar dos 2 lados.',
      'Em refratário untado com óleo, monte em camadas, polvilhando sal a gosto: berinjela, ricota e rodelas de tomate, encerrando com berinjela.',
      'Despeje o molho e polvilhe o parmesão.',
      'Leve ao forno quente preaquecido (220 ºC) por 15 minutos ou até aquecer bem.'
    ]
  },
]

recipes = JSON.stringify(recipes)


router.get('/', (req, res) => {
  res.json(recipes)
})

router.get('/test', (req, res) => {
  res.json({
    'hello': 'test'
  })
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)

