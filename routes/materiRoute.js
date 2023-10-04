const materiController = require('../controllers/materiController');
const express = require('express');
const materiRouter = express.Router();


// POST - CREATE Method
materiRouter.post('/', materiController.createMateri);
// GET - READ Method
materiRouter.get('/', materiController.getMateri); 
// GET Materi By Id
materiRouter.get('/:materiId', materiController.getMateriById);
// GET Materi By Course Id
materiRouter.get('/course/:courseId/', materiController.getMateriByCourseId);
// PATCH - UPDATE Method
materiRouter.patch('/:materiId', materiController.updateMateri);
// DELETE MEthod
materiRouter.delete('/:materiId', materiController.deleteMateri);



module.exports = materiRouter;