require('dotenv').config()

const express = require('express')
const app = express()

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)

// color scheme
// Red: BF0603
// Light Blue: 8EB1C7 
// Light Grey: C1BFB5
// Dark Purple: 4B3B47
// Dark Grey/Green: 353535
