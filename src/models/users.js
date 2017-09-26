const { createUser, findUser } = require('./db/users')

const signupUser = (name, email, password) => {
  return createUser(name, email, password)
}

const userSignIn = (email, password) => {
  return findUser(email, password)
}

module.exports = {
  signupUser,
  userSignIn
}
