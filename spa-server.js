const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 8080
const app = express()
const fetch = require('node-fetch')

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'build')))

// Always return the main index.html, so react-router render the route in the client
app.get('/app/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.get('/api/v1/bing', (req, res) => {
  const bingAPI = 'https://bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR'

  fetch(bingAPI).then(res => res.json()).then(data => {
    console.log(data)
    res.json(data)
  })
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})
