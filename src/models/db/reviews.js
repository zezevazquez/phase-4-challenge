const db = require('./index')

const getReviewsByUser = (userID)=> {
  return db.query(`
    SELECT
      reviews.*, albums.title
    FROM
      reviews
    INNER JOIN
      albums ON reviews.album_id = albums.id
    WHERE
      reviews.user_id = $1
  `, [userID])
}

module.exports = {
  getReviewsByUser
}
