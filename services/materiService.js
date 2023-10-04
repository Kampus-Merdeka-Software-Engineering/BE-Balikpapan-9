const { prisma } = require('../config/prisma');


// POST - CREATE Method
const createMateri = async(materi, title) => {
    try {
        const course = await prisma.course.findFirst({
            where: {
                title: title,
            },
        });

        if (course) {
            const createdMateri = await prisma.materi.create({
                data: {
                    materi,
                    course: {
                        connect: {
                            id: course.id,
                        },
                    },
                },
            });
            return createdMateri;
        } else {
            throw new Error(`Course with title '${title}' not found`);
        }
    } catch (error) {
        console.error("Error in createMateri:", error);
        throw error;
    }
}


// GET - READ Method
const getMateri = () => { 
    try {
        const materi = prisma.materi.findMany({
            include: {
                course: {
                    select: {
                        title: true,    
                    }
                }
            }
        });
        return materi;
    } catch (error) {
        console.log(error);
    }
}

// GET Materi By ID
const getMateriById = (materiId) => {
    try {
        const materi = prisma.materi.findUnique({
            where: {
                id: Number(materiId)
            }
        });
        return materi;
    } catch (error) {
        console.log(error);
    }
}

// GET Materi By Course ID
const getMateriByCourseId = async(courseId) => {
    try {
        const materi = await prisma.materi.findMany({
            where: {
                course_Id: Number(courseId),
            },
            select: {
                materi: true,
            },
        });
        return materi;
    } catch (error) {
        console.log(error);
    }
}


// PATCH - UPDATE Method
const updateMateri = async(materiId, materi, title) => {
    try {
        const materii = await prisma.course.findFirst({
            where: {
                title: title,
            },
        });

        if (materii) {
            const updatedMateri = await prisma.materi.update({
                where: {
                    id: Number(materiId),
                },
                data: {
                    materi,
                    course: {
                        connect: {
                            id: materii.id,
                        },
                    },
                },
            });
            return updatedMateri;
        } else {
            throw new Error(`Course with title '${title}' not found`);
        }
    } catch (error) {
        console.log(error);
    }
}


// DELETE Method
const deleteMateri = (materiId) => {
    try {
        const deletedMateri = prisma.materi.delete({
            where: {
                id: Number(materiId)
            }
        })
        return deletedMateri;
    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    createMateri,
    getMateri,
    getMateriById,
    getMateriByCourseId,
    updateMateri,
    deleteMateri
}