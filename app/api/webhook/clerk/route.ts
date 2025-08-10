import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { createUser, deleteUser, updateUser } from '@/lib/actions/user.actions'
import { clerkClient } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
 
export async function POST(req: Request) {
 
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET
 
  if (!WEBHOOK_SECRET) {
    throw new Error('Please add CLERK_WEBHOOK_SIGNING_SECRET from Clerk Dashboard to .env')
  }
 
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");
 
  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }
 
  // Get the body
  const payload = await req.json()
  const body = JSON.stringify(payload);
 
  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);
 
  let evt: WebhookEvent
 
  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    })
  }
 
  // Get the ID and type
  const { id } = evt.data;
  const eventType = evt.type;
 
  if(eventType === 'user.created') {
    const { id, email_addresses, image_url, first_name, last_name, username } = evt.data as any;

    const email = email_addresses?.[0]?.email_address as string
    const safeUsername = username ?? (email ? email.split('@')[0] : id)
    const safeFirst = first_name ?? ''
    const safeLast = last_name ?? ''
    const photo = image_url ?? ''

    const user = {
      clerkId: id,
      email,
      username: safeUsername,
      firstName: safeFirst,
      lastName: safeLast,
      photo,
    }

    // Try to create, if exists then fetch
    let newUser = null as any
    try {
      newUser = await createUser(user);
    } catch (e) {
      // likely duplicate, fetch instead
      newUser = await (await import('@/lib/actions/user.actions')).getUserByClerkId(id);
    }

    if(newUser) {
      await clerkClient.users.updateUserMetadata(id, {
        publicMetadata: {
          userId: newUser._id
        }
      })
    }

    return NextResponse.json({ message: 'OK', user: newUser })
  }

  if (eventType === 'user.updated') {
    const {id, image_url, first_name, last_name, username } = evt.data as any

    const user = {
      firstName: first_name ?? '',
      lastName: last_name ?? '',
      username: (username as string) ?? '',
      photo: image_url ?? '',
    }

    const updatedUser = await updateUser(id, user)

    return NextResponse.json({ message: 'OK', user: updatedUser })
  }

  if (eventType === 'user.deleted') {
    const { id } = evt.data

    const deletedUser = await deleteUser(id!)

    return NextResponse.json({ message: 'OK', user: deletedUser })
  }
 
  return new Response('', { status: 200 })
}
 