"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { eventFormSchema } from "@/lib/validator"
import { eventDefaultValues } from "../constants/HeaderLinks"
import Dropdown from "../ui/Dropdown"

type EventFormProp = {
    userId: string,
    type : "Create" | "Update"
}

const EventForm = ({userId, type}: EventFormProp) => {

    const initialValue = eventDefaultValues;

    const form = useForm<z.infer<typeof eventFormSchema>>({
        resolver: zodResolver(eventFormSchema),
        defaultValues: initialValue
    })
     
    function onSubmit(values: z.infer<typeof eventFormSchema>) {

        console.log(values)
    }

  return (
  <Form {...form}>
    <form  className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 md:flex-row">
       <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input placeholder="Enter Title" {...field} className="input-field" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
       />
              <FormField
        control={form.control}
        name="category"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Dropdown onChangeHandler="" value=""/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
       />
        <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>Title</FormLabel>
            <FormControl>
              <Input placeholder="Enter Title" {...field} className="input-field" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
       />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default EventForm;