const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const { signupUser } = require('./models/users')
const { getAlbums, getAlbumsByID } = require('./models/albums')


const port = process.env.PORT || 3000

const app = express()

require('ejs')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  return getAlbums()
    .then((albums) => {
      res.render('index', {albums})
    })
    .catch(error => console.log('error inside of inside /'))
})

app.get('/albums/:albumID', (req, res) => {
  const { albumID } = req.params
  return getAlbumsByID(albumID)
    .then((albums) => {
      const album = albums[0]
      res.render('album', {album})
  })
  .catch(error => console.log('inside /albums/:albumID'))
})

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.post('/signup', (req, res) => {
  const { name, email, password} = req.body
  return signupUser(name, email, password)
  .then((users) => {
    res.redirect(`/users/${users[0].id}`)
  })
})

app.get('/users/:userId', (req, res) => {
  console.log('rendering some user_profile')
  res.render('user_profile')
})

app.use((req, res) => {
  res.status(404).render('not_found')
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
