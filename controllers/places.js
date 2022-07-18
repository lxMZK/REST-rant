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
    console.log(req.body)
    res.send('POST /places')
})

module.exports = router