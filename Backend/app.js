const express = require('express')
require('dotenv').config()
const dbConnection = require('./DbConnection/dbConnection')
const authrouter = require('./Routes/userRoutes')

const app = express()

const PORT = process.env.PORT || 5000

dbConnection()

app.get('/',(req,res)=>{
    res.send('Welcome Here')
})

app.use('/', authrouter)



module.exports = app