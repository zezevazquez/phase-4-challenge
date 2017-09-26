const router = require('express').Router()
const { signupUser, userSignIn } = require('../../models/users')

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res) => {
  const { name, email, password} = req.body
  return signupUser(name, email, password)
  .then((users) => {
    res.redirect(`/users/${users[0].id}`)
  })
  .catch(error => {
    if (error.code === '23505') {
      res.render('signup', { error: 'email is already in use'})
    }
  })
})

router.get('/sign-in', (req, res) => {
  res.render('signin')
})

router.post('/sign-in', (req, res) => {
  const { email, password } = req.body
  return userSignIn(email, password)
    .then((users) => {
      res.redirect(`/users/${users[0].id}`)
    })
    .catch(error => {
      res.render('signin', { error: 'invalid login credentials!'})
    })
})

router.get('/:userId', (req, res) => {
  console.log('rendering some user_profile')
  res.render('user_profile')
})

module.exports = router
