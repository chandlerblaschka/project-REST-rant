require('dotenv').config()

const express = require('express')
const app = express()

//app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
    //res.send('Hello World!')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)

// color scheme
// Red: BF0603
// Light Blue: 8EB1C7 
// Light Grey: C1BFB5
// Dark Purple: 4B3B47
// Dark Grey/Green: 353535
