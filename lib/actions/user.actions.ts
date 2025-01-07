'user server'

import { CreateUserParams, UpdateUserParams } from '@/types';
import { connectionDB } from '../database/index';
import User  from '../models/user.model';
import Event from '../models/event.model';
import Category from '../models/category.model';
import Order from '../models/order.model';

export const CreateUser : any = async(user : CreateUserParams) =>{
    try {
        await connectionDB();

        const newUser = await User.create(user);

        return JSON.parse(JSON.stringify(newUser));

    } catch (error) {
        throw new Error('error in createUser')
    }
}

export const UpdateUser = async (clerkId : String, user: UpdateUserParams) =>{
    try {

        await connectionDB();

        const updateUser = await User.findOneAndUpdate(clerkId, user);

        return JSON.parse(JSON.stringify(updateUser));

    } catch (error) {
        throw new Error('error updatedUser')
    }
}

export const DeleteUser = async(clerkId : String) =>{
    try {
        
        await connectionDB();

        const deleteUser = await User.findOne(clerkId);
        
        return JSON.parse(JSON.stringify(deleteUser));

    } catch (error) {
        console.log('error in delete user action')
    }
}