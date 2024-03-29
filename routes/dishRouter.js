const express = require('express')
const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/').all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the dishes to you!');
    })  
    .post((req, res, next) => {
        res.end('Will add the dish: ' + req.body.name + 
        'with details ' + req.body.description);
    })
   .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all the dishes');
    });

dishRouter.route('/:id')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will display the dish: '+ req.params.id);
})
.post((req, res, next) => {
    res.end(`${req.method} not allowed`)
})
.put((req, res, next) => {
    res.write("The dish "+ req.params.id + " will be updated")
    res.end("Successfully updated")
})
.delete((req, res) => {
    res.end(`The dish ${req.params.id} is deleted`)
})

module.exports = dishRouter;