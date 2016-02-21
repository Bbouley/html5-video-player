var express = require('express');
var router = express.Router();
var mongoose = require('mongoose-q')(require('mongoose'));
var Video = require('../models/videos');


// GET all videos
router.get('/videos', function(req, res) {
    Video.findQ()
    .then(function(data) {
        res.status(200).json(data);
    })
    .catch(function(err) {
        res.status(500).send({'ERROR' : err});
    });
})

// GET single videos
router.get('/video/:id', function(req, res) {
    Video.findByIdQ(req.params.id)
    .then(function(data) {
        res.status(200).json(data);
    })
    .catch(function(err) {
        res.status(500).send({'ERROR' : err});
    });
})

// POST single video
router.post('/videos', function(req, res) {
    var newVideo = new Video(req.boy);
    newVideo.saveQ()
    .then(function(data) {
        res.status(200).json(data);
    })
    .catch(function(err) {
        res.status(500).send({'ERROR' : err});
    });
});

// PUT single video
router.put('/video/:id', function(req, res) {
    var id = req.params.id;
    var update = req.body;
    var options = {new : true};

    video.findByIdAndUpdateQ(id, update, options)
    .then(function(data) {
        res.status(200).json(data);
    })
    .catch(function(err) {
        res.status(500).send({'ERROR' : err});
    });
});

// DELETE single video
router.delete('/video/:id', function(req, res) {
    router.findByIdAndRemoveQ(req.params.id)
    .then(function(data) {
        res.status(200).json(data);
    })
    .catch(function(err) {
        res.status(500).send({'ERROR' : err});
    });
});

module.exports = router;
