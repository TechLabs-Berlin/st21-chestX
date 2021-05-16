const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override')


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Data = require('./app/models/dataSchema');

// set port, listen for requests
const PORT = process.env.PORT || 8081;

const corsOptions = {
    origin: 'http://localhost:4200'
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/chest-X', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Mongo Connection Open!!!')
})
.catch(e =>{
    console.log('Mongo Connection Error!!')
    console.log(e)
})

app.get('/', (req, res)=>{
    res.send('chest-X app')
})

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})

