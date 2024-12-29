'user server'
import { CreateUserParams, UpdateUserParams } from '@/types';
import { connectionDB } from '../database/index';
import User  from '../models/user.model';

export const CreateUser = async(user : CreateUserParams) =>{
    try {
        await connectionDB();

        const newUser = await User.create(user)

        JSON.parse(JSON.stringify(newUser));

    } catch (error) {
        console.log('error in CreateUser')
    }
}

export const UpdateUser = async (clerkId : String, user: UpdateUserParams) =>{
    try {

        await connectionDB();

        const updateUser = await User.findByIdAndUpdate({clerkId}, user);

        return JSON.parse(JSON.stringify(updateUser));

    } catch (error) {
        console.log('error in update user action')
    }
}

export const DeleteUser = async(clerkId : String) =>{
    try {
        
        await connectionDB();

        const deleteUser = await User.findByIdAndDelete({clerkId});
        
        return JSON.parse(JSON.stringify(deleteUser));

    } catch (error) {
        console.log('error in delete user action')
    }
}