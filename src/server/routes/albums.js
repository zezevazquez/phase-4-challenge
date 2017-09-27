const router = require('express').Router()
const { getAlbumsByID } = require('../../models/albums')
const { getAlbumReviews } = require('../../models/reviews')

router.get('/:albumID', (req, res) => {
  const { albumID } = req.params
  console.log('albumID:::', albumID)
  return getAlbumReviews(albumID)
    .then((reviews) => {
      console.log('DEEEP AF inside 2nd promise::::', reviews)
      res.render('album', {reviews})
    })
    .catch(error => console.log('ERRORINSIDE!!'))
})

module.exports = router
