const mongoose = require('mongoose');
const mongodbUri= 'mongodb://127.0.0.1:27017/testUsers'

const connectToMongo = () => {
    mongoose.connect(mongodbUri).then(
        console.log("connected to database successfully")
    )
}
module.exports = connectToMongo;


