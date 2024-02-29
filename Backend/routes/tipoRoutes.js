// Requerimos las librerias
const express = require('express');
const router = express.Router();
const Tipo = require('../models/tipo');
const tipoController = require('../controllers/tipoController');

// Obtenemos datos de los tipos
// router.get('/', async (req, res) => {
//     try {
//         // Buscamos todos los tipos en la base de datos
//         const tipos = await Tipo.find();
//         // Respondemos con los tipos encontrados en formato JSON
//         res.json(tipos);
//     } catch (err) {
//         // Manejamos los errores con un código 500
//         res.status(500).json({ meessage: err.meessage });
//     };
// });

router.get('/', tipoController.getAllTipos);
router.post('/', tipoController.addTipo);
// Creamos un nuevo tipo
// router.post('/', async (req, res) => {
//     // Creamos un nuevo objeto tipo utilizando los datos proporcionados
//     const tipo = new Tipo({
//         Nombre: req.body.Nombre,
//         Descripcion: req.body.Descripcion
//     });

//     try {
//         // Guardamos el nuevo tipo en la base de datos
//         const newTipo = await tipo.save();
//         // Respondemos co nel tipo recién creado en formato JSON
//         res.status(201).json(newTipo);
//     } catch (err) {
//         // Manejamos los errore de las validaciones y respondemos con un código 400
//         res.status(400).json({ message: err.message });
//     };
// });

// // Actualizamos un tipo existente
// router.patch('/:id', async (req, res) => {
//     // Actualizamos los campos del tipo según los datos proporcionados en el cuerpo del esquema
//     if(req.body.Nombre != null) {
//         res.tipo.Nombre = req.body.Nombre;
//     };
//     if(req.body.Descripcion != null) {
//         res.tipo.Descripcion = req.body.Descripcion;
//     };

//     try {
//         // Guardamos los cambios realizados en el tipo actualizado en la base de datos
//         const updateTipo = await res.tipo.save();
//         // Responder con el tipo actualizado en formato JSON
//         res.json(updateTipo);
//     } catch (err) {
//         // Manejamos los errores de validación y respondemos con un código 400
//         res.status(400).json({ message: err.message });
//     };
// });

// // Borramos un tipo existente
// router.delete('/:id', async (req, res) => {
//     try {
//         // Eliminar el tipo encontrado en la base de datos
//         await res.tipo.remove();
//         //Responder con un mensaje indicando que el tipo  ha sdo eliminado
//         res.json({ message: err.meessage });
//     } catch (err) {
//         // Manejamos el error y respondemos con un código de estado 500
//         res.status(500).json({ message: err.message });
//     };
// });

// // Middleware para obtener un tipo por su ID
// async function getTipo(req, res, next) {
//     let tipo;

//     try {
//         // Buscamos un tipo por su ID en la base de datos
//         tipo = await Tipo.findById(req.params.id);
//         if(tipo == null) {
//             // Si no se encuentra el tipo, respondemos  con un código de estado 404
//             return res.status(404).json({ message: 'Tipo no encontrado' });
//         }
//     } catch (err) {
//         // Manejamos los errores y respondemos con un código de estado 500
//         return res.status(500).json({ message: err.meessage });
//     };
// };

// Si se encuentra el t ipo, almacenarlo en el objeto de respuesta para su uso



// Exportamos el enrutador para su uso en cualquier parte de la app
module.exports = router;