const router = require('express').Router()
const { getAlbums } = require('../../models/albums')
const { last3Reviews } = require('../../models/reviews')
const users = require('./users')
const albums = require('./albums')
const reviews = require('./reviews')

router.get('/', (req, res) => {
  return getAlbums()
    .then((albums) => {
      return last3Reviews()
        .then((reviews) => {
          res.render('index', { albums, reviews, user: req.session.user })
        })
    })
    .catch(error => console.log('error inside of /'))
})

router.use('/albums', albums)
router.use('/users', users)
router.use('/reviews', reviews)

module.exports = router
