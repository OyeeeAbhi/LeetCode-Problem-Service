const express = require('express');
const bodyParser = require('body-parser');


const {PORT} = require('./config/server.js');
const apiRouter = require('./routes/index.js');
const errorHandler = require('./utils/errorHandler.js');

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.text());

app.use('/api' , apiRouter);

app.get('/ping' , (req , res) =>{
    return res.json({message : 'Problem service is alive'});
})

//if any error comes 
app.use(errorHandler);


app.listen(PORT , ()=>{
    console.log('listening on port : ' , PORT);
})