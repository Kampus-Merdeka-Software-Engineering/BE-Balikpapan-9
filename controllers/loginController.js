const loginService = require('../services/loginService');


async function authentication(req, res) {
    const { usernameOrEmail, plainPassword } = req.body;

    const result = await loginService.authentication(usernameOrEmail, plainPassword);

    if (result.success) {
        res.status(200).redirect('https://kampus-merdeka-software-engineering.github.io/FE-Balikpapan-9/admin-dashboard');
        res.status(401).json({
            message: result.message
        });
    }
}


module.exports = {
    authentication
}