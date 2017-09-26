const {
  getReviewsByUser
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

module.exports = {
  getUsersReviews
}
