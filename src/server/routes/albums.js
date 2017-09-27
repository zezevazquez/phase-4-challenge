const router = require('express').Router()
const { getAlbumsByID } = require('../../models/albums')
const {
  addReview,
  getAlbumReviews,
  deleteReview
 } = require('../../models/reviews')

router.get('/:albumID', (req, res) => {
  const { albumID } = req.params
  return getAlbumReviews(albumID)
    .then((reviews) => {
      res.render('album', { reviews })
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
  getAlbumsByID(albumID)
    .then((albums) => {
      const album = albums[0]
      res.render('new_review', { album })

    })
})

router.post('/:albumID/reviews/new', (req, res) => {
  const { albumID } = req.params
  const { review_text } = req.body
  console.log('inside of POST:::', req.session.user.id)
  const userID = req.session.user.id
  return addReview(userID, albumID, review_text)
    .then(() => {
      res.redirect(``)
    })
  res.render('new_review')
})

module.exports = router
