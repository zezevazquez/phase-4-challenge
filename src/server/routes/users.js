const router = require('express').Router()
const { signupUser } = require('../../models/users')

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res) => {
  const { name, email, password} = req.body
  return signupUser(name, email, password)
  .then((users) => {
    res.redirect(`/users/${users[0].id}`)
  })
})

router.get('/users/:userId', (req, res) => {
  console.log('rendering some user_profile')
  res.render('user_profile')
})

module.exports = router
