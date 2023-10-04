const materiService = require('../services/materiService');


// POST - CREATE Method
async function createMateri(req, res) {
    const { materi, title } = req.body;
    try {
        const materii = await materiService.createMateri(materi, title);
        res.status(201).json({
            message: "Success POST/CREATE Materi",
            data: materii
        })
    } catch (error) {
        res.status(500).json({ 
            message: error
        })
    }
}


// GET - READ Method
async function getMateri(req, res) {
    try {
        const materi = await materiService.getMateri();
        res.status(200).json({
            message: "Success GET/READ All Materi",
            data: materi
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

// GET Materi By ID
async function getMateriById(req, res) {
    const { materiId } = req.params;
    try {
        const materi = await materiService.getMateriById(materiId);
        if (!materi) {
            res.status(404).json({message: "Materi (404) Not Found"});
        }
        res.status(200).json({
            message: "Success GET Materi",
            data: materi
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    } 
}

// GET Materi By Course ID
async function getMateriByCourseId(req, res) {
    const { courseId } = req.params;
    try {
        const materi = await materiService.getMateriByCourseId(courseId);
        if (!materi) {
            res.status(404).json({message: "Materi (404) Not Found"});
        }
        res.status(200).json({
            message: "Success GET Materi",
            data: materi
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// PATCH - UPDATE Method
async function updateMateri(req, res) {
    const { materiId } = req.params;
    const { materi, title } = req.body;
    try {
        await materiService.updateMateri(materiId, materi, title);
        res.status(200).json({
            message: "Success PATCH/UPDATE Materi",
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// DELETE Method
async function deleteMateri(req, res) {
    const { materiId } = req.params;
    try {
        await materiService.deleteMateri(materiId);
        res.status(200).json({
            message: "Success DELETE Materi"
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
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