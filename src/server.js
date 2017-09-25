const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')

const port = process.env.PORT || 3000

const app = express()

require('ejs')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
  db.getAlbums((error, albums) => {
    if (error) {
      res.status(500).render('error', {error})
    } else {
      res.render('index', {albums})
    }
  })
})

app.get('/albums/:albumID', (req, res) => {
  const albumID = req.params.albumID

  db.getAlbumsByID(albumID, (error, albums) => {
    if (error) {
      res.status(500).render('error', {error})
    } else {
      const album = albums[0]
      res.render('album', {album})
    }
  })
})

app.get('/signup', (req, res) => {
  res.render('signup')
})

app.post('/signup', (req, res) => {
  const user = req.body
  db.signupUser(user, (error, users) => {
    console.log('inside of /signup post:::: ', users)
    console.log('redirecting to :::: userID:', users[0].id)
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
