import { Schema, model, models } from "mongoose";

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