'use client'

import EventForm from "@/components/shared/EventForm"
import { auth, redirectToSignIn, useUser } from "@clerk/nextjs";
import { Route } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";
import { useEffect } from "react";

const CreateEvent = () => {
  const { user } = useUser();

  const userId = user?.id as string;

  useEffect(() => {
    console.log('user id',userId);
  }, [userId]);

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">Create Event</h3>
      </section>

      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  )
}

export default CreateEvent