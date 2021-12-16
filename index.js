require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override')
const app = express()

//app.set('views', __dirname + '/views')
app.use(express.static('public'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
    //res.send('Hello World!')
})

app.get('*', (req, res) => {
    res.render('error404')
})

app.listen(process.env.PORT)


