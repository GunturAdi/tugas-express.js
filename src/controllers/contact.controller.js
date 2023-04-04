exports.getContact = (req, res, next) => {
    res.send({
        message: `saya ingin meraih cita-cita saya`,
        nama: `Guntur Adi Wijaya`,
        asal: `Jakarta`,
        domisili: `Jakarta Utara`
    });
};