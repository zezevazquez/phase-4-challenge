const router = require('express').Router()
const {
  getReviewsByID,
  deleteReview
} = require('../../models/reviews')

router.get('/:reviewID/:userID/delete', (req, res) => {
  const { reviewID, userID } = req.params

  if (req.session.user === undefined) {
    res.redirect('/users/sign-in')
  } else {
    return deleteReview(reviewID, userID)
    .then(() => {
      res.redirect(`/users/${req.session.user.id}`)
    })
    .catch(error => console.log('inside /reviews/delete/:reviewID'))
  }
})

router.get('/:reviewID', (req, res) => {
  const { reviewID } = req.params

  if (req.session.user === undefined) {
    res.redirect('/users/sign-in')
  } else {
    return getReviewsByID(reviewID)
    .then((reviews) => {
      const review = reviews[0]
      res.render('review', {review})
    })
    .catch(error => console.log('inside /reviews/:reviewID'))
  }
})


module.exports = router
