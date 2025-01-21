import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/database/db";

export async function checkUser(){
    const user = await currentUser();

    // if the user in not loggin
    if(!user){
        return null;
    }

    // check if user is already in database
    const logginUser = await prisma.user.findUnique({
        where : {
            clerkId: user.id
        }
    })

    // if user is already in database , return user data
    if(logginUser){
        return logginUser;
    } 

    // if not in database, create the user
    const newUser = await prisma.user.create({
        data : {
            clerkId : user.id,
            email : user.emailAddresses[0].emailAddress,
            userName : user.username,
            imageURL : user.imageUrl,
        }
    })

    return newUser;
}