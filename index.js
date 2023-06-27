const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('FLAG not found')
})

app.post('/', (req, res) => {
  res.send('そろそろ気が狂いそうです')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
