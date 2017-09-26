const router = require('express').Router()
const { signupUser, userSignIn } = require('../../models/users')

router.get('/signup', (req, res) => {
  res.render('signup', {user: req.session.user})
})

router.post('/signup', (req, res) => {
  const { name, email, password} = req.body
  return signupUser(name, email, password)
  .then((users) => {
    req.session.user = users[0].id
    res.redirect(`/users/${users[0].id}`)
  })
  .catch(error => {
    if (error.code === '23505') {
      res.render('signup', { error: 'email is already in use', user: req.session.user})
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
      req.session.user = users[0].id
      res.redirect(`/users/${users[0].id}`)
    })
    .catch(error => {
      res.render('signin', { error: 'invalid login credentials!', user: req.session.user})
    })
})

router.get('/signout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/')
  })
})

router.get('/:userId', (req, res) => {
  res.render('user_profile', {user: req.session.user})
})



module.exports = router
