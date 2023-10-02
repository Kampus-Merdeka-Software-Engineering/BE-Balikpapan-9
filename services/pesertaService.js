const { prisma } = require('../config/prisma');


// POST - CREATE Method
async function createPeserta(nama, gender, usia, email, no_telepon, title) {
    try {
        const course = await prisma.course.findFirst({
            where: {
                title: title,
            },
        });

        if (course) {
            const createdPeserta = await prisma.peserta.create({
                data: {
                    nama,
                    gender,
                    usia,
                    email,
                    no_telepon,
                    course: {
                        connect: {
                          id: course.id,
                        },
                    },
                },
            });
            return createdPeserta;
        } else {
            throw new Error(`Course with title '${title}' not found`);
        }
    } catch (error) {
        console.error("Error in createPeserta:", error);
        throw error;
    }
}



// GET - READ Method
const getPeserta = () => {
    try {
        const peserta = prisma.peserta.findMany({
            include: {
                course: {
                    select: {
                        title: true,    
                    }
                }
            }
        });
        return peserta;
    } catch (error) {
        console.log(error);
    }
}
// GET Peserta By ID
const getPesertaById = (pesertaId) => {
    try {
        const peserta = prisma.peserta.findUnique({
            where: {
                id: Number(pesertaId)
            }
        });
        return peserta;
    } catch (error) {
        console.log(error);
    }
}


// PATCH - UPDATE Method
async function updatePeserta(pesertaId, nama, gender, usia, email, no_telepon, title) {
    try {
        const course = await prisma.course.findFirst({
            where: {
                title: title,
            },
        });
        
        if (course) {
            const updatedPeserta = await prisma.peserta.update({
                where: {
                    id: Number(pesertaId),
                },
                data: {
                    nama,
                    gender,
                    usia,
                    email,
                    no_telepon,
                    course: {
                        connect: {
                          id: course.id,
                        },
                    },
                },
            });
            return updatedPeserta;
        } else {
            throw new Error(`Course with title '${title}' not found`);
        }
    } catch (error) {
        console.error("Error in createPeserta:", error);
        throw error;
    }
}


// DELETE MEthod
const deletePeserta = (pesertaId) => {
    try {
        const deletedPeserta = prisma.peserta.delete({
            where: {
                id: Number(pesertaId)
            }
        })
        return deletedPeserta;
    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    createPeserta,
    getPeserta,
    getPesertaById,
    updatePeserta,
    deletePeserta
}