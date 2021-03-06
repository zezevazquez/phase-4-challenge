const db = require('./index')

const createUser = (name, email, password) => {
  return db.query(`
    INSERT INTO
      users (name, email, password)
    VALUES
      ($1::text, $2::text, $3::text)
    RETURNING
      *
  `,
  [ name, email, password ])
}

const findUser = (email, password) => {
  return db.query(`
    SELECT
      id, email, password
    FROM
      users
    WHERE
      email=$1 AND password=$2
  `, [ email, password ])
}

const findID = (userID) => {
  return db.query(`
    SELECT
      *
    FROM
      users
    WHERE
      id=$1
  `, [userID])
}

module.exports = {
  createUser,
  findUser,
  findID
}
