const express = require('express');
const http = require('http');
const morgan = require('morgan')
const hostname = 'localhost';
const port = 3000;
const bodyParser = require('body-parser')

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

// app.all('/dishes',(req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     next();
// })

app.get('/dishes', (req, res, next) => {
    res.end('Will send all the dishes to you!');
})

app.post('/dishes',(req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + 
    'with details ' + req.body.description);
})

app.put('/dishes',(req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})

app.delete('/dishes',(req, res, next) => {
    res.end('Deleting all the dishes');
})

app.get('/dishes/:dishId', (req, res, next) => {
    res.end('Will send detailes of the dish: '+ req.params.dishId);
})

app.post('/dishes/:dishId',(req, res, next) => {
    res.end('POST operation not supported on dishes/' + req.params.dishId);
})

app.put('/dishes/:dishId',(req, res, next) => {
    res.write('Updating the dish: '+ req.params.dishId + '\n');
    res.end('the modified this now is: '+ req.body)
})

app.delete('/dishes/:dishId',(req, res, next) => {
    res.end('Deleting the dish: '+ req.params.dishId);
})

// Serve the html files from the public folder 
app.use(express.static(__dirname+'/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1>Hello world</h1></body></html>');
})

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server running at port : ${port}`);
})
