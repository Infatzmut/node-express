const express = require('express');
const bodyParser = require('body-parser')
const leadersRouter = express.Router();

leadersRouter.use(bodyParser.json());

leadersRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res) => {
    res.end('Getting all the leaders');
})
.post((req, res) => {
    res.statusCode = 201;
    res.end("Leader created successfully")
})
.put((req, res) => {
    res.statusCode = 405;
    res.end('Method ' + req.method + " not allowed")
})
.delete((req, res) => {
    res.end("Deleting all the leaders");
})

leadersRouter.route('/:id')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type",'text/plain');
    next()
})
.get((req, res) => {
    res.end("Getting the leader " + req.params.id)
})
.post((req, res) => {
    res.statusCode = 405;
    res.end("Method not allowed")
})
.put((req, res) => {
    res.end('Successfully modified the leader: '+ req.params.id)
})
.delete((req, res) => {
    res.end("leader " + req.params.id + " deleted")
})

module.exports = leadersRouter;