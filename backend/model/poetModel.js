const mongoose = require('mongoose')


const  poetSchema = new mongoose.Schema({

    poet: {
        type: String,
        required: true
    },
    data :{
        type: String,
        required: true
    }

});

const poetModel = new mongoose.model('Poet',poetSchema);

module.exports = poetModel;