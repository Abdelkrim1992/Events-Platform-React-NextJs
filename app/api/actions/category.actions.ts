'use server '

import prisma from "@/lib/database/db";
import { CreateCategoryParams } from "@/types";

export const createCategory = async({ categoryName } : CreateCategoryParams) =>{
    try {
        
        const newCategory = await prisma.category.create({
            data : {
                name : categoryName
            }
        })

        return JSON.parse(JSON.stringify(newCategory))

    } catch (error) {
        throw new Error('failed to createCategory')
    }
}

export const getAllCategories = async() =>{
    try {
        
        const categories = await prisma.category.findMany();

        return JSON.parse(JSON.stringify(categories))

    } catch (error) {
        throw new Error('failed to getAllCategories')
    }
}