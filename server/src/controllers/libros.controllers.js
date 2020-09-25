const libroCrtl={}

const Libro = require('../models/libro')

libroCrtl.getLibros = async (req, res) =>{
    const libros = await Libro.find()
    res.json(libros);
}
libroCrtl.createLibros = async (req, res) =>{
   const nuevoLibro = new Libro(req.body)
   await nuevoLibro.save()
    //console.log(nuevoLibro);
    res.send({mensaje: "Libro creado"})
}
libroCrtl.getLibro = async (req, res) =>{
   //req.params
   const libro = await Libro.findById(req.params.id) 
    res.send(libro);
}
libroCrtl.editLibro = async (req, res) =>{
    await Libro.findByIdAndUpdate(req.params.id, req.body);
    res.json({status: "Libro actualizado"});
}

libroCrtl.deleteLibro = async (req, res) =>{
   await Libro.findByIdAndDelete(req.params.id)
    res.json({status:"Libro eliminado"})
}

module.exports = libroCrtl;