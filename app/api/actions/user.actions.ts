"use server";

import { currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/database/db";
import { UpdateUserParams } from "@/types";

export async function CreateUser() {
  try {
    const user = await currentUser();

    // if the user in not loggin
    if (!user) {
      return null;
    }

    // check if user is already in database
    const logginUser = await prisma.user.findUnique({
      where: {
        clerkId: user.id,
      },
    });

    // if user is already in database , return user data
    if (logginUser) {
      return logginUser;
    }

    // if not in database, create the user
    const newUser = await prisma.user.create({
      data: {
        clerkId: user.id,
        email: user.emailAddresses[0].emailAddress,
        userName: user.username,
        imageURL: user.imageUrl,
      },
    });

    return JSON.parse(JSON.stringify(newUser));

  } catch (error) {
    console.error("Error in createUser:", error);
    throw new Error("Failed to createUser.");
  }
}

export async function UpdateUser(clerkId : string, data : UpdateUserParams){
  try {
    
    const updateUser = await prisma.user.update({
      where :{
        clerkId
      },
      data,
    })

    return JSON.parse(JSON.stringify(updateUser));

  } catch (error) {
    console.error("Error in updateUser:", error);
    throw new Error("Failed to update user.");
  }
}

export async function DeleteUser(clerkId : string){
  try {
    
    const deleteUser = await prisma.user.delete({
      where :{
        clerkId
      }
    })

    return JSON.parse(JSON.stringify(deleteUser));

  } catch (error) {
    console.error("Error in deleteUser:", error);
    throw new Error("Failed to deleteUser.");
  }
}