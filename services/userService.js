const { prisma } = require('../config/prisma');
const bcrypt = require('bcrypt');


// Fungsi Hash password
const hashPassword = async (password) => {
    const saltRounds = 10;
    return bcrypt.hash(password, saltRounds);
};


// POST - CREATE Method
const createUser = async(user) => {
    try {
        // Hash password
        const hashedPassword = await hashPassword(user.password);
        const createdUser = prisma.user.create({
            data: {
                id: user.id,
                username: user.username,
                email: user.email,
                password: hashedPassword,
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
const updateUser = async(user, userId) => {
    try {
        // Hash password
        const hashedPassword = await hashPassword(user.password);
        const updatedUser = prisma.user.update({
            where: {
                id: Number(userId)
            },
            data: {
                id: user.id,
                username: user.username,
                email: user.email,
                password: hashedPassword,
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