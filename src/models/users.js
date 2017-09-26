const { createUser } = require('./db/users')

const signupUser = (name, email, password) => {
  return createUser(name, email, password)
}

module.exports = {
  signupUser
}
