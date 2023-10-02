const userService = require('../services/userService');


// POST - CREATE Method
async function createUser(req, res) {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json({
            message: "Success POST/CREATE User",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// GET - READ Method
async function getUser(req, res) {
    try {
        const user = await userService.getUser();
        res.status(200).json({
            message: "Success GET/READ All User",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}
// GET User By ID
async function getUserById(req, res) {
    const { userId } = req.params;
    try {
        const user = await userService.getUserById(userId);
        if (!user) {
            res.status(404).json({message: "User Not Found"});
        }
        res.status(200).json({
            message: "Success GET User",
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// PATCH - UPDATE Method
async function updateUser(req, res) {
    const { userId } = req.params;
    const { body } = req;
    try {
        await userService.updateUser(body, userId);
        res.status(200).json({
            message: "Success PATCH/UPDATE User",
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// DELETE Method
async function deleteUser(req, res) {
    const { userId } = req.params;
    try {
        await userService.deleteUser(userId);
        res.status(200).json({
            message: "Success DELETE User"
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


module.exports = {
    createUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser
}