const {
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
  console.log('inside of Models!::::', albumID)
  return getReviewsByAlbum(albumID)
    .then((reviews) => {
      console.log('DEEP INSIDE MODELS::::::', reviews)
      return reviews
    })
    .catch(error => {
      throw error
    })
}

const deleteReview = (reviewID) => {
  return deleteSingle(reviewID)
}

const addReview = (userID, albumID, review_text) => {
  return createReview(userID, albumID, review_text)
}

module.exports = {
  addReview,
  getUsersReviews,
  deleteReview,
  getAlbumReviews
}
