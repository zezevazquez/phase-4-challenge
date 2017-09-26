const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const router = express.Router()

router.use(express.static('public'))
router.use(bodyParser.urlencoded({extended: false}))

router.use((req, res, next) => {
  res.locals.error = ''
  res.locals.user = ''
  next()
})

router.use(session({
  secret: 'therealzeze',
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: 600000
    }
}))

module.exports = router
