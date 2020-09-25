const {Router} = require('express');
//const libroCrtl = require('../controllers/libros.controllers');
const router = Router()

const libroCtrl = require('../controllers/libros.controllers')

router.get('/', libroCtrl.getLibros);

router.post('/', libroCtrl.createLibros);

router.get('/:id', libroCtrl.getLibro);

router.put('/:id', libroCtrl.editLibro);

router.delete('/:id', libroCtrl.deleteLibro);

module.exports = router