const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override')


global.__basedir = __dirname;



const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const xRayFile = require('./app/models/dataSchema');


// set port, listen for requests
const PORT = process.env.PORT || 8081;

const corsOptions = {
    origin: 'http://localhost:4200'
};

app.use(cors(corsOptions));

const initRoutes = require('./app/routes/xRayFile.routes')

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
initRoutes(app);

// we are granting access to the image folder to be accessible when a request is made
const path = require('path');
app.use("/images", express.static(path.join("backend-chest-X/images/uploads")));
console.log(app.use("/images", express.static(path.join("backend-chest-X/images/uploads"))))

mongoose.connect('mongodb://localhost:27017/chest-X', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('MongoDB Connection Open!!!')
})
.catch(e =>{
    console.log('MongoDB Connection Error!!')
    console.log(e)
})

app.get('/', (req, res)=>{
    res.send('chest-X app')
});

//creating a sample data to save in the database
// const sampleData = new xRayFile({name: 'Bolaji Koyi', file: 'jpeg', description: 'Sample file to test the database'});
// sampleData.save()
//     .then(()=> console.log('New data successfully saved in the database'))
//     .catch(()=> console.log('ERROR!! unable to save data in the database'))



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

