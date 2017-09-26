const db = require('./index')

const getAll = () => {
  return db.query(`
    SELECT
      *
    FROM
      albums
  `, [])
    .catch(error => console.log(error))
}

const getByID = (albumID) => {
  return db.query(`
    SELECT
      *
    FROM
      albums
    WHERE
      id = $1
  `, [ albumID ])
    .catch(error => console.log(error))
}

module.exports = {
  getAll,
  getByID
}
