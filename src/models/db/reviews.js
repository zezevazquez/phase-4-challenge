const db = require('./index')

const getReviewsByUser = (userID) => {
  return db.query(`
    SELECT
      reviews.*, albums.title
    FROM
      reviews
    INNER JOIN
      albums
    ON
      reviews.album_id = albums.id
    WHERE
      reviews.user_id = $1
    ORDER by review_date DESC
  `, [userID])
}

const getLast3Reviews = () => {
  return db.query(`
    SELECT
      reviews.*, users.name, albums.title
    FROM
      reviews
    JOIN
      users
    ON
      reviews.user_id = users.id
    JOIN
      albums
    ON
      reviews.album_id = albums.id
    ORDER BY review_date DESC LIMIT 3
  `, [])
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
  return db.query(`
    DELETE FROM
      reviews
    WHERE
      id=$1::int
  `, [reviewID])
}

const createReview = (userID, albumID, review_text) => {
  return db.query(`
    INSERT INTO
      reviews (user_id, album_id, review_text)
    VALUES
      ($1::integer, $2::integer, $3::text)
    RETURNING
      *
  `, [userID, albumID, review_text])
}

module.exports = {
  getLast3Reviews,
  getReviewsByUser,
  getReviewsByAlbum,
  createReview,
  deleteSingle
}
