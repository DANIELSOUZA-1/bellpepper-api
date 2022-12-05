const express = require('express')

const serverless = require('serverless-http')

const app = express()

const router = express.Router()

var recipes = [
  {
    'title': 'Lasanha de Berinjela',
    'img': 'https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2019/05/lasanha-de-berinjela-simples.jpg?fit=1200%2C675&ssl=1',
    'level': 'Difícil',
    'description': 'Que tal preparar uma deliciosa lasanha de berinjela para comer com a família no almoço de domingo? O passo a passo é difícil mas tenho certeza que você consegue fazer!',
    'ingredients': [
      '2 Berinjelas médias em fatias finas',
      'Óleo de girassol para fritar',
      '100g de ricota amassadinha',
      '2 Tomates grandes sem pele em rodelas finas',
      'Sal a gosto',
      '4 Colheres (sopa) de parmesão ralado para polvilhar',
      '1/2 Cebelo média ralada',
      '1 Colher (chá) de folhas de manjericão',
      '1 Colher (café) de orégano'
    ],
    'preparation': [
      'Frite as fatias de berinjela em uma frigideira antiaderente untada com 1 fio de óleo até dourar dos 2 lados.',
      'Em refratário untado com óleo, monte em camadas, polvilhando sal a gosto: berinjela, ricota e rodelas de tomate, encerrando com berinjela.',
      'Despeje o molho e polvilhe o parmesão.',
      'Leve ao forno quente preaquecido (220 ºC) por 15 minutos ou até aquecer bem.'
    ]
  },
  {
    'title': 'Banana Bread',
    'img': 'https://www.sabornamesa.com.br/media/k2/items/cache/1e92e29468d367fc231b76a078b7faaa_XL.jpg',
    'level': 'Médio',
    'description': 'Que tal preparar uma deliciosa banana bread para comer com a família no lanche da tarde? O passo a passo é mediano mas você consegue fazer!',
    'ingredients': [
      '2 Ovos',
      '1 Canela',
      '1/2 Xícara (chá) de óleo de coco',
      '1 Banana para usar de decoração',
      '3 Bananas bem maduras',
      '100g de gotas de chocolate amargo',
      '2 Xícaras de aveia em flocos finos ou farelo de aveia',
      '2 Colheres de chá de vinagre',
      '1 Colher de chá de baunilha',
      'Castanhas (opcional)'
    ],
    'preparation': [
      'Em um liquidificador, adicione os ovos, as bananas, óleo de coco, vinagre, essência de baunilha e bata por três minutos.',
      'Em um pote ou bacia, coloque aveia, canela e o bicarbonato de sódio e mexa bastante.',
      'Coloque a mistura que bateu no liquidificador junto com a aveia e os outros ingredientes e misture até que fique homogêneo.',
      'Depois passe metade da massa para a assadeira que for usar, recomenda-se que use a assadeira ou forma de pão inglês.',
      'Por cima da massa, acrescente o chocolate amargo, em seguida a massa, mais uma camada de chocolate e por último finalize com a massa novamente.'
    ]
  },
  {
    'title': 'Brownie de chocolate',
    'img': 'https://s2.glbimg.com/vqYi183ffGVXrWf7M5Evsl5S7Zo=/0x0:1080x608/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/l/5/Cp3xMbQuAcz2sbHhszzw/capa-materia-gshow-2022-01-11t111649.282.png',
    'level': 'Fácil',
    'description': 'Que tal preparar um delicioso brownie para comer com a família no lanche da tarde? O passo a passo é bem simples e fácil de fazer!',
    'ingredients': [
      '2 xícaras de achocolatado em pó',
      '1 xícara de farinha de trigo',
      '1 xícara de açúcar',
      '200g de manteiga',
      '4 ovos'
    ],
    'preparation': [
      'Em uma tigela, coloque os ovos, o açúcar e bata com a ajuda de um fouet ou garfo.',
      'Em seguida, adicione a manteiga e o achocolatado em pó.',
      'Misture tudo e depois adicione a farinha de trigo.',
      'Mexa a massa até que fique homogênea.',
      'Depois, despeje a massa em uma forma untada com achocolatado em pó.',
      'Leve para assar em forno preaquecido a 180º por 35 minutos.',
      'Retire do forno e sirva.'
    ]
  }
]

recipes = JSON.stringify(recipes)
router.get('/', (req, res) => {
  res.set({
    'Content-Type': 'application/json',
    "access-control-allow-origin": "*"
  }
  )
  res.json(recipes)
})

router.get('/test', (req, res) => {
  res.json({
    'hello': 'test'
  })
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)

