const router = require('express').Router()
const { getAlbumsByID } = require('../../models/albums')
const {
  addReview,
  getAlbumReviews,
  deleteReview
 } = require('../../models/reviews')

router.get('/:albumID', (req, res) => {
  const { albumID } = req.params

  if (req.session.user === undefined) {
    res.redirect('/users/sign-in')
  } else {
    return getAlbumReviews(albumID)
        .then((reviews) => {
          res.render('album', { reviews, user: req.session.user })
        })
        .catch(error => console.log('ERRORINSIDE!!'))
  }
})

router.get('/:reviewID/:userID/delete', (req, res) => {
  const { reviewID, userID } = req.params

  if (req.session.user === undefined) {
    res.redirect('/users/sign-in')
  } else {
    return deleteReview(reviewID, userID)
    .then(() => {
      res.redirect('back')
    })
    .catch(error => console.log('inside /reviews/delete/:reviewID'))
  }
})

router.get('/:albumID/reviews/new', (req, res) => {
  const { albumID } = req.params

  if (req.session.user === undefined) {
    res.redirect('/users/sign-in')
  } else {
    getAlbumsByID(albumID)
      .then((albums) => {
        const album = albums[0]
        res.render('new_review', { album, user: req.session.user })

      })
  }
})

router.post('/:albumID/reviews/new', (req, res) => {
  const { albumID } = req.params
  const { review_text } = req.body

  if (req.session.user === undefined) {
    res.redirect('/users/sign-in')
  } else if (review_text.length < 10) {
    res.redirect('back')
  } else {
    const userID = req.session.user.id
    return addReview(userID, albumID, review_text)
      .then(() => {
        res.redirect(`/albums/${albumID}`)
      })
    res.render('new_review')
  }
})

module.exports = router
