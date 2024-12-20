import mongoose from "mongoose"

let mongo = ( global as any).mongoose || { connection : null, promise : null }

const mongo_URI = process.env.MONGODB_URI

export const connectDB = async() =>{
    if(mongo.connection){
        return mongo.connection
    }
    if( mongo_URI != null ){
        mongo.promise = mongoose.connect(mongo_URI, {
            dbName : 'events-platform',
            bufferCommands : false
        });
        mongo.connection = await mongo.promise;
    }
    return mongo.connection;
}