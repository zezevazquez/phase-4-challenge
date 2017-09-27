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

const getReviewsByAlbum = (albumID) => {
  return db.query(`
    SELECT
        reviews.*, users.name, albums.title
      FROM
        reviews
      JOIN
        users ON reviews.user_id = users.id
      JOIN
      	albums ON reviews.album_id = albums.id
      WHERE
        reviews.album_id = $1
  `, [albumID])
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

const createReview = (user_id, album_id, review_text) => {
  return db.query(`
    INSERT INTO
      reviews (name, email, password)
    VALUES
      ($1::text, $2::text, $3::text)
    RETURNING
      *
  `, [userID, albumID, review_text])
}

module.exports = {
  getReviewsByUser,
  getReviewsByAlbum,
  deleteSingle
}
