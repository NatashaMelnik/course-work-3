const router = require('express').Router()

const controller = require('../controllers/index');

const read = function () {
    router.get('/all', function (req, res) {
        controller.displayAllJornalists()
            .then(data => {
                res.send(data);
            });
    });
    router.get('/:id', function (req, res) {
        controller.displayJornalistById(req.params.id)
            .then(data => {
                res.send(data);
            });
    });
    router.get('/all/article/:id', function (req, res) {
        controller.displayJornalistByIdArticle(req.params.id)
            .then(data => {
                res.send(data);
            });
    });
}

read();

module.exports = router