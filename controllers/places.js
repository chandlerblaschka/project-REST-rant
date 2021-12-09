const router = require('express').Router()
const places = require('../models/places.js')
var bodyParser = require('body-parser')

// create application/json parser
//var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/new", (req, res) => {
    res.render("places/New")
})

router.get("/", (req, res) => {
    res.render("places/index", { places })
})

router.get('/:id', (req, res) => {
  let id=Number(req.params.id)
  if(isNaN(id)) {
    res.render('error 404')
  }
  else if(!places[id]) {
    res.render('error 404')
  }
  else {
    res.render('places/show', {place: places[id]})
  }
})

router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

module.exports = router