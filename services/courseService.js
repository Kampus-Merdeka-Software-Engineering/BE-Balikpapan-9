const { prisma } = require('../config/prisma');


// POST - CREATE Method
const createCourse = (course) => {
    try {
        const createdCourse = prisma.course.create({
            data: {
                id: course.id,
                title: course.title,
                image: course.image,
                content: course.content,
                start_date: course.start_date + 'T00:00:00.000Z',
                end_date: course.end_date + 'T00:00:00.000Z'
            }
        });
        return createdCourse;
    } catch (error) {
        console.log(error);
    }
}


// GET - READ Method
const getCourse = () => {
    try {
        const course = prisma.course.findMany();
        return course;
    } catch (error) {
        console.log(error);
    }
}

// GET course By ID
const getCourseById = (courseId) => {
    try {
        const course = prisma.course.findUnique({
            where: {
                id: Number(courseId)
            }
        });
        return course;
    } catch (error) {
        console.log(error);
    }
}


// PATCH - UPDATE Method
const updateCourse = (course, courseId) => {
    try {
        const updatedCourse = prisma.course.update({
            where: {
                id: Number(courseId)
            },
            data: {
                title: course.title,
                image: course.image,
                content: course.content,
                start_date: course.start_date + 'T00:00:00.000Z',
                end_date: course.end_date + 'T00:00:00.000Z'
            }
        });
        return updatedCourse;
    } catch (error) {
        console.log(error);
    }
}


// DELETE MEthod
const deleteCourse = (courseId) => {
    try {
        const deletedCourse = prisma.course.delete({
            where: {
                id: Number(courseId)
            }
        })
        return deletedCourse;
    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    createCourse,
    getCourse,
    getCourseById,
    updateCourse,
    deleteCourse
}