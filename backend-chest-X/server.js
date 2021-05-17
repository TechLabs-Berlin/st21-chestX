const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override')


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const xRayData = require('./app/models/dataSchema');


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
});

//creating a sample data to save in the database
const sampleData = new xRayData({name: 'Bolaji Koyi', file: 'jpeg', description: 'Sample file to test the datadase'});
sampleData.save()
    .then(()=> console.log('New data successfully saved in the database'))
    .catch(()=> console.log('ERROR!! unable to save data in the database'))



// this is a demonstration of how we can communicate with python files from DS/AI groups
// you can paste the below url in the browser
// http://localhost:8081/name?firstname=Ram&lastname=Sharma
app.get('/name', (req, res)=>{
    let spawn = require('child_process').spawn
    let process = spawn('python',['../python-files/hello.py', req.query.firstname, req.query.lastname]);
    process.stdout.on('data', (data)=>{
        res.send(data.toString());
    })
})

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})

