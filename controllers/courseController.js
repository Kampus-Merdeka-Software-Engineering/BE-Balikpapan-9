const courseService = require('../services/courseService');


// POST - CREATE Method
async function createCourse(req, res) {
    try {
        const course = await courseService.createCourse(req.body);
        res.status(201).json({
            message: "Success POST/CREATE Course",
            data: course
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// GET - READ Method
async function getCourse(req, res) {
    try {
        const course = await courseService.getCourse();
        res.status(200).json({
            message: "Success GET/READ All Course",
            data: course
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}
// GET Course By ID
async function getCourseById(req, res) {
    const { courseId } = req.params;
    try {
        const course = await courseService.getCourseById(courseId);
        if (!course) {
            res.status(404).json({message: "Course Not Found"});
        }
        res.status(200).json({
            message: "Success GET Course",
            data: course
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// PATCH - UPDATE Method
async function updateCourse(req, res) {
    const { courseId } = req.params;
    const { body } = req;
    try {
        await courseService.updateCourse(body, courseId);
        res.status(200).json({
            message: "Success PATCH/UPDATE Course",
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// DELETE Method
async function deleteCourse(req, res) {
    const { courseId } = req.params;
    try {
        await courseService.deleteCourse(courseId);
        res.status(200).json({
            message: "Success DELETE Course"
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}



module.exports = {
    createCourse,
    getCourse,
    getCourseById,
    updateCourse,
    deleteCourse
}