'user server'

import { CreateUserParams, UpdateUserParams } from '@/types';
import prisma from '../db';

export const CreateUser = async(user : CreateUserParams) =>{
    try {
        const newUser = await prisma.user.create({ 
            data : user,
         })
        return newUser;

    } catch (error) {
        throw new Error('error in createUser')
    }
}

export const UpdateUser = async (id : string, user: UpdateUserParams) =>{
    try {
        const updateUser = await prisma.user.update({ 
            where : { id },
            data : user
        });

        return updateUser;

    } catch (error) {
        throw new Error('error updatedUser')
    }
}

export const DeleteUser = async (id : string) =>{
    try {

        const deleteUser = await prisma.user.delete({ 
            where : { id }
         })
        
        return deleteUser;

    } catch (error) {
        console.log('error in delete user action')
    }
}