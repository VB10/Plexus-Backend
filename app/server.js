const express = require('express')
const app         = express()
const port        = process.env.PORT ||3000
const loginRouter = require('./routes/loginRouter')


app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api',loginRouter);
app.listen(port, () => console.log(`Example app listening on port port!`))