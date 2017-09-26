const router = require('express').Router()
const { getAlbums } = require('../../models/albums')
const users = require('./users')
const albums = require('./albums')
const reviews = require('./reviews')

router.get('/', (req, res) => {
  return getAlbums()
    .then((albums) => {
      res.render('index', {albums, user: req.session.user})
    })
    .catch(error => console.log('error inside of /'))
})

router.use('/albums', albums)
router.use('/users', users)
router.use('/reviews', reviews)

module.exports = router
