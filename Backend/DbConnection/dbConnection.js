const mongoose = require('mongoose')
require('dotenv').config()

const URI = process.env.URI || `mongodb://localhost:27017/Audio`

const dbConnection = async()=>{
    try {

        const connection = await mongoose.connect(URI)
        if(connection){
            console.log('Connected to DataBase')
        }
        
    } catch (error) {
        console.log('Some DataBase Error Occured : ' ,error.message)
        process.exit()
    }
}

module.exports = dbConnection