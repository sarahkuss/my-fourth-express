import express from 'express'

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
  res.send('this is index')
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}...`)
})