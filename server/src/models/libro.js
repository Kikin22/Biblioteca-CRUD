const {Schema, model} = require('mongoose');


const libroSchema = new Schema({
    name: { type: String, require: true},
    editor: { type: String, require: true},
    author:  { type: String, require: true},
    year:  { type: Number, require: true}
},{
    timestamps: true,
    versionKey: false
});

//mongoose.model con esto pasamos a un modelo de datos de mongoose
module.exports = model('Libro', libroSchema);