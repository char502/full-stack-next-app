import { Ticket } from '@prisma/client';
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
  return (
    <form
      // binds 'ticket.id' to the 'updateTicket()' function,
      action={upsertTicket.bind(null, ticket?.id)}
      // Alternative Approach - requires hidden input to pass ticket id
      // action={updateTicket}
      className="flex flex-col gap-y-2"
    >
      {/* <Input name="id" type="hidden" defaultValue={ticket.id} /> */}

      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" type="text" defaultValue={ticket?.title} />

      <Label htmlFor="content">Content</Label>
      <Textarea id="content" name="content" defaultValue={ticket?.content} />

      <Button type="submit">{ticket ? 'Edit' : 'Create'}</Button>
    </form>
  );
};

export { TicketUpsertForm };
