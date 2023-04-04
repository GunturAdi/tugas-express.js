exports.helloWorld = (req, res, next) => {
    res.send('<h1>Welcome To My Website</h1>');
};

exports.getProject = (req, res, next) => {
    res.send('<h1>Selamat datang di Project saya</h1>');
};

exports.getFooter = (req, res, next) => {
    res.send('<h1>Ini halaman footer saya</h1>');
};