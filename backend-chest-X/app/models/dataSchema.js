const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    
    path: {
        type: String,
    }

},
    {timestamps: true}
);

// defining a schema
// const schema = new mongoose.Schema({
//     name: {
//         type: String,
//     },
//     email: {
//         type: String,
//     },
//     fileType: {
//         type: String,
//     },
//     url: {
//         type: String,
//     }

// },
//     {timestamps: true}
// );

// schema.method('toJoin', ()=>{
//     const {__v, _id, ...object} = this.toObject();
//     object.id = _id;
//     return object;
// });


// Compiling the schema into a model
// module.exports = mongoose.model('patientInfo', schema);
module.exports = mongoose.model('image', schema);

// creating a sample document of our schema. An instance of a schema is a document
// const firstData = new xRayFile({name: 'Bolaji Koyi', email: 'bolaji.koyi@yahoo.com', fileType: 'jpeg', url: 'http://localhost:8081/files/image.jpeg'});
// console.log(firstData.name);

// saving our sample data to database
// firstData.save()
//     .then(()=> console.log('Data successfully saved in the database'))
//     .catch(()=> console.log('ERROR!! unable to save data in the database'))


// module.exports = xRayFile;