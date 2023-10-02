const courseController = require('../controllers/courseController');
const express = require('express');
const courseRouter = express.Router();


// POST - CREATE Method
courseRouter.post('/', courseController.createCourse);
// GET - READ Method
courseRouter.get('/', courseController.getCourse);
// GET Course By Id
courseRouter.get('/:courseId', courseController.getCourseById);
// PATCH - UPDATE Method
courseRouter.patch('/:courseId', courseController.updateCourse);
// DELETE Method
courseRouter.delete('/:courseId', courseController.deleteCourse);



module.exports = courseRouter;