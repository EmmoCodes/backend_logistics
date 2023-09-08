import express from 'express'
import cors from 'cors'

const PORT = 9898
const app = express()

// middlewares anlegen
app.use(cors())
app.use(express.json())

const trucks = []

// routen anlegen
app.post('/api/trucks', (req, res) => {
  const truck = req.body
  console.log(truck)
  trucks.push(truck)
  res.end()
})

app.get('/api/trucks', (_, res) => {
  res.json(trucks)
})

app.listen(PORT, () => console.log("I'm on:", PORT))
