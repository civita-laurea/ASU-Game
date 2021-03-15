const mongoose = require('mongoose')

const connectDB = async() => {
    try{
        //mongodb connection string from .env file
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log("Mongodb connected to: " + conn.connection.host)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB