const userController = require('../controllers/userController');
const express = require('express');
const userRouter = express.Router();


// POST - CREATE Method
userRouter.post('/', userController.createUser);
// GET - READ Method
userRouter.get('/', userController.getUser);
// GET User By Id
userRouter.get('/:userId', userController.getUserById);
// PATCH - UPDATE Method
userRouter.patch('/:userId', userController.updateUser);
// DELETE Method
userRouter.delete('/:userId', userController.deleteUser);



module.exports = userRouter;
