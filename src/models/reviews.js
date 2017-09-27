const {
  getReviewsByUser,
  getReviewsByAlbum,
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

module.exports = {
  getUsersReviews,
  deleteReview,
  getAlbumReviews
}
