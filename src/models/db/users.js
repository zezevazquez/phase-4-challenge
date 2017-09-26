const db = require('./index')

const createUser = (name, email, password) => {
  console.log('userinfo inside of db file:::', name, email, password)

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

// const findUserByEmail = (email) => {
//   return db.query(`
//     SELECT
//       email, password
//     FROM
//       users
//     WHERE
//       email=$1
//   `, [ email ])
// }

module.exports = {
  createUser
}
