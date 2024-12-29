'user server'
import { CreateUserParams } from '@/types';
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