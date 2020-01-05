const express = require('express')
const {getSample} = require('../../lib/authentication/login/loginService')

// const express = require('../')


function routes() {
     const loginRouter = express.Router();
     loginRouter.route('/login').get((getSample));
     return loginRouter;
}

module.exports = routes();