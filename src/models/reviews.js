const {
  getLast3Reviews,
  getReviewsByUser,
  getReviewsByAlbum,
  deleteSingle,
  createReview
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

const getAlbumReviews = (albumID) => {
  return getReviewsByAlbum(albumID)
    .then((reviews) => {
      return reviews
    })
    .catch(error => {
      throw error
    })
}

const deleteReview = (reviewID, userID) => {
  console.log('inside of models', userID)
  return deleteSingle(reviewID, userID)
}

const addReview = (userID, albumID, review_text) => {
  return createReview(userID, albumID, review_text)
}

const last3Reviews = () => {
  return getLast3Reviews()
}

module.exports = {
  addReview,
  getUsersReviews,
  deleteReview,
  getAlbumReviews,
  last3Reviews
}
