const express = require('express');
const http = require('http');
const morgan = require('morgan')
const port = 3000;
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promotionsRouter = require('./routes/promotionsRouter')
const leadersRouter = require('./routes/leaderRouter')
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

// Mount the router
app.use('/dishes', dishRouter);
app.use('/promotions',promotionsRouter)
app.use('/leaders',leadersRouter)
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
