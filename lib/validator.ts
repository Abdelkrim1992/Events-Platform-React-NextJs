import { z } from "zod"

export const eventFormSchema = z.object({
    title: z.string().min(2,'Title is short'),
    description : z.string().min(5, 'Description is to short'),
    location : z.string().min(5,'location mustion be more that 5 caracter'),
    imageURL : z.string(),
    startDateTime : z.date(),
    endDateTime : z.date(),
    category : z.string(),
    price : z.string(),
    isFree : z.boolean(),
    url : z.string().url()
})