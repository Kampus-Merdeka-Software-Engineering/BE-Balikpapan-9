const pesertaService = require('../services/pesertaService');


// POST - CREATE Method
async function createPeserta(req, res) {
    const { nama, gender, usia, email, no_telepon, title } = req.body;
    try {
        const peserta = await pesertaService.createPeserta(nama, gender, usia, email, no_telepon, title);
        res.status(201).json({
            message: "Success POST/CREATE Peserta",
            data: peserta
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// GET - READ Method
async function getPeserta(req, res) {
    try {
        const peserta = await pesertaService.getPeserta();
        res.status(200).json({
            message: "Success GET/READ All Peserta",
            data: peserta
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}

// GET Peserta By Id
async function getPesertaById(req, res) {
    const { pesertaId } = req.params;
    try {
        const peserta = await pesertaService.getPesertaById(pesertaId);
        if (!peserta) {
            res.status(404).json({message: "Peserta Not Found"});
        }
        res.status(200).json({
            message: "Success GET Peserta",
            data: peserta
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// POST - UPDATE Method
async function updatePeserta(req, res) {
    const { pesertaId } = req.params;
    const { nama, gender, usia, email, no_telepon, title } = req.body;
    try {
        await pesertaService.updatePeserta(pesertaId, nama, gender, usia, email, no_telepon, title);
        res.status(200).json({
            message: "Success PATCH/UPDATE Peserta",
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}


// DELETE Method
async function deletePeserta(req, res) {
    const { pesertaId } = req.params;
    try {
        await pesertaService.deletePeserta(pesertaId);
        res.status(200).json({
            message: "Success DELETE Peserta"
        })
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}




module.exports = {
    createPeserta,
    getPeserta,
    getPesertaById,
    updatePeserta,
    deletePeserta
}