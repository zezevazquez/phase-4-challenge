const db = require('./index')

const getReviewsByUser = (userID) => {
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

const deleteSingle = (reviewID) => {
  console.log('inside of db DELETESINGLE', reviewID)
  return db.query(`
    DELETE FROM
      reviews
    WHERE
      id=$1::int
  `, [reviewID])
}

module.exports = {
  getReviewsByUser,
  deleteSingle
}
