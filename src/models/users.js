const {
  createUser,
  findUser,
  findID
} = require('./db/users')

const signupUser = (name, email, password) => {
  return createUser(name, email, password)
}

const userSignIn = (email, password) => {
  return findUser(email, password)
}

const getUserProfile = (userID) => {
  return findID(userID)
    .then((user) => {
      return user[0]
    })
}

module.exports = {
  signupUser,
  userSignIn,
  getUserProfile
}
