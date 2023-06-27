const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Gitには差分を見る機能がありますよね')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})