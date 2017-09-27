const router = require('express').Router()
const { getAlbumsByID } = require('../../models/albums')
const {
  addReview,
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
  console.log('albumID::::', albumID)
  getAlbumsByID(albumID)
    .then((albums) => {
      const album = albums[0]
      console.log('inside of get album/review/new::::', album)
      res.render('new_review', {album})

    })
})

router.post('/:albumID/reviews/new', (req, res) => {
  const { albumID, review_text } = req.params
  const userID = req.session.user
  return addReview(userID, albumID, review_text)
    .then(() => {
      res.redirect(``)
    })
  res.render('new_review')
})

module.exports = router
