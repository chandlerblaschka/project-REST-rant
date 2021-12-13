const router = require('express').Router()
const places = require('../models/places.js')
var bodyParser = require('body-parser')

// create application/json parser
//var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlEncodedParser = bodyParser.urlencoded({ extended: false })

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

router.get("/", (req, res) => {
    res.render("places/index", { places })
})

router.get("/new", (req, res) => {
  res.render("places/New")
})

router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if(isNaN(id)) {
    res.render('error 404')
  } else if(!places[id]) {
    res.render('error 404')
  } else {
    res.render('places/show', {place: places[id], id})
  }
})

router.delete('/places/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

module.exports = router