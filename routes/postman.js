const router = require('express').Router()

const controller = require('../controllers/index');

const read = function () {
    router.get('/all', function (req, res) {
        controller.displayAllPostmans()
            .then(data => {
                res.send(data);
            });
    });
    router.get('/:id', function (req, res) {
        controller.displayPostmanById(req.params.id)
            .then(data => {
                res.send(data);
            });
    });
    router.get('/all/newspaper/:id', function (req, res) {
        controller.displayPostmanByNewspaper(req.params.id)
            .then(data => {
                res.send(data);
            });
    });
}

read();

module.exports = router