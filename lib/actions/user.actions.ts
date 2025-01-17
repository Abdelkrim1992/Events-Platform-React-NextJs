'user server'

import { CreateUserParams, UpdateUserParams } from '@/types';

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

export const UpdateUser = async (Id : string, user: UpdateUserParams) =>{
    try {

        const updateUser = await prisma.user.update({ 
            where : { Id },
            data : user
        });

        return updatUser;

    } catch (error) {
        throw new Error('error updatedUser')
    }
}

export const DeleteUser = async (Id : string) =>{
    try {

        const deleteUser = await prisma.user.delete({ 
            where : { Id }
         })
        
        return deleteUser;

    } catch (error) {
        console.log('error in delete user action')
    }
}