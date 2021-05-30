const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    fileType: {
        type: String,
    },
    url: {
        type: String,
    }

},
    {timestamps: true}
);

// schema.method('toJoin', ()=>{
//     const {__v, _id, ...object} = this.toObject();
//     object.id = _id;
//     return object;
// });



const xRayFile = mongoose.model('patientInfo', schema);

const firstData = new xRayFile({name: 'Bolaji Koyi', email: 'bolaji.koyi@yahoo.com', fileType: 'jpeg', url: 'http://localhost:8081/files/image.jpeg'});
firstData.save()
    .then(()=> console.log('Data successfully saved in the database'))
    .catch(()=> console.log('ERROR!! unable to save data in the database'))


module.exports = xRayFile;