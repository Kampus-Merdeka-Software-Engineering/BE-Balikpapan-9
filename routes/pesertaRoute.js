const pesertaController = require('../controllers/pesertaController');
const express = require('express');
const pesertaRouter = express.Router();

// POST - CREATE Method
pesertaRouter.post('/', pesertaController.createPeserta);
// GET - READ Method
pesertaRouter.get('/', pesertaController.getPeserta); 
// GET Peserta By Id
pesertaRouter.get('/:pesertaId', pesertaController.getPesertaById);
// PATCH - UPDATE Method
pesertaRouter.patch('/:pesertaId', pesertaController.updatePeserta);
// DELETE MEthod
pesertaRouter.delete('/:pesertaId', pesertaController.deletePeserta);


 
module.exports = pesertaRouter;