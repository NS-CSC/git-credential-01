const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('SQLインジェクションを実装しても面白そう')
})

app.post('/', (req, res) => {
  res.send('テストブランチがこれです')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})