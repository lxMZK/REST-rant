const router = require('express').Router()
const places = require('../models/placeData.js')
const states = require('../models/states.js')

router.get('/', function (req, res) {
    res.render('places/index', { places })
})

router.get('/new', function (req, res) {
    res.render('places/new', { states })
})

router.get('/:id', function (req, res) {
    let id = Number(req.params.id)
    if (isNaN(id) || !places[id]) {
        res.render('error404')
    } else {
        res.render('places/show', { place: places[id], id })
    }
})

router.get('/:id/edit', function (req, res) {
    if (req.params.id >= places.length) {
        res.render('error404')
    } else {
        res.render('places/edit', places[req.params.id])
    }
})

router.post('/', function (req, res) {
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

router.delete('/:id', (req, res) => {
    let id = Number(req.params.id)
    if (isNaN(id)) {
        res.render('error404')
    }
    else if (!places[id]) {
        res.render('error404')
    }
    else {
        places.splice(id,1)
        res.redirect('/places')
    }
})


module.exports = router