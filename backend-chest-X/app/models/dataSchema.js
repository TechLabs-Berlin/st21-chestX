const mongoose = require('mongoose');

const schema = new mongoose.Schema({
name: {
        type: String,
    },
    file: {
        type: String,
    },
    description: {
        type: String,
    }

},
    {timestamps: true}
);

schema.method('toJoin', ()=>{
    const {__v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
});



const Data = mongoose.model('data', schema);

const firstData = new Data({name: 'Bolaji', file: 'jpeg', description: 'Sample file to test the datadase'});
firstData.save()
    .then(()=> console.log('Data successfully saved in the database'))
    .catch(()=> console.log('ERROR!! unable to save data in the database'))


module.exports = Data;