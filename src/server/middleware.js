const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(express.static('public'))
router.use(bodyParser.urlencoded({extended: false}))

router.use((req, res, next) => {
  res.locals.error = ''
  next()
})

module.exports = router
