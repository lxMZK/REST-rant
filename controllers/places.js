const router = require('express').Router()
const places = require('../models/placeData.js')

router.get('/', function (req, res) {
    res.render('places/index', { places })
})

router.get('/new', function(req,res){
    res.render('places/new')
})

router.get('/:id', function(req,res){
    if (req.params.id >= places.length) {
        res.render('error404')
    } else {
        res.render('places/details', places[req.params.id])
    }
})

router.get('/:id/edit', function(req,res){
    if (req.params.id >= places.length) {
        res.render('error404')
    } else {
        res.render('places/edit', places[req.params.id])
    }
})

router.post('/', function(req,res){
    if (!req.body.pic) {
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