'use client';

import { Ticket } from '@prisma/client';
import { LucideLoaderCircle } from 'lucide-react';
import { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { upsertTicket } from '../actions/upsert-ticket';

type TicketUpsertFormProps = {
  ticket?: Ticket;
};

// Upsert Form - Either Creates or Updates a ticket depending on whether a ticket is present
const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  // use Transition - allows for a transitional action in the UI
  // i.e. while a server action is running (or other asynchronous operation)
  const [isPending, startTransition] = useTransition();

  // got the form data before in the server action (upsert-ticket.ts)
  // but now we are wrapping this into a startTransition call here.
  // And whenever this async task is running here
  // the isPending flag is set to true
  // So whenever we call this server action (here)
  // wont see the pending spinner if don't use startTransition
  const upsertTicketAction = (formData: FormData) => {
    startTransition(async () => {
      await upsertTicket.bind(null, ticket?.id)(formData);
    });
  };

  return (
    <form
      // binds 'ticket.id' to the 'updateTicket()' function,
      action={upsertTicketAction}
      // Alternative Approach - requires hidden input to pass ticket id
      // action={updateTicket}
      className="flex flex-col gap-y-2"
    >
      {/* <Input name="id" type="hidden" defaultValue={ticket.id} /> */}

      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" defaultValue={ticket?.title} />

      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" defaultValue={ticket?.content} />

      <Button disabled={isPending} type="submit">
        {isPending && (
          <LucideLoaderCircle className="mr-2 h-4 w-4 animate-spin" />
        )}
        {ticket ? 'Edit' : 'Create'}
      </Button>
    </form>
  );
};

export { TicketUpsertForm };
