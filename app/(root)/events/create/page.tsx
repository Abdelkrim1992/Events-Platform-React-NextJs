import EventForm from "@/components/shared/EventForm"
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, getUserByClerkId } from "@/lib/actions/user.actions";

const CreateEvent = async () => {
  const user = await currentUser();
  if (!user) {
    redirect('/sign-in');
  }

  let dbUser: any | null = null;
  try {
    dbUser = await getUserByClerkId(user.id);
  } catch {}

  if (!dbUser) {
    const email = user.emailAddresses?.[0]?.emailAddress ?? '';
    const username = user.username ?? (email ? email.split('@')[0] : user.id);
    const firstName = user.firstName ?? '';
    const lastName = user.lastName ?? '';
    const photo = user.imageUrl ?? '';

    dbUser = await createUser({
      clerkId: user.id,
      email,
      username,
      firstName,
      lastName,
      photo,
    });
  }

  const userId = dbUser?._id || '';

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