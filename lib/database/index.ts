import mongoose from "mongoose"

let mongo = (global as any).mongoose || { connection : null , promise : null}

const mongo_URL = process.env.MONGODB_URI

export const connectionDB = async () =>{
    if(mongo.connection){
        return mongo.connection
    }
    if(!mongo_URL){
        throw new Error('error connection database')
    } else {
        mongo.promise = mongoose.connect( mongo_URL, {
            dbName : 'event-platform',
        })
        mongo.connection = await mongo.promise
    }
    return mongo.connection
}