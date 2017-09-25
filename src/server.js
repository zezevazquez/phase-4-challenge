const path = require('path')
const express = require('express')
const middleware = require('./server/middleware')
const routes = require('./server/routes')

const app = express()

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', middleware)
app.use('/', routes)

app.use((req, res) => {
  res.status(404).render('not_found')
})

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}...`)
})
