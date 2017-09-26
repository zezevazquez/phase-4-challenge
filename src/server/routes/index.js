const router = require('express').Router()
const { getAlbums } = require('../../models/albums')
const users = require('./users')
const albums = require('./albums')

router.get('/', (req, res) => {
  console.log('inside of root route::::', getAlbums)
  return getAlbums()
    .then((albums) => {
      res.render('index', {albums})
    })
    .catch(error => console.log('error inside of inside /'))
})

router.use('/albums', albums)
router.use('/users', users)

module.exports = router
