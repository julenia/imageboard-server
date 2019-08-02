const {Router} = require('express')
const Image = require('./model')
const router = new Router()

router.get('./image', (req, res, next)=> {
  Image.findAll()
  .then(images => res.send(images))
  .catch(next(error))
})

module.exports = router