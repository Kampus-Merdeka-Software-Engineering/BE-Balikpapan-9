const loginService = require('../services/loginService');


async function authentication(req, res) {
    const { usernameOrEmail, plainPassword } = req.body;

    const result = await loginService.authentication(usernameOrEmail, plainPassword);

    if (result.success) {
        res.status(200).json({
            message: 'Login Success', 
            user: result.user
        });
    } else {
        res.status(401).json({
            message: result.message
        });
    }
}


module.exports = {
    authentication
}