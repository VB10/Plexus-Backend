const express = require('express')
const bodyParser   = require('body-parser')
const app          = express()
const port         = process.env.PORT ||3000
const loginRouter2 = require('../lib/authentication/login/router/login_router')

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api',loginRouter2);
app.listen(port, () => console.log(`Example app listening on port port!`))