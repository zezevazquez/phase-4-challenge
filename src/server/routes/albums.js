const router = require('express').Router()
const { getAlbumsByID } = require('../../models/albums')

router.get('/albums/:albumID', (req, res) => {
  const { albumID } = req.params
  return getAlbumsByID(albumID)
    .then((albums) => {
      const album = albums[0]
      res.render('album', {album})
  })
  .catch(error => console.log('inside /albums/:albumID'))
})

module.exports = router
