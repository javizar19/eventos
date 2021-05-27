const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventosSchema = new Schema({
    title: {
        type: String
    }, 
    description: {
        type: String
    }
}, 
{ versionKey: false }
);

module.exports = mongoose.model('Eventos', eventosSchema);