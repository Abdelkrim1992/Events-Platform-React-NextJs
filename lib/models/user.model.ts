import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
    _id: string;
    clerkId : string;
    username: string;
    email: string;
    first_name: string;
    last_name : string;
    image: string;
}

const UserSchema = new Schema({
    clerkId : { type: String, required: true, unique: true},
    username : { type : String, required : true, unique : true},
    email : { type : String, required : true, unique: true },
    first_name : { type : String, required : true, unique : false},
    last_name : { type : String, required : true, unique : false},
    image : { type : String , required : false, unique: false},
})

const User = model('user', UserSchema);

export default User;