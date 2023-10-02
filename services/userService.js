const { prisma } = require('../config/prisma');


// POST - CREATE Method
const createUser = (user) => {
    try {
        const createdUser = prisma.user.create({
            data: {
                id: user.id,
                username: user.username,
                email: user.email,
                password: user.password,
                role: user.role
            }
        });
        return createdUser;
    } catch (error) {
        console.log(error);
    }
}


// GET - READ Method
const getUser = () => {
    try {
        const user = prisma.user.findMany();
        return user;
    } catch (error) {
        console.log(error);
    }
}
// GET User By ID
const getUserById = (userId) => {
    try {
        const user = prisma.user.findUnique({
            where: {
                id: Number(userId)
            }
        });
        return user;
    } catch (error) {
        console.log(error);
    }
}


// PATCH - UPDATE Method
const updateUser = (user, userId) => {
    try {
        const updatedUser = prisma.user.update({
            where: {
                id: Number(userId)
            },
            data: {
                username: user.username,
                email: user.email,
                password: user.password,
                role: user.role
            }
        });
        return updatedUser;
    } catch (error) {
        console.log(error);
    }
}


// DELETE MEthod
const deleteUser = (userId) => {
    try {
        const deletedUser = prisma.user.delete({
            where: {
                id: Number(userId)
            }
        })
        return deletedUser;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    createUser,
    getUser,
    getUserById,
    updateUser,
    deleteUser
}