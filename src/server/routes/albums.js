const router = require('express').Router()
const { getAlbumsByID } = require('../../models/albums')
const {
  getAlbumReviews,
  deleteReview
 } = require('../../models/reviews')

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

router.get('/:reviewID/delete', (req, res) => {
  const { reviewID } = req.params
  return deleteReview(reviewID)
    .then(() => {
    res.redirect('back')
  })
  .catch(error => console.log('inside /reviews/delete/:reviewID'))
})

router.get('/:albumID/reviews/new', (req, res) => {
  const { albumID } = req.params
  res.render('new_review')
})

module.exports = router
