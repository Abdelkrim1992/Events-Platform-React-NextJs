"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { eventFormSchema } from "@/lib/validator";
import { eventDefaultValues } from "../constants/HeaderLinks";
import Dropdown from "../ui/Dropdown";
import UploadFile from "../ui/UploadFile";
import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "../ui/checkbox";

type EventFormProp = {
  userId: string;
  type: "Create" | "Update";
};

const EventForm = ({ userId, type }: EventFormProp) => {
  const initialValue = eventDefaultValues;

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValue,
  });

  function onSubmit(values: z.infer<typeof eventFormSchema>) {
    console.log(values);
  }

  const [File, setFile] = useState([]);
  const [StartDate, setStartDate] = useState(new Date());
  const [EndDate, setEndDate] = useState(new Date());

  return (
    <Form {...form}>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter Title"
                    {...field}
                    className="input-field"
                  />
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
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Description</FormLabel>
                <FormControl className="h-90">
                  <Textarea
                    placeholder="Enter desctription"
                    className="textarea "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageURL"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Image</FormLabel>
                <FormControl className="h-70">
                  <UploadFile
                    onChangeFile={field.onChange}
                    ImageURL={field.value}
                    setFiles={setFile}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row ">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Location</FormLabel>
                <FormControl className="flex-center bg-grey-50 w-full rounded-full pl-2">
                  <div>
                    <Image
                      src="/assets/icons/location-grey.svg"
                      width={24}
                      height={24}
                      alt="location"
                    />
                    <input
                      type="text"
                      placeholder="Enter event location"
                      {...field}
                      className="input-field w-full"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Start Date</FormLabel>
                <FormControl className="flex bg-grey-50 rounded-full pl-2">
                  <div>
                    <Image
                      src="/assets/icons/calendar.svg"
                      width={24}
                      height={24}
                      alt="date"
                    />
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      className="h-[55px]"
                      showTimeSelect
                      dateFormat={"dd/MM/yyyy h:mm aa"}
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="endDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>End Date</FormLabel>
                <FormControl className="flex bg-grey-50 rounded-full pl-3">
                  <div>
                    <Image
                      src="/assets/icons/calendar.svg"
                      width={24}
                      height={24}
                      alt="location"
                    />
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      className="h-[55px]"
                      showTimeSelect
                      dateFormat={"dd/MM/yyyy h:mm aa"}
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Price</FormLabel>
                <FormControl className="flex bg-grey-50 rounded-full pl-3">
                  <div>
                    <Image
                      src="/assets/icons/dollar.svg"
                      width={24}
                      height={24}
                      alt="dollar"
                    />
                    <input
                      type="number"
                      placeholder="Enter event price"
                      className="input-field bg-grey-50 w-full"
                      {...field}
                    />
                    <FormField
                      control={form.control}
                      name="isFree"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <div className="flex gap-3 items-center mt-3">
                              <label>Free Ticket</label>
                              <Checkbox
                                id="isFree"
                                className="border-2 border-primary-500"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="wrapper w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default EventForm;
