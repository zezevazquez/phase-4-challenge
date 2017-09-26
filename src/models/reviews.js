const {
  getReviewsByUser,
  deleteSingle
} = require('./db/reviews')

const getUsersReviews = (userID) => {
  return getReviewsByUser(userID)
    .then((reviews) => {
      return reviews
    })
    .catch(error => {
      throw error
    })
}

const deleteReview = (reviewID) => {
  console.log('inside of MODELS!::::',reviewID)
  return deleteSingle(reviewID)

}

module.exports = {
  getUsersReviews,
  deleteReview
}
