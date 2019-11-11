const express = require('express');
const bodyParser = require('body-parser');
const promotions = express.Router();

promotions.use(bodyParser.json());

promotions.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res) => {
    res.end('Getting all the promotions');
})
.post((req, res) => {
    res.statusCode = 201;
    res.write('Successfully Created \n' )
    res.end(`The new promotion ${req.body} will be added`)
})
.put((req, res) => {
    res.statusCode = 405;
    res.end('Method not allowed')
})
.delete((req, res) => {
    res.end('Deleting all the promotions')
})

promotions.route('/:id')
.all((req, res, next) => {
    res.setHeader('Content-Type','text/plain');
    next();
})
.get((req, res) => {
    res.end(`Getting the promotion ${req.params.id}`)
})
.post((req, res) => {
    res.statusCode = 405;
    res.end(`Method ${req.method} not allowed`)
})
.put((req, res) => {
    res.end(`Successfully updated the promotion ${req.params.id}`)
})
.delete((req, res) => {
    res.end(`Promotion ${req.params.id} deleted`)
});

module.exports = promotions;

