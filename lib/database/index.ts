import mongoose from "mongoose";

let mongo = (global as any).mongoose || { connection: null, promise: null };

const mongo_URL = process.env.MONGODB_URI;

export const connectionDB = async () => {
  if (mongo.connection) {
    return mongo.connection;
  }
  
  if (!mongo_URL) {
    throw new Error("Error: MongoDB URI is missing in environment variables");
  }

  mongo.promise = mongoose.connect(mongo_URL, {
    dbName: "Events",
  });
  mongo.connection = await mongo.promise;

  return mongo.connection;
};
